import { Response } from "express";
import { validationResult } from "express-validator";

import type { AuthRequest } from "../../middleware/auth.middleware.js";

import {
  createGoal,
  getGoals,
  updateGoalSavings,
  updateGoal,
  deleteGoal,
} from "./goal.service.js";


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

  const goal = await createGoal(
    req.userId!,
    req.body
  );

  return res.status(201).json({
    success: true,
    goal,
  });
}

export async function getAll(
  req: AuthRequest,
  res: Response
) {
  const goals = await getGoals(req.userId!);

  return res.json({
    success: true,
    goals,
  });
}

export async function updateSavings(
  req: AuthRequest,
  res: Response
) {
const goalId = req.params.id as string;

const goal = await updateGoalSavings(
  goalId,
  Number(req.body.amount),
  req.userId!
);

  return res.json({
    success: true,
    goal,
  });
}


export async function update(
  req: AuthRequest,
  res: Response
) {
  const goal = await updateGoal(
    req.params.id as string,
    req.userId!,
    req.body
  );

  return res.json({
    success: true,
    goal,
  });
}

export async function remove(
  req: AuthRequest,
  res: Response
) {
  await deleteGoal(
    req.params.id as string,
    req.userId!
  );

  return res.json({
    success: true,
    message: "Goal deleted successfully",
  });
}