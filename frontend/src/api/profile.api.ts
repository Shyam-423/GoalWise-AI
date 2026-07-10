import api from "./axios";

export async function getProfile() {
  const res = await api.get("/profile/me");
  return res.data;
}

export async function updateProfile(data: any) {
  const res = await api.post("/profile/setup", data);
  return res.data;
}

export async function getProfileStatus() {
  const res = await api.get("/profile/status");
  return res.data;
}

export async function setupProfile(data: any) {
  const res = await api.post("/profile/setup", data);
  return res.data;
}
