import { Router } from "express";

import { authenticate } from "../../middleware/auth.middleware.js";

import { generateReview,chat } from "./ai.controller.js";

const router = Router();

router.post(
  "/review",
  authenticate,
  generateReview
);

router.post(
  "/chat",
  authenticate,
  chat
);

export default router;