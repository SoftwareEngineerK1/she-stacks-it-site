export async function mypawFetch<T>(path: string, options?: RequestInit): Promise<T> {
  const response = await fetch(`/api/${path.replace(/^\//, "")}`, {
    headers: {
      "Content-Type": "application/json",
      ...(options?.headers || {}),
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error(`myPAW API error: ${response.status}`);
  }

  return response.json() as Promise<T>;
}
