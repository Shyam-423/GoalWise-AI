import prisma from "../../lib/prisma.js";

export async function setupProfile(
  userId: string,
  data: any
) {
  return prisma.userProfile.upsert({
    where: {
      userId,
    },
    update: {
      salaryType: data.salaryType,
      monthlySalary: data.monthlySalary,
      monthlyBudget: data.monthlyBudget,
      monthlySavingsTarget: data.monthlySavingsTarget,
      salaryCreditDay: data.salaryCreditDay,
      onboardingCompleted: true,
    },
    create: {
      userId,

      salaryType: data.salaryType,

      monthlySalary: data.monthlySalary,

      monthlyBudget: data.monthlyBudget,

      monthlySavingsTarget: data.monthlySavingsTarget,

      salaryCreditDay: data.salaryCreditDay,

      onboardingCompleted: true,
    },
  });
}

export async function getProfile(userId: string) {
  return prisma.userProfile.findUnique({
    where: {
      userId,
    },
  });
}

export async function onboardingStatus(userId: string) {
  const profile = await prisma.userProfile.findUnique({
    where: {
      userId,
    },
    select: {
      onboardingCompleted: true,
    },
  });

  return profile;
}