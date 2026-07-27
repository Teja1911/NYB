import {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

import { API_CLIENT } from "../constants";

import {
  axiosService,
  fetchService,
} from "../services";

function useUsers() {
  const [users, setUsers] = useState([]);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const [searchTerm, setSearchTerm] = useState("");

  const [editingUser, setEditingUser] = useState(null);

  const [apiClient, setApiClient] = useState(API_CLIENT.AXIOS);

  const service =
    apiClient === API_CLIENT.AXIOS
      ? axiosService
      : fetchService;

  // Load all users
  const loadUsers = useCallback(async () => {
  try {
    setLoading(true);
    setError("");

    const data = await service.getUsers();

    setUsers(data);
  } catch (err) {
    setError(err.message || "Failed to fetch users.");
  } finally {
    setLoading(false);
  }
  }, [service]);

  useEffect(() => {
  loadUsers();
}, [loadUsers]);

    // Create a new user
const addUser = async (user) => {
  try {
    setLoading(true);
    setError("");

    const newUser = await service.createUser(user);

    setUsers((prev) => [...prev, newUser]);
    
  } catch (err) {
    setError(err.message || "Failed to create user.");
  } finally {
    setLoading(false);
  }
};

// Update complete user
const editUser = async (id, user) => {
  try {
    setLoading(true);
    setError("");

    const updatedUser = await service.updateUser(id, user);

    setUsers((prev) =>
        prev.map((u) =>
            u.id === id ? updatedUser : u
        )
    );

setEditingUser(null);
  } catch (err) {
    setError(err.message || "Failed to update user.");
  } finally {
    setLoading(false);
  }
};

// Update selected fields only
const updatePartialUser = async (id, updatedFields) => {
    try {
    setLoading(true);
    setError("");

    const updatedUser = await service.patchUser(id,updatedFields);
    setUsers((prev) =>
        prev.map((u) =>
            u.id === id
                ? { ...u, ...updatedUser }
                : u
        )
    );
    } catch (err) {
    setError(err.message || "Failed to patch user.");
    } finally {
    setLoading(false);
    }
};

// Delete user
const removeUser = async (id) => {
  try {
    setLoading(true);
    setError("");

    await service.deleteUser(id);

    setUsers((prev) =>
    prev.filter((user) => user.id !== id)
    );
  } catch (err) {
    setError(err.message || "Failed to delete user.");
  } finally {
    setLoading(false);
  }
};

// Filter users based on search text
const filteredUsers = useMemo(() => {
  return users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
}, [users, searchTerm]);

return {
  users: filteredUsers,

  loading,

  error,

  searchTerm,
  setSearchTerm,

  apiClient,
  setApiClient,

  editingUser,
  setEditingUser,

  addUser,

  editUser,

  updatePartialUser,

  removeUser,
};
}

export default useUsers;