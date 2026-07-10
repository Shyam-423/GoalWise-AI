import prisma from "../../lib/prisma.js";

import type { CreateExpenseDTO } from "./expense.types.js";

export async function createExpense(
  userId: string,
  data: CreateExpenseDTO
) {
  return prisma.expense.create({
    data: {
      userId,

      title: data.title,

      amount: data.amount,

      category: data.category,

      customCategory: data.customCategory,
      

      expenseDate: new Date(data.expenseDate),

      notes: data.notes,

      isRecurring: data.isRecurring ?? false,

      recurringType: data.recurringType,
    },
  });
}

export async function getExpenses(userId: string) {
  return prisma.expense.findMany({
    where: {
      userId,
    },

    orderBy: {
      expenseDate: "desc",
    },
  });
}

export async function updateExpense(
  expenseId: string,
  userId: string,
  data: any
  
) {


  const expense = await prisma.expense.findFirst({
    where: {
      id: expenseId,
      userId,
    },
    
  });

  if (!expense) {
    throw new Error("Expense not found");
  }

  return prisma.expense.update({
  where: {
    id: expenseId,
  },
  data: {
    title: data.title,
    category: data.category,
    customCategory: data.customCategory,
    amount: data.amount,
    expenseDate: new Date(data.expenseDate),
  },
});  
}


export async function deleteExpense(
  expenseId: string,
  userId: string
) {
  const expense = await prisma.expense.findFirst({
    where: {
      id: expenseId,
      userId,
    },
  });

  if (!expense) {
    throw new Error("Expense not found");
  }

  return prisma.expense.delete({
    where: {
      id: expenseId,
    },
  });
}

export async function monthlyExpenseSummary(userId: string) {
  return prisma.expense.aggregate({
    where: {
      userId,
    },
    _sum: {
      amount: true,
    },
  });
}

export async function categorySummary(userId: string) {
  return prisma.expense.groupBy({
    by: ["category"],
    where: {
      userId,
    },
    _sum: {
      amount: true,
    },
  });
}