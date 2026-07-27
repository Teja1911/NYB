const BASE_URL = "https://jsonplaceholder.typicode.com/users";

/**
 * Common function to handle fetch responses
 */
const handleResponse = async (response) => {
  if (!response.ok) {
    throw new Error(`HTTP Error: ${response.status}`);
  }

  return response.json();
};

/**
 * GET - Fetch all users
 */
export const getUsers = async () => {
  const response = await fetch(BASE_URL);
  return handleResponse(response);
};

/**
 * POST - Create a new user
 */
export const createUser = async (user) => {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  return handleResponse(response);
};

/**
 * PUT - Replace entire user
 */
export const updateUser = async (id, user) => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  return handleResponse(response);
};

/**
 * PATCH - Update selected fields
 */
export const patchUser = async (id, updatedFields) => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedFields),
  });

  return handleResponse(response);
};

/**
 * DELETE - Remove user
 */
export const deleteUser = async (id) => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });

  return handleResponse(response);
};