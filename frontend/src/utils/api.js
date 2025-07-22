import { useAuth } from "../contexts/AuthContext";

export const authFetch = async (url, options = {}, token) => {
  const headers = {
    "Content-Type": "application/json",
    ...(options.headers || {}),
  };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const res = await fetch(url, { ...options, headers });
  return res;
};
