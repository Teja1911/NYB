export async function getEmployees() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch employees.");
  }

  const users = await response.json();

  return users.map((user) => ({
    id: user.id,
    name: user.name,
    email: user.email,
  }));
}