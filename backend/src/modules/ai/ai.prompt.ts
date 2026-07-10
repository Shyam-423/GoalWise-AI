export function buildFinancePrompt(data: any) {
  return `
You are an expert financial advisor.

Analyze this user's financial data.

Salary:
${data.salary}

Monthly Budget:
${data.monthlyBudget}

Total Expenses:
${data.totalExpense}

Total Saved:
${data.totalSaved}

Goals:
${JSON.stringify(data.goals)}

Recent Expenses:
${JSON.stringify(data.expenses)}

Return STRICTLY in this JSON format.

{
"review":"...",
"financialScore":90,
"suggestions":[
"...",
"...",
"..."
]
}

Do not return markdown.
Do not explain.
Only JSON.
`;
}