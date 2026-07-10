import { Response } from "express";

import { validationResult } from "express-validator";

import type { AuthRequest } from "../../middleware/auth.middleware.js";

import {
  createExpense,
  getExpenses,
  updateExpense,
  deleteExpense,
  monthlyExpenseSummary,
  categorySummary,
} from "./expense.service.js";

export async function create(
  req: AuthRequest,
  res: Response
) {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors.array(),
    });
  }

  const expense = await createExpense(
    req.userId!,
    req.body
  );

  return res.status(201).json({
    success: true,
    expense,
  });
}

export async function getAll(
  req: AuthRequest,
  res: Response
) {
  const expenses = await getExpenses(
    req.userId!
  );

  return res.json({
    success: true,
    expenses,
  });
}

export async function update(
  req: AuthRequest,
  res: Response
) {
  const expense = await updateExpense(
    req.params.id as string,
    req.userId!,
    req.body
  );

  return res.json({
    success: true,
    expense,
  });
}
export async function remove(
  req: AuthRequest,
  res: Response
) {
  await deleteExpense(
    req.params.id as string,
    req.userId!
  );

  return res.json({
    success: true,
    message: "Expense deleted successfully",
  });
}

export async function monthlySummary(
  req: AuthRequest,
  res: Response
) {
  const summary = await monthlyExpenseSummary(
    req.userId!
  );

  return res.json({
    success: true,
    summary,
  });
}

export async function categorySummaryController(
  req: AuthRequest,
  res: Response
) {
  const summary = await categorySummary(
    req.userId!
  );

  return res.json({
    success: true,
    summary,
  });
}