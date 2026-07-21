const BASE_URL = "https://dummyjson.com";

interface ApiConfig extends RequestInit {
  path: string;
}

export async function api<T>({ path, ...options }: ApiConfig): Promise<T> {
  const response = await fetch(`${BASE_URL}${path}`, {
    headers: {
      "Content-Type": "application/json",
    },

    ...options,
  });

  if (!response.ok) {
    const error = await response.json().catch(() => null);

    throw new Error(error?.message ?? "API request failed");
  }

  return response.json();
}
