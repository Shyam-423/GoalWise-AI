import ai from "../../lib/gemini.js";
import prisma from "../../lib/prisma.js";
import { buildFinancePrompt } from "./ai.prompt.js";


export async function generateMonthlyReview(userId: string) {
  const profile = await prisma.userProfile.findUnique({
    where: { userId },
  });

  const goals = await prisma.goal.findMany({
    where: { userId },
  });

  const expenses = await prisma.expense.findMany({
    where: { userId },
    orderBy: {
      expenseDate: "desc",
    },
  });

  const totalExpense = await prisma.expense.aggregate({
    where: { userId },
    _sum: {
      amount: true,
    },
  });

  const totalSaved = await prisma.goal.aggregate({
    where: { userId },
    _sum: {
      savedAmount: true,
    },
  });

  const prompt = buildFinancePrompt({
    salary: profile?.monthlySalary ?? 0,
    monthlyBudget: profile?.monthlyBudget ?? 0,
    totalExpense: totalExpense._sum.amount ?? 0,
    totalSaved: totalSaved._sum.savedAmount ?? 0,
    goals,
    expenses,
  });

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

  const text = response.text ?? "";

  const cleaned = text
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

  const result = JSON.parse(cleaned);

  const now = new Date();

  await prisma.monthlyReview.upsert({
    where: {
      userId_month_year: {
        userId,
        month: now.getMonth() + 1,
        year: now.getFullYear(),
      },
    },
    update: {
      financialScore: result.financialScore,
      aiSummary: result.review,
      suggestions: result.suggestions,
    },
    create: {
      userId,
      month: now.getMonth() + 1,
      year: now.getFullYear(),
      financialScore: result.financialScore,
      aiSummary: result.review,
      suggestions: result.suggestions,
    },
  });

  return result;
}


export async function chatWithAI(
  userId: string,
  question: string
) {

  

  const profile = await prisma.userProfile.findUnique({
    where: {
      userId,
    },
  });

  const goals = await prisma.goal.findMany({
    where: {
      userId,
    },
  });

  const expenses = await prisma.expense.findMany({
    where: {
      userId,
    },
    orderBy: {
      expenseDate: "desc",
    },
    take: 20,
  });

  const totalExpense = expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );

  const totalSaved = goals.reduce(
    (sum, goal) => sum + goal.savedAmount,
    0
  );

  const prompt = `

You are GoalWise AI, a personal finance advisor.

User Financial Details

Monthly Salary:
₹${profile?.monthlySalary ?? 0}

Monthly Budget:
₹${profile?.monthlyBudget ?? 0}

Monthly Savings Target:
₹${profile?.monthlySavingsTarget ?? 0}

Total Saved:
₹${totalSaved}

Total Expenses:
₹${totalExpense}

Goals:

${goals
  .map(
    (goal) =>
      `- ${goal.title}
Target ₹${goal.targetAmount}
Saved ₹${goal.savedAmount}`
  )
  .join("\n")}

Recent Expenses:

${expenses
  .map(
    (expense) =>
      `- ${expense.title}
₹${expense.amount}
(${expense.category})`
  )
  .join("\n")}

User Question:

${question}

Rules:

Give practical financial advice.

Keep the answer under 250 words.

Use bullet points whenever useful.

Always answer using the user's financial data.

`;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

  return response.text ?? "";
}


