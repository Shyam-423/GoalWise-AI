import { Router } from "express";

import {
  create,
  getAll,
  updateSavings,
  update,
  remove,
} from "./goal.controller.js";


import { authenticate } from "../../middleware/auth.middleware.js";

import { goalValidation } from "./goal.validation.js";

const router = Router();

router.post(
  "/",
  authenticate,
  goalValidation,
  create
);

router.get(
  "/",
  authenticate,
  getAll
);

router.patch(
  "/:id/progress",
  authenticate,
  updateSavings
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


export default router;