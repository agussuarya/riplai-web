import axios from "axios";

const USE_FIXTURES = process.env.NEXT_PUBLIC_USE_FIXTURES === "true";

export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8080",
  headers: { "Content-Type": "application/json" },
});

apiClient.interceptors.request.use((config) => {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("riplai_token") : null;
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

apiClient.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401 && typeof window !== "undefined") {
      localStorage.removeItem("riplai_token");
      window.location.href = "/login";
    }
    return Promise.reject(err);
  }
);

export { USE_FIXTURES };
