import { Router } from "express";

import {
  create,
  getAll,
  update,
  remove,
  monthlySummary,
  categorySummaryController,
} from "./expense.controller.js";

import { authenticate } from "../../middleware/auth.middleware.js";

import { expenseValidation } from "./expense.validation.js";

const router = Router();

router.post(
  "/",
  authenticate,
  expenseValidation,
  create
);

router.get(
  "/",
  authenticate,
  getAll
);

router.patch(
  "/:id",
  authenticate,
  update
);

router.delete(
  "/:id",
  authenticate,
  remove
);

router.get(
  "/monthly",
  authenticate,
  monthlySummary
);

router.get(
  "/category",
  authenticate,
  categorySummaryController
);

export default router;

