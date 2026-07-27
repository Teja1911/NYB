// src/components/UserList/UserList.jsx

import UserCard from "../UserCard/UserCard";
import "./UserList.css";

function UserList({
  users,
  setEditingUser,
  removeUser,
  updatePartialUser,
}) {
  if (users.length === 0) {
    return (
      <div className="empty-users">
        No users found.
      </div>
    );
  }

  return (
    <div className="user-list">
      {users.map((user) => (
        <UserCard
          key={user.id}
          user={user}
          setEditingUser={setEditingUser}
          removeUser={removeUser}
          updatePartialUser={updatePartialUser}
        />
      ))}
    </div>
  );
}

export default UserList;