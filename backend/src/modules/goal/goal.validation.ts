import { body } from "express-validator";

export const goalValidation = [
  body("title").notEmpty(),

  body("targetAmount").isFloat({ min: 1 }),

  body("priority").isIn([
    "LOW",
    "MEDIUM",
    "HIGH"
  ])
];