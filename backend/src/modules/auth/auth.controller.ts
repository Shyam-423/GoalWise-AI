import { Request, Response } from "express";
import { validationResult } from "express-validator";

import { registerUser } from "./auth.service.js";

import { loginUser } from "./auth.service.js";
import prisma from "../../lib/prisma.js";
import type { AuthRequest } from "../../middleware/auth.middleware.js";


export async function register(req: Request, res: Response) {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array(),
      });
    }

    const result = await registerUser(req.body);

    res.cookie("token", result.token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(201).json({
      success: true,
      message: "Account created successfully",
      user: result.user,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message:
        error instanceof Error ? error.message : "Something went wrong",
    });
  }
}

export async function login(req: Request, res: Response) {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array(),
      });
    }

    const result = await loginUser(req.body);

    res.cookie("token", result.token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.json({
      success: true,
      message: "Login successful",
      user: result.user,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message:
        error instanceof Error ? error.message : "Login failed",
    });
  }
}

export function logout(
  req: Request,
  res: Response
) {
  
  res.clearCookie("token", {
  httpOnly: true,
  secure: true,
  sameSite: "none",
});

  return res.json({
    success: true,
    message: "Logged out successfully",
  });
}

export async function getCurrentUser(
  req: AuthRequest,
  res: Response
) {
  const user = await prisma.user.findUnique({
    where: {
      id: req.userId,
    },
    select: {
      id: true,
      fullName: true,
      email: true,
      createdAt: true,
    },
  });

  return res.json({
    success: true,
    user,
  });
}