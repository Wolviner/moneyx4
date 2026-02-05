import { type } from "os";
import z from "zod";

export const accountSchema = z.object({
  name: z.string().min(1, "Name is required"),
  type: z.enum(["ACCOUNT", "SAVINGS"]),
  balance: z.number().min(1, "initial balance is required"),
  isDefault: z.boolean().default(false),
});
