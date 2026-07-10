import prisma from "../../lib/prisma.js";
import type { CreateGoalDTO } from "./goal.types.js";

export async function createGoal(
  userId: string,
  data: CreateGoalDTO
) {
  return prisma.goal.create({
    data: {
      userId,
      title: data.title,
      targetAmount: data.targetAmount,
      priority: data.priority,
      deadline: data.deadline
        ? new Date(data.deadline)
        : null,
    },
  });
}

export async function getGoals(userId: string) {
  return prisma.goal.findMany({
    where: {
      userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}

export async function updateGoalSavings(
  goalId: string,
  amount: number,
  userId: string
) {
  const goal = await prisma.goal.findFirst({
    where: {
      id: goalId,
      userId,
    },
  });

  if (!goal) {
    throw new Error("Goal not found");
  }

  const savedAmount = goal.savedAmount + amount;

    const status =
    savedAmount >= goal.targetAmount
        ? "COMPLETED"
        : "ACTIVE";

  return prisma.goal.update({
  where: {
    id: goalId,
  },
  data: {
    savedAmount,
    status,
  },
});
}

export async function updateGoal(
  goalId: string,
  userId: string,
  data: any
) {
  const goal = await prisma.goal.findFirst({
    where: {
      id: goalId,
      userId,
    },
  });

  if (!goal) {
    throw new Error("Goal not found");
  }

  return prisma.goal.update({
    where: {
      id: goalId,
    },
    data,
  });
}

export async function deleteGoal(
  goalId: string,
  userId: string
) {
  const goal = await prisma.goal.findFirst({
    where: {
      id: goalId,
      userId,
    },
  });

  if (!goal) {
    throw new Error("Goal not found");
  }

  return prisma.goal.delete({
    where: {
      id: goalId,
    },
  });
}