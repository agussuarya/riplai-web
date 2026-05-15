import { apiClient } from "../client";

export async function login(email: string, password: string) {
  const res = await apiClient.post<{ token: string }>("/auth/login", {
    email,
    password,
  });
  return res.data;
}
