import { Response } from "express";

import type { AuthRequest } from "../../middleware/auth.middleware.js";

import { generateMonthlyReview ,chatWithAI} from "./ai.service.js";

export async function generateReview(
  req: AuthRequest,
  res: Response
) {
  try {
    const review = await generateMonthlyReview(req.userId!);

    return res.json({
      success: true,
      review,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Failed to generate AI review",
    });
  }
}

export async function chat(
  req: AuthRequest,
  res: Response
) {
  try {

    const userId = req.userId!;

    const { question } = req.body;

    const answer = await chatWithAI(
      userId,
      question
    );

    res.json({
      success: true,
      answer,
    });

  } catch (err) {

    console.log(err);

    res.status(500).json({
      success: false,
      message: "AI failed",
    });

  }
}