import { Response } from "express";
import { validationResult } from "express-validator";

import type { AuthRequest } from "../../middleware/auth.middleware.js";

import {
  setupProfile,
  getProfile,
  onboardingStatus,
} from "./profile.service.js";

export async function setup(req: AuthRequest, res: Response) {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors.array(),
    });
  }

  const profile = await setupProfile(req.userId!, req.body);

  return res.json({
    success: true,
    profile,
  });
}

export async function me(
  req: AuthRequest,
  res: Response
) {
  const profile = await getProfile(req.userId!);

  return res.json({
    success: true,
    profile,
  });
}

export async function status(
  req: AuthRequest,
  res: Response
) {
  const profile = await onboardingStatus(req.userId!);

  return res.json({
    success: true,
    onboardingCompleted:
      profile?.onboardingCompleted ?? false,
  });
}