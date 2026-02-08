module.exports = [
"[project]/.next-internal/server/app/api/seed/route/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

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
"[project]/src/actions/seed.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"000e5fb2139581d2eda9dfac4247c42b5ca2d29d16":"seedTransactions"},"",""] */ __turbopack_context__.s([
    "seedTransactions",
    ()=>seedTransactions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/app-render/encryption.js [app-route] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/lib/prisma'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/subDays.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-route] (ecmascript)");
;
;
;
;
const ACCOUNT_ID = "440d147b-2354-4d2af-9578-3defa57ec863";
const USER_ID = "babedacc-64ea-4ca5-bd14-60532686c647";
// Categories with their typical amount ranges
const CATEGORIES = {
    INCOME: [
        {
            name: "salary",
            range: [
                5000,
                8000
            ]
        },
        {
            name: "freelance",
            range: [
                1000,
                3000
            ]
        },
        {
            name: "investments",
            range: [
                500,
                2000
            ]
        },
        {
            name: "other-income",
            range: [
                100,
                1000
            ]
        }
    ],
    EXPENSE: [
        {
            name: "housing",
            range: [
                1000,
                2000
            ]
        },
        {
            name: "transportation",
            range: [
                100,
                500
            ]
        },
        {
            name: "groceries",
            range: [
                200,
                600
            ]
        },
        {
            name: "utilities",
            range: [
                100,
                300
            ]
        },
        {
            name: "entertainment",
            range: [
                50,
                200
            ]
        },
        {
            name: "food",
            range: [
                50,
                150
            ]
        },
        {
            name: "shopping",
            range: [
                100,
                500
            ]
        },
        {
            name: "healthcare",
            range: [
                100,
                1000
            ]
        },
        {
            name: "education",
            range: [
                200,
                1000
            ]
        },
        {
            name: "travel",
            range: [
                500,
                2000
            ]
        }
    ]
};
// Helper to generate random amount within a range
function getRandomAmount(min, max) {
    return Number((Math.random() * (max - min) + min).toFixed(2));
}
// Helper to get random category with amount
function getRandomCategory(type) {
    const categories = CATEGORIES[type];
    const category = categories[Math.floor(Math.random() * categories.length)];
    const amount = getRandomAmount(category.range[0], category.range[1]);
    return {
        category: category.name,
        amount
    };
}
async function seedTransactions() {
    try {
        // Generate 90 days of transactions
        const transactions = [];
        let totalBalance = 0;
        for(let i = 90; i >= 0; i--){
            const date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["subDays"])(new Date(), i);
            // Generate 1-3 transactions per day
            const transactionsPerDay = Math.floor(Math.random() * 3) + 1;
            for(let j = 0; j < transactionsPerDay; j++){
                // 40% chance of income, 60% chance of expense
                const type = Math.random() < 0.4 ? "INCOME" : "EXPENSE";
                const { category, amount } = getRandomCategory(type);
                const transaction = {
                    id: crypto.randomUUID(),
                    type,
                    amount,
                    description: `${type === "INCOME" ? "Received" : "Paid for"} ${category}`,
                    date,
                    category,
                    status: "COMPLETED",
                    userId: USER_ID,
                    accountId: ACCOUNT_ID,
                    createdAt: date,
                    updatedAt: date
                };
                totalBalance += type === "INCOME" ? amount : -amount;
                transactions.push(transaction);
            }
        }
        // Insert transactions in batches and update account balance
        await db.$transaction(async (tx)=>{
            // Clear existing transactions
            await tx.transaction.deleteMany({
                where: {
                    accountId: ACCOUNT_ID
                }
            });
            // Insert new transactions
            await tx.transaction.createMany({
                data: transactions
            });
            // Update account balance
            await tx.account.update({
                where: {
                    id: ACCOUNT_ID
                },
                data: {
                    balance: totalBalance
                }
            });
        });
        return {
            success: true,
            message: `Created ${transactions.length} transactions`
        };
    } catch (error) {
        console.error("Error seeding transactions:", error);
        return {
            success: false,
            error: error.message
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    seedTransactions
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])(seedTransactions, "000e5fb2139581d2eda9dfac4247c42b5ca2d29d16", null);
}),
"[project]/src/app/api/seed/route.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$seed$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/actions/seed.js [app-route] (ecmascript)");
;
async function GET() {
    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$seed$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["seedTransactions"])();
    return Response.json(result);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__f657c88c._.js.map