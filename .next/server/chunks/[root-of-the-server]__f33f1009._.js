module.exports = [
"[project]/moneyx4/.next-internal/server/app/api/inngest/route/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/module [external] (module, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("module", () => require("module"));

module.exports = mod;
}),
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[project]/moneyx4/src/actions/send-email.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"400878e38508853332ae258b1c20a79a3e1dbb379e":"sendEmail"},"",""] */ __turbopack_context__.s([
    "sendEmail",
    ()=>sendEmail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$moneyx4$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/moneyx4/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$moneyx4$2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/moneyx4/node_modules/next/dist/server/app-render/encryption.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$moneyx4$2f$node_modules$2f$resend$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/moneyx4/node_modules/resend/dist/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$moneyx4$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/moneyx4/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-route] (ecmascript)");
;
;
;
async function sendEmail({ to, subject, react }) {
    const resend = new __TURBOPACK__imported__module__$5b$project$5d2f$moneyx4$2f$node_modules$2f$resend$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Resend"](process.env.RESEND_API_KEY || "");
    try {
        const data = await resend.emails.send({
            from: "Finance App <onboarding@resend.dev>",
            to,
            subject,
            react
        });
        return {
            success: true,
            data
        };
    } catch (error) {
        console.error("Failed to send email:", error);
        return {
            success: false,
            error
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$moneyx4$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    sendEmail
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$moneyx4$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])(sendEmail, "400878e38508853332ae258b1c20a79a3e1dbb379e", null);
}),
"[externals]/@prisma/client [external] (@prisma/client, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("@prisma/client", () => require("@prisma/client"));

module.exports = mod;
}),
"[project]/moneyx4/src/lib/prisma.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "db",
    ()=>db
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
;
const db = globalThis.prisma || new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["PrismaClient"]();
if ("TURBOPACK compile-time truthy", 1) {
    globalThis.prisma = db;
} // globalThis.prisma: This global variable ensures that the Prisma client instance is
 // reused across hot reloads during development. Without this, each time your application
 // reloads, a new instance of the Prisma client would be created, potentially leading
 // to connection issues.
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/tty [external] (tty, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}),
"[project]/moneyx4/src/lib/inngest/client.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "inngest",
    ()=>inngest
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$moneyx4$2f$node_modules$2f$inngest$2f$components$2f$Inngest$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/moneyx4/node_modules/inngest/components/Inngest.js [app-route] (ecmascript)");
;
const inngest = new __TURBOPACK__imported__module__$5b$project$5d2f$moneyx4$2f$node_modules$2f$inngest$2f$components$2f$Inngest$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Inngest"]({
    id: "moneyx4",
    name: "MoneyX4",
    retryFunction: async (attempt)=>({
            delay: Math.pow(2, attempt) * 1000,
            maxAttempts: 3
        })
});
}),
"[project]/moneyx4/src/lib/inngest/functions.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "checkBudgetAlerts",
    ()=>checkBudgetAlerts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$moneyx4$2f$src$2f$actions$2f$send$2d$email$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/moneyx4/src/actions/send-email.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$moneyx4$2f$src$2f$lib$2f$prisma$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/moneyx4/src/lib/prisma.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$moneyx4$2f$src$2f$lib$2f$inngest$2f$client$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/moneyx4/src/lib/inngest/client.js [app-route] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/emails/template'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
;
;
const checkBudgetAlerts = __TURBOPACK__imported__module__$5b$project$5d2f$moneyx4$2f$src$2f$lib$2f$inngest$2f$client$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["inngest"].createFunction({
    name: "Check Budget Alerts"
}, {
    cron: "0 */6 * * *"
}, async ({ step })=>{
    const budgets = await step.run("fetch-budgets", async ()=>{
        return await __TURBOPACK__imported__module__$5b$project$5d2f$moneyx4$2f$src$2f$lib$2f$prisma$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].budget.findMany({
            include: {
                user: {
                    include: {
                        accounts: {
                            where: {
                                isDefault: true
                            }
                        }
                    }
                }
            }
        });
    });
    for (const budget of budgets){
        const defaultAccount = budget.user.accounts[0];
        if (!defaultAccount) continue; // Skip if no default account
        await step.run(`check-budget-${budget.id}`, async ()=>{
            const startDate = new Date();
            startDate.setDate(1); // Start of current month
            // Calculate total expenses for the default account only
            const expenses = await __TURBOPACK__imported__module__$5b$project$5d2f$moneyx4$2f$src$2f$lib$2f$prisma$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].transaction.aggregate({
                where: {
                    userId: budget.userId,
                    accountId: defaultAccount.id,
                    type: "EXPENSE",
                    date: {
                        gte: startDate
                    }
                },
                _sum: {
                    amount: true
                }
            });
            const totalExpenses = expenses._sum.amount?.toNumber() || 0;
            const budgetAmount = budget.amount;
            const percentageUsed = totalExpenses / budgetAmount * 100;
            // Check if we should send an alert
            if (percentageUsed >= 80 && // Default threshold of 80%
            (!budget.lastAlertSent || isNewMonth(new Date(budget.lastAlertSent), new Date()))) {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$moneyx4$2f$src$2f$actions$2f$send$2d$email$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sendEmail"])({
                    to: budget.user.email,
                    subject: `Budget Alert for ${defaultAccount.name}`,
                    react: EmailTemplate({
                        userName: budget.user.name,
                        type: "budget-alert",
                        data: {
                            percentageUsed,
                            budgetAmount: parseInt(budgetAmount).toFixed(1),
                            totalExpenses: parseInt(totalExpenses).toFixed(1),
                            accountName: defaultAccount.name
                        }
                    })
                });
                // Update last alert sent
                await __TURBOPACK__imported__module__$5b$project$5d2f$moneyx4$2f$src$2f$lib$2f$prisma$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].budget.update({
                    where: {
                        id: budget.id
                    },
                    data: {
                        lastAlertSent: new Date()
                    }
                });
            }
        });
    }
});
}),
"[project]/moneyx4/src/app/api/inngest/route.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "POST",
    ()=>POST,
    "PUT",
    ()=>PUT
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$moneyx4$2f$src$2f$lib$2f$inngest$2f$functions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/moneyx4/src/lib/inngest/functions.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$moneyx4$2f$src$2f$lib$2f$inngest$2f$client$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/moneyx4/src/lib/inngest/client.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$moneyx4$2f$node_modules$2f$inngest$2f$next$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/moneyx4/node_modules/inngest/next.js [app-route] (ecmascript)");
;
;
;
const { GET, POST, PUT } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$moneyx4$2f$node_modules$2f$inngest$2f$next$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["serve"])({
    client: __TURBOPACK__imported__module__$5b$project$5d2f$moneyx4$2f$src$2f$lib$2f$inngest$2f$client$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["inngest"],
    functions: [
        __TURBOPACK__imported__module__$5b$project$5d2f$moneyx4$2f$src$2f$lib$2f$inngest$2f$functions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["checkBudgetAlerts"]
    ]
});
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__f33f1009._.js.map