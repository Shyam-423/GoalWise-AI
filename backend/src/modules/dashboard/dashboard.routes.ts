import { Router } from "express";

import { dashboard } from "./dashboard.controller.js";

import { authenticate } from "../../middleware/auth.middleware.js";

const router = Router();

router.get(
  "/",
  authenticate,
  dashboard
);

export default router;