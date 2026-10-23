
const API_URL = import.meta.env.VITE_API_BASE_URL;

export async function fetchSampleEmployees() {
  if (!API_URL) {
    throw new Error("VITE_API_BASE_URL is not configured.");
  }

  const response = await fetch(`${API_URL}/users`);

  if (!response.ok) {
    throw new Error("Unable to fetch employees.");
  }

  return response.json();
}
