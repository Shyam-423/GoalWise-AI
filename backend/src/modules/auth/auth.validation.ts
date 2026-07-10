import { body } from "express-validator";

export const registerValidation = [
  body("fullName")
    .trim()
    .notEmpty()
    .withMessage("Full name is required"),

  body("email")
    .isEmail()
    .withMessage("Valid email required"),

  body("password")
    .isLength({ min: 8 })
    .withMessage("Password must contain at least 8 characters"),

  body("pin")
    .isLength({ min: 4, max: 4 })
    .isNumeric()
    .withMessage("PIN must contain exactly 4 digits"),
];

export const loginValidation = [
  body("email").isEmail(),

  body("password").notEmpty(),
];