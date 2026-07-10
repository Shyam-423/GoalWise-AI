import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import morgan from "morgan";

import authRoutes from "./modules/auth/auth.routes.js";
import profileRoutes from "./modules/profile/profile.routes.js";
import expenseRoutes from "./modules/expense/expense.routes.js";
import goalRoutes from "./modules/goal/goal.routes.js";
import dashboardRoutes from "./modules/dashboard/dashboard.routes.js";
import aiRoutes from "./modules/ai/ai.routes.js";

const app = express();

app.use(helmet());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());

app.use(cookieParser());

app.use(morgan("dev"));

app.get("/", (_, res) => {
  res.json({
    success: true,
    message: "GoalWise Backend Running 🚀",
  });
});

app.use("/api/auth", authRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/expense", expenseRoutes);
app.use("/api/goal", goalRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/ai", aiRoutes);
    
export default app;