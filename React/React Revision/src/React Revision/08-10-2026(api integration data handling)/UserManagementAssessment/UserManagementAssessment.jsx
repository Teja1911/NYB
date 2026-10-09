import { useEffect, useState } from "react";
import "./UserManagementAssessment.css";

const API = "https://jsonplaceholder.typicode.com/users";

function UserManagementAssessment() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
  });

  const [editingId, setEditingId] = useState(null);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function loadUsers() {
    try {
      setLoading(true);
      const response = await fetch(API);

      if (!response.ok) {
        throw new Error("Failed to load users");
      }

      const data = await response.json();
      setUsers(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  async function saveUser(e) {
    e.preventDefault();

    if (!form.name || !form.email) {
      alert("Enter name and email");
      return;
    }

    try {
      if (editingId) {
        const response = await fetch(`${API}/${editingId}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        });

        const updated = await response.json();

        setUsers((current) =>
          current.map((user) =>
            user.id === editingId
              ? { ...user, ...updated }
              : user
          )
        );

        setEditingId(null);
      } else {
        const response = await fetch(API, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        });

        const newUser = await response.json();

        setUsers((current) => [
          ...current,
          newUser,
        ]);
      }

      setForm({ name: "", email: "" });
    } catch {
      setError("Unable to save user");
    }
  }

  async function deleteUser(id) {
    try {
      await fetch(`${API}/${id}`, {
        method: "DELETE",
      });

      setUsers((current) =>
        current.filter((user) => user.id !== id)
      );
    } catch {
      setError("Unable to delete user");
    }
  }

  function editUser(user) {
    setEditingId(user.id);

    setForm({
      name: user.name,
      email: user.email,
    });
  }

  useEffect(() => {
    loadUsers();
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return <h2 className="status">Loading users...</h2>;
  }

  return (
    <div className="container">
      <h1>User Management</h1>

      {error && <p className="error">{error}</p>}

      <form onSubmit={saveUser}>
        <input
          placeholder="Name"
          value={form.name}
          onChange={(e) =>
            setForm({
              ...form,
              name: e.target.value,
            })
          }
        />

        <input
          placeholder="Email"
          value={form.email}
          onChange={(e) =>
            setForm({
              ...form,
              email: e.target.value,
            })
          }
        />

        <button>
          {editingId ? "Update User" : "Add User"}
        </button>
      </form>

      <input
        className="search"
        placeholder="Search users..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <h2>Users</h2>

      {filteredUsers.length === 0 ? (
        <p>No users found.</p>
      ) : (
        filteredUsers.map((user) => (
          <div className="user-card" key={user.id}>
            <div>
              <h3>{user.name}</h3>
              <p>{user.email}</p>
            </div>

            <div>
              <button onClick={() => editUser(user)}>
                Edit
              </button>

              <button onClick={() => deleteUser(user.id)}>
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default UserManagementAssessment;