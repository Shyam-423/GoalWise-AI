import api from "./axios";

export async function getExpenses() {
  const res = await api.get("/expense");
  return res.data;
}

export async function createExpense(data: any) {
  const res = await api.post("/expense", data);
  return res.data;
}

export async function updateExpense(
  id: string,
  data: any
) {
  const res = await api.patch(`/expense/${id}`, data);
  return res.data;
}

export async function deleteExpense(id: string) {
  const res = await api.delete(`/expense/${id}`);
  return res.data;
}