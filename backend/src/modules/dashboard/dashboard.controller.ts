import { Response } from "express";

import type { AuthRequest } from "../../middleware/auth.middleware.js";

import { getDashboard } from "./dashboard.service.js";

export async function dashboard(
  req: AuthRequest,
  res: Response
) {
  const data = await getDashboard(req.userId!);

  return res.json({
    success: true,
    data
  });
}