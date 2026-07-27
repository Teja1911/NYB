import axiosInstance from "./axiosConfig";

/**
 * GET - Fetch all users
 */
export const getUsers = async () => {
  const response = await axiosInstance.get("/users");
  return response.data;
};

/**
 * POST - Create a new user
 */
export const createUser = async (user) => {
  const response = await axiosInstance.post("/users", user);
  return response.data;
};

/**
 * PUT - Replace entire user
 */
export const updateUser = async (id, user) => {
  const response = await axiosInstance.put(`/users/${id}`, user);
  return response.data;
};

/**
 * PATCH - Update selected fields
 */
export const patchUser = async (id, updatedFields) => {
  const response = await axiosInstance.patch(
    `/users/${id}`,
    updatedFields
  );

  return response.data;
};

/**
 * DELETE - Remove user
 */
export const deleteUser = async (id) => {
  const response = await axiosInstance.delete(`/users/${id}`);
  return response.data;
};