import { body } from "express-validator";

export const profileSetupValidation = [
  body("salaryType")
    .isIn(["FIXED", "VARIABLE"])
    .withMessage("Invalid salary type"),

  body("monthlySalary")
    .isFloat({ min: 1 })
    .withMessage("Invalid salary"),

  body("monthlyBudget")
    .isFloat({ min: 1 })
    .withMessage("Invalid budget"),

  body("monthlySavingsTarget")
    .isFloat({ min: 0 })
    .withMessage("Invalid savings target"),

  body("salaryCreditDay")
    .isInt({ min: 1, max: 31 })
    .withMessage("Salary day must be between 1-31")
];