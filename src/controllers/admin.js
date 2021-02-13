import { apiUrl, fetcher } from "../utils/fetcher";

export async function adminLogin(username, password) {
  const data = await fetch(`${apiUrl}/auth/admin/login`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authentication: process.env.NEXT_PUBLIC_API_TOKEN,
    },
    body: JSON.stringify({
      username,
      password,
    }),
  });
  if (data) return data.json();
}
