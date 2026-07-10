import api from "./axios";

export async function getGoals() {
  const res = await api.get("/goal");
  return res.data;
}

export async function createGoal(data: any) {
  const res = await api.post("/goal", data);
  return res.data;
}

export async function updateGoal(id: string, data: any) {
  const res = await api.patch(`/goal/${id}/progress`, data);
  return res.data;
}

export async function deleteGoal(id: string) {
  const res = await api.delete(`/goal/${id}`);
  return res.data;
}