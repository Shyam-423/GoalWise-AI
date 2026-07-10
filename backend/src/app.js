"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const auth_routes_js_1 = __importDefault(require("./modules/auth/auth.routes.js"));
const profile_routes_js_1 = __importDefault(require("./modules/profile/profile.routes.js"));
const expense_routes_js_1 = __importDefault(require("./modules/expense/expense.routes.js"));
const goal_routes_js_1 = __importDefault(require("./modules/goal/goal.routes.js"));
const dashboard_routes_js_1 = __importDefault(require("./modules/dashboard/dashboard.routes.js"));
const ai_routes_js_1 = __importDefault(require("./modules/ai/ai.routes.js"));
const app = (0, express_1.default)();
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)({
    origin: "http://localhost:5173",
    credentials: true,
}));
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use((0, morgan_1.default)("dev"));
app.get("/", (_, res) => {
    res.json({
        success: true,
        message: "GoalWise Backend Running 🚀",
    });
});
app.use("/api/auth", auth_routes_js_1.default);
app.use("/api/profile", profile_routes_js_1.default);
app.use("/api/expense", expense_routes_js_1.default);
app.use("/api/goal", goal_routes_js_1.default);
app.use("/api/dashboard", dashboard_routes_js_1.default);
app.use("/api/ai", ai_routes_js_1.default);
exports.default = app;
