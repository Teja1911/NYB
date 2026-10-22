import axios from "axios";
const API_URL = "https://jsonplaceholder.typicode.com/users";
// GET: Fetch all users
export async function getUsers() {
  const response = await axios.get(API_URL);
  return response.data;
}
// POST: Add a user
export async function addUser(user) {
  const response = await axios.post(API_URL, user);
  return response.data;
}
// PUT: Update a user
export async function updateUser(user) {
  const response = await axios.put(
    `${API_URL}/${user.id}`,
    user
  );
  return response.data;
}
// DELETE: Delete a user
export async function deleteUser(id) {
  await axios.delete(`${API_URL}/${id}`);
  return true;
}
