const BASE_URL = "https://dummyjson.com";

interface ApiConfig extends RequestInit {
  path: string;
}

export async function api<T>({ path, ...options }: ApiConfig): Promise<T> {
  const response = await fetch(`${BASE_URL}${path}`, {
    ...options,
  });

  if (!response.ok) {
    throw new Error("API Error");
  }

  return response.json();
}
