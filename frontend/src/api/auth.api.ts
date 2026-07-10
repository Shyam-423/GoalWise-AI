import api from "./axios";

export async function registerUser(data: any) {
  const res = await api.post("/auth/register", data);
  return res.data;
}

export async function loginUser(data: any) {
  const res = await api.post("/auth/login", data);
  return res.data;
}

export async function logoutUser() {
  const res = await api.post("/auth/logout");
  return res.data;
}

export async function getCurrentUser() {
  const res = await api.get("/auth/me");
  return res.data;
}