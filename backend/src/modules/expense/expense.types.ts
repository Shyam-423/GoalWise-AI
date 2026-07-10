export interface CreateExpenseDTO {
  title: string;
  amount: number;
  category:
    | "FOOD"
    | "TRANSPORT"
    | "SHOPPING"
    | "BILLS"
    | "HEALTH"
    | "EDUCATION"
    | "ENTERTAINMENT"
    | "TRAVEL"
    | "SUBSCRIPTION"
    | "INVESTMENT"
    | "OTHER";
  customCategory?: string;

  expenseDate: string;

  notes?: string;

  isRecurring?: boolean;

  recurringType?:
    | "DAILY"
    | "WEEKLY"
    | "MONTHLY"
    | "YEARLY";
}