import prisma from "../../lib/prisma.js";
import { hashValue } from "../../lib/bcrypt.js";
import { generateToken } from "../../lib/jwt.js";

import type { RegisterUserDTO } from "./auth.types.js";


import { compareValue } from "../../lib/bcrypt.js";

import type { LoginUserDTO } from "./auth.types.js";

export async function registerUser(data: RegisterUserDTO) {
  const existingUser = await prisma.user.findUnique({
    where: {
      email: data.email,
    },
  });

  if (existingUser) {
    throw new Error("Email already exists");
  }

  const hashedPassword = await hashValue(data.password);

  const hashedPin = await hashValue(data.pin);

  const user = await prisma.user.create({
    data: {
      fullName: data.fullName,
      email: data.email,
      password: hashedPassword,
      pinHash: hashedPin,
    },
  });

  const token = generateToken(user.id);

  return {
    user,
    token,
  };
}


export async function loginUser(data: LoginUserDTO) {
  const user = await prisma.user.findUnique({
    where: {
      email: data.email,
    },
  });

  if (!user) {
    throw new Error("Invalid email or password");
  }

  const isPasswordCorrect = await compareValue(
    data.password,
    user.password
  );

  if (!isPasswordCorrect) {
    throw new Error("Invalid email or password");
  }

  const token = generateToken(user.id);

  return {
    user,
    token,
  };
}