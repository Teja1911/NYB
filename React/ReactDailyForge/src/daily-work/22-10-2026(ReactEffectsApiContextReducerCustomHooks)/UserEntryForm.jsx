import { useEffect, useState } from "react";
 function UserEntryForm({selectedUser,onSave,onCancel,}) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  useEffect(() => {
    setName(selectedUser?.name || "")
    setEmail(selectedUser?.email || "")
  }, [selectedUser])
  async function handleSubmit(event) {
    event.preventDefault()
    if (!name.trim() || !email.trim()) {
      return
    }
    await onSave({
      ...(selectedUser || {}),
      name: name.trim(),
      email: email.trim(),
    })
    setName("")
    setEmail("")
  }
  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <h3>{selectedUser ? "Edit User" : "Add User"}</h3>
      <input value={name} onChange={(event) => setName(event.target.value)} placeholder="Full name" required />
      <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Email address" required />
      <button type="submit">{selectedUser ? "Update User" : "Add User"}</button>
      {selectedUser && (<button type="button" onClick={onCancel}>Cancel Edit</button>)}
    </form>
  )
}
export default UserEntryForm