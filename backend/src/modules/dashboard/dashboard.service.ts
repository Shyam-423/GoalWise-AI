import prisma from "../../lib/prisma.js";

export async function getDashboard(userId: string) {

  const profile = await prisma.userProfile.findUnique({
    where: { userId }
  });

  const goals = await prisma.goal.findMany({
    where: { userId }
  });

  const expenses = await prisma.expense.findMany({
    where: { userId },
    orderBy: {
      expenseDate: "desc"
    },
    take: 5
  });

  const expenseTotal = await prisma.expense.aggregate({
    where: { userId },
    _sum: {
      amount: true
    }
  });

  const savedTotal = await prisma.goal.aggregate({
    where: { userId },
    _sum: {
      savedAmount: true
    }
  });

  const categorySummary = await prisma.expense.groupBy({
    by: ["category"],
    where: { userId },
    _sum: {
      amount: true
    }
  });

  let topCategory = null;

  if (categorySummary.length > 0) {

    topCategory = categorySummary.sort(
      (a, b) =>
        (b._sum.amount ?? 0) -
        (a._sum.amount ?? 0)
    )[0].category;

  }

  const totalExpense =
    expenseTotal._sum.amount ?? 0;

  const totalSaved =
    savedTotal._sum.savedAmount ?? 0;

  const remainingBudget =
    (profile?.monthlyBudget ?? 0) -
    totalExpense;

  const totalTarget = goals.reduce(
    (sum, goal) => sum + goal.targetAmount,
    0
  );

  const goalCompletion =
    totalTarget === 0
      ? 0
      : Math.round(
          (totalSaved / totalTarget) * 100
        );

  let financialScore = 100;

  if (profile) {

    if (totalExpense > profile.monthlyBudget)
      financialScore -= 20;

    if (goalCompletion < 30)
      financialScore -= 10;

    if (goals.length === 0)
      financialScore -= 10;

  }

  const latestReview = await prisma.monthlyReview.findFirst({
  where: {
    userId,
  },
  orderBy: {
    createdAt: "desc",
  },
});



  return {

  profile,

  totalExpense,

  totalSaved,

  remainingBudget,

  goalCompletion,

  financialScore,

  topCategory,

  goals,

  recentExpenses: expenses,

  latestReview

};

}