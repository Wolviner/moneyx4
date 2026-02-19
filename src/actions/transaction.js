"use server";

import { request } from "@arcjet/next";
import { db } from "../lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import aj from "../lib/arcjet";
import { GoogleGenAI } from "@google/genai";

const genAI = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const serializeAmount = (obj) => ({
  ...obj,
  amount: obj.amount.toNumber(),
});

export async function createTransaction(data) {
  try {
    const { userId } = await auth();
    if (!userId) throw new Error("Unauthorized");

    //Arcjet for rate limiting
    const req = await request();
    const decision = await aj.protect(req, { userId });

    if (decision.isDenied()) {
      if (decision.reason.isRateLimit()) {
        const { remaining, reset } = decision.reason;
        console.error({
          code: "RATE_LIMIT_EXCEEDED",
          remaining: remaining,
          resetTimeInSeconds: reset,
        });
        throw new Error("Too many requests. Please try again later.");
      }
    }

    const user = await db.user.findUnique({
      where: { clerkUserId: userId },
    });

    if (!user) throw new Error("User not found");

    const account = await db.account.findUnique({
      where: {
        id: data.accountId,
        userId: user.id,
      },
    });

    if (!account) throw new Error("Account not found");

    const balanceChange = data.type === "EXPENSE" ? -data.amount : data.amount;
    const newBalance = account.balance.toNumber() + balanceChange;

    const transaction = await db.$transaction(async (trans) => {
      const newTransaction = await trans.transaction.create({
        data: {
          ...data,
          userId: user.id,
          nextRecurringDate:
            data.isRecurring && data.recurringInterval
              ? calculateNextRecurringDate(data.date, data.recurringInterval)
              : null,
        },
      });

      await trans.account.update({
        where: { id: account.id },
        data: { balance: newBalance },
      });

      return newTransaction;
    });

    revalidatePath("/dashboard");
    revalidatePath(`/account/${transaction.accountId}`);
    return { success: true, data: serializeAmount(transaction) };
  } catch (error) {
    throw new Error(error.message);
  }
}

// Helper function to calculate next recurring date
function calculateNextRecurringDate(startDate, interval) {
  const date = new Date(startDate);

  switch (interval) {
    case "DAILY":
      date.setDate(date.getDate() + 1);
      break;
    case "WEEKLY":
      date.setDate(date.getDate() + 7);
      break;
    case "MONTHLY":
      date.setMonth(date.getMonth() + 1);
      break;
    case "YEARLY":
      date.setFullYear(date.getFullYear() + 1);
      break;
  }

  return date;
}

export async function scanReceipt(file) {
  try {
    const arrayBuffer = await file.arrayBuffer();
    const base64String = Buffer.from(arrayBuffer).toString("base64");

    const receiptSchema = {
      type: "OBJECT",
      properties: {
        isReceipt: {
          type: "BOOLEAN",
          description:
            "Set to true if the image appears to be a valid receipt, bill, or invoice. Set to false for non-receipt images.",
        },
        amount: { type: "NUMBER" },
        date: { type: "STRING" },
        description: { type: "STRING" },
        merchantName: { type: "STRING" },
        category: {
          type: "STRING",
          enum: [
            "housing",
            "transportation",
            "groceries",
            "utilities",
            "entertainment",
            "food",
            "shopping",
            "healthcare",
            "education",
            "personal",
            "travel",
            "insurance",
            "gifts",
            "bills",
            "other-expense",
          ],
        },
      },
      required: [
        "isReceipt",
        "amount",
        "date",
        "merchantName",
        "description",
        "category",
      ],
    };

    const result = await genAI.models.generateContent({
      model: "gemini-3-flash-preview",
      config: {
        responseMimeType: "application/json",
        responseSchema: receiptSchema,
      },
      contents: [
        {
          role: "user",
          parts: [
            {
              text: `Analyze this receipt image.
              1. If this is a valid receipt or bill, extract the data and set 'isReceipt' to true.
              2. CRITICAL: Return the 'date' strictly in ISO 8601 format (YYYY-MM-DD). If the year is missing, assume the current year.
              3. If this is NOT a receipt (e.g., a photo of a person, animal, or random object), set 'isReceipt' to false. Fill 'amount' with 0 and other string fields with "N/A"`,
            },
            {
              inlineData: {
                data: base64String,
                mimeType: file.type,
              },
            },
          ],
        },
      ],
    });
    const responseText = result.candidates[0].content.parts[0].text;

    // Now parse the clean JSON string
    const data = JSON.parse(responseText);
    console.log("Parsed receipt data:", data);
    if (data.isReceipt === false) {
      console.error("Image was flagged as not a receipt.");
      throw new Error(
        "Invalid image: The uploaded file does not appear to be a valid receipt or bill.",
      );
    }
    let parsedDate = new Date(); // Default to today if parsing fails
    if (data.date && data.date !== "N/A") {
      const timestamp = Date.parse(data.date);
      if (!isNaN(timestamp)) {
        parsedDate = new Date(timestamp);
      }
    }
    return {
      amount: parseFloat(data.amount),
      date: parsedDate,
      description: data?.merchantName
        ? `${data.merchantName} - ${data.description}`
        : data.description,
      category: data.category,
      merchantName: data.merchantName,
    };
  } catch (error) {
    console.error("Error scanning receipt:", error.message);
    throw new Error("Failed to scan receipt");
  }
}

export async function getTransaction(id) {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
  });

  if (!user) throw new Error("User not found");

  const transaction = await db.transaction.findUnique({
    where: {
      id,
      userId: user.id,
    },
  });

  if (!transaction) throw new Error("Transaction not found");

  return serializeAmount(transaction);
}

export async function updateTransaction(id, data) {
  try {
    const { userId } = await auth();
    if (!userId) throw new Error("Unauthorized");

    const user = await db.user.findUnique({
      where: { clerkUserId: userId },
    });

    if (!user) throw new Error("User not found");

    // Get original transaction to calculate balance change
    const originalTransaction = await db.transaction.findUnique({
      where: {
        id,
        userId: user.id,
      },
      include: {
        account: true,
      },
    });

    if (!originalTransaction) throw new Error("Transaction not found");

    // Calculate balance changes
    const oldBalanceChange =
      originalTransaction.type === "EXPENSE"
        ? -originalTransaction.amount.toNumber()
        : originalTransaction.amount.toNumber();

    const newBalanceChange =
      data.type === "EXPENSE" ? -data.amount : data.amount;

    const netBalanceChange = newBalanceChange - oldBalanceChange;

    // Update transaction and account balance in a transaction
    const transaction = await db.$transaction(async (tx) => {
      const updated = await tx.transaction.update({
        where: {
          id,
          userId: user.id,
        },
        data: {
          ...data,
          nextRecurringDate:
            data.isRecurring && data.recurringInterval
              ? calculateNextRecurringDate(data.date, data.recurringInterval)
              : null,
        },
      });

      // Update account balance
      await tx.account.update({
        where: { id: data.accountId },
        data: {
          balance: {
            increment: netBalanceChange,
          },
        },
      });

      return updated;
    });

    revalidatePath("/dashboard");
    revalidatePath(`/account/${data.accountId}`);

    return { success: true, data: serializeAmount(transaction) };
  } catch (error) {
    throw new Error(error.message);
  }
}
