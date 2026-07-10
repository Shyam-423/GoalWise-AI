export interface CreateGoalDTO {
  title: string;
  targetAmount: number;
  priority: "LOW" | "MEDIUM" | "HIGH";
  deadline?: string;
}