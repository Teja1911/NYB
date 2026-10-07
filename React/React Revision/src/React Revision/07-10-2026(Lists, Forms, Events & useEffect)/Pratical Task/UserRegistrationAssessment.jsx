import { useEffect, useState } from "react";
import "./Style.css";
function RegistrationForm({
  onAddUser,
  editingUser,
  onUpdateUser,
  onCancel,
}) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "",
  });

  const [error, setError] = useState("");

  useEffect(() => {
    if (editingUser) {
      setForm({
        name: editingUser.name,
        email: editingUser.email,
        role: editingUser.role,
      });
    }
  }, [editingUser]);

  function handleChange(e) {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!form.name || !form.email || !form.role) {
      setError("All fields are required");
      return;
    }

    if (!form.email.includes("@")) {
      setError("Enter a valid email");
      return;
    }

    setError("");

    const user = {
      id: editingUser?.id || Date.now(),
      ...form,
    };

    if (editingUser) {
      onUpdateUser(user);
    } else {
      onAddUser(user);
    }

    setForm({
      name: "",
      email: "",
      role: "",
    });
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>
        {editingUser ? "Edit User" : "User Registration"}
      </h2>

      <input
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
      />

      <input
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
      />

      <select
        name="role"
        value={form.role}
        onChange={handleChange}
      >
        <option value="">Select Role</option>
        <option value="Developer">Developer</option>
        <option value="Tester">Tester</option>
        <option value="Designer">Designer</option>
      </select>

      {error && <p className="error">{error}</p>}

      <button type="submit">
        {editingUser ? "Update User" : "Register User"}
      </button>

      {editingUser && (
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      )}
    </form>
  );
}

function UserList({ users, onEdit, onDelete }) {
  return (
    <section>
      <h2>User List</h2>

      {users.length === 0 ? (
        <p>No registered users.</p>
      ) : (
        users.map((user) => (
          <div className="user" key={user.id}>
            <div>
              <h3>{user.name}</h3>
              <p>{user.email}</p>
              <p>Role: {user.role}</p>
            </div>

            <div>
              <button onClick={() => onEdit(user)}>
                Edit
              </button>

              <button onClick={() => onDelete(user.id)}>
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </section>
  );
}
function UserRegistrationAssessment() {
 const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    const savedUsers = localStorage.getItem("users");

    if (savedUsers) {
      setUsers(JSON.parse(savedUsers));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  function addUser(user) {
    setUsers([...users, user]);
  }

  function updateUser(updatedUser) {
    setUsers(
      users.map((user) =>
        user.id === updatedUser.id
          ? updatedUser
          : user
      )
    );

    setEditingUser(null);
  }

  function deleteUser(id) {
    setUsers(
      users.filter((user) => user.id !== id)
    );
  }

  return (
    <div className="container">
      <h1>User Registration System</h1>

      <RegistrationForm
        onAddUser={addUser}
        editingUser={editingUser}
        onUpdateUser={updateUser}
        onCancel={() => setEditingUser(null)}
      />

      <UserList
        users={users}
        onEdit={setEditingUser}
        onDelete={deleteUser}
      />
    </div>
  )
}

export default UserRegistrationAssessment