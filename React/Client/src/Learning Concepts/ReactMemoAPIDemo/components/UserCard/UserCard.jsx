// src/components/UserCard/UserCard.jsx

import { memo } from "react";
import "./UserCard.css";

function UserCard({
  user,
  setEditingUser,
  removeUser,
  updatePartialUser,
}) {
  return (
    <div className="user-card">

      <h3>{user.name}</h3>

      <p>
        <strong>Email:</strong> {user.email}
      </p>

      <p>
        <strong>Phone:</strong> {user.phone}
      </p>

      <div className="button-group">

        <button
          className="edit-btn"
          onClick={() => setEditingUser(user)}
        >
          Edit
        </button>

        <button
          className="patch-btn"
          onClick={() =>
            updatePartialUser(user.id, {
              phone: "9999999999",
            })
          }
        >
          Patch
        </button>

        <button
          className="delete-btn"
          onClick={() => removeUser(user.id)}
        >
          Delete
        </button>

      </div>

    </div>
  );
}

export default memo(UserCard);