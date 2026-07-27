import { useEffect, useState } from "react";
import "./UserForm.css";

function UserForm({
  addUser,
  editUser,
  editingUser,
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    if (editingUser) {
      setFormData({
        name: editingUser.name,
        email: editingUser.email,
        phone: editingUser.phone,
      });
    }
  }, [editingUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editingUser) {
      await editUser(editingUser.id, formData);
    } else {
      await addUser(formData);
    }

    setFormData({
      name: "",
      email: "",
      phone: "",
    });
  };

  return (
    <form className="user-form" onSubmit={handleSubmit}>
    <div className="form-group">
      <label htmlFor="name">Name</label>

      <input
        type="text"
        id="name"
        name="name"
        placeholder="Enter name"
        value={formData.name}
        onChange={handleChange}
        required
      />
    </div>

    <div className="form-group">
      <label htmlFor="email">Email</label>

      <input
        type="email"
        id="email"
        name="email"
        placeholder="Enter email"
        value={formData.email}
        onChange={handleChange}
        required
      />
    </div>

    <div className="form-group">
      <label htmlFor="phone">Phone</label>

      <input
        type="text"
        id="phone"
        name="phone"
        placeholder="Enter phone number"
        value={formData.phone}
        onChange={handleChange}
        required
      />
    </div>

    <button type="submit">
      {editingUser ? "Update User" : "Add User"}
    </button>
  </form>
  );
}

export default UserForm;