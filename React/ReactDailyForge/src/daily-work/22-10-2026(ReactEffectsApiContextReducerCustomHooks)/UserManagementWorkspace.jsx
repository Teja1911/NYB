import { useState } from "react";
import { UserManagementProvider, useUserManagement } from "./UserManagementContext";
import UserEntryForm from "./UserEntryForm";
import UserList from "./UserList";
import "./user-management.css";
function UserManagementContent() {
  const { users, loading, error, createUser, editUser, removeUser,} = useUserManagement()
  const [selectedUser, setSelectedUser] = useState(null);
  const [message, setMessage] = useState("");
  async function handleSave(user) {
    try {
      setMessage("")
      if (user.id) {
        await editUser(user)
        setMessage("User updated.")
      } else {
        await createUser(user)
        setMessage("User added.")
      }
      setSelectedUser(null)
    } catch (err) {
      setMessage(`Operation failed: ${err.message}`)
    }
  }
  async function handleDelete(id) {
    if (!window.confirm("Delete this user?")) {
      return
    }
    try {
      setMessage("")
      await removeUser(id)
      setMessage("User deleted.")
    } catch (err) {
      setMessage(`Delete failed: ${err.message}`)
    }
  }
  return (
    <main className="user-workspace">
      <h2>User Management Mini Assignment</h2>
      <p>Practice API calls, Context, useReducer and custom hooks.</p>
      {loading && <p>Loading users...</p>}
      {error && <p className="error-message">{error}</p>}
      {message && <p>{message}</p>}
      <UserEntryForm selectedUser={selectedUser} onSave={handleSave} onCancel={() => setSelectedUser(null)}/>
      {!loading && (<UserList users={users} onEdit={setSelectedUser} onDelete={handleDelete}/>)}
    </main>
  )
}

 function UserManagementWorkspace() {
  return (
    <UserManagementProvider>
      <UserManagementContent />
    </UserManagementProvider>
  );
}
export default UserManagementWorkspace