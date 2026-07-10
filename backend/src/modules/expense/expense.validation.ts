import { body } from "express-validator";

export const expenseValidation = [
  body("title").notEmpty(),

  body("amount").isFloat({ min: 1 }),

  body("category").isIn([
    "FOOD",
    "TRANSPORT",
    "SHOPPING",
    "BILLS",
    "HEALTH",
    "EDUCATION",
    "ENTERTAINMENT",
    "TRAVEL",
    "SUBSCRIPTION",
    "INVESTMENT",
    "OTHER",
  ]),

  body("expenseDate").isISO8601(),
];