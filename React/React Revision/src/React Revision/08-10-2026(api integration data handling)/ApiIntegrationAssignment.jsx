import { useEffect, useState } from "react";

const API = "https://jsonplaceholder.typicode.com/users";

// API functions
const api = {
  getUsers: async () => {
    const response = await fetch(API);

    if (!response.ok) {
      throw new Error("Unable to fetch users");
    }

    return response.json();
  },

  addUser: async (user) => {
    const response = await fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    return response.json();
  },

  updateUser: async (id, user) => {
    const response = await fetch(`${API}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    return response.json();
  },

  deleteUser: async (id) => {
    return fetch(`${API}/${id}`, {
      method: "DELETE",
    });
  },
};

function ApiIntegrationAssignment() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function loadUsers() {
    try {
      setLoading(true);
      setError("");

      const data = await api.getUsers();
      setUsers(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  async function createUser() {
    const newUser = await api.addUser({
      name: "New User",
      email: "new@example.com",
    });

    setUsers((current) => [...current, newUser]);
  }

  async function editUser(user) {
    const updated = await api.updateUser(user.id, {
      name: `${user.name} Updated`,
    });

    setUsers((current) =>
      current.map((item) =>
        item.id === user.id
          ? { ...item, ...updated }
          : item
      )
    );
  }

  async function removeUser(id) {
    await api.deleteUser(id);

    setUsers((current) =>
      current.filter((user) => user.id !== id)
    );
  }

  useEffect(() => {
    loadUsers();
  }, []);

  const cities = [
    "All",
    ...new Set(users.map((user) => user.address.city)),
  ];

  const filteredUsers = users.filter((user) => {
    const matchesSearch = user.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCity =
      city === "All" || user.address.city === city;

    return matchesSearch && matchesCity;
  });

  if (loading) return <h2>Loading users...</h2>;
  if (error) return <h2>Error: {error}</h2>;

  return (
    <div>
      <h1>User API Management</h1>

      <input
        placeholder="Search by name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        value={city}
        onChange={(e) => setCity(e.target.value)}
      >
        {cities.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>

      <button onClick={createUser}>Add User</button>

      {filteredUsers.length === 0 && (
        <p>No matching users.</p>
      )}

      {filteredUsers.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
          <p>{user.address.city}</p>

          <button onClick={() => editUser(user)}>
            Edit
          </button>

          <button onClick={() => removeUser(user.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default ApiIntegrationAssignment;