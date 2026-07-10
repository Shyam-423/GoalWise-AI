import { Router } from "express";

import {
  setup,
  me,
  status,
} from "./profile.controller.js";

import { authenticate } from "../../middleware/auth.middleware.js";

import { profileSetupValidation } from "./profile.validation.js";

const router = Router();

router.post(
  "/setup",
  authenticate,
  profileSetupValidation,
  setup
);

router.get(
  "/me",
  authenticate,
  me
);

router.get(
  "/status",
  authenticate,
  status
);

export default router;