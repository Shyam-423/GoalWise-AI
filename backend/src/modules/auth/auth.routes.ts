import { Router } from "express";

import { register } from "./auth.controller.js";
import { registerValidation } from "./auth.validation.js";
import { login } from "./auth.controller.js";
import { loginValidation } from "./auth.validation.js";
import {
  logout,
  getCurrentUser,
} from "./auth.controller.js";

import { authenticate } from "../../middleware/auth.middleware.js";



const router = Router();

router.post(
  "/register",
  registerValidation,
  register
);
router.post(
  "/login",
  loginValidation,
  login
);
router.post("/logout", logout);

router.get(
  "/me",
  authenticate,
  getCurrentUser
);

export default router;