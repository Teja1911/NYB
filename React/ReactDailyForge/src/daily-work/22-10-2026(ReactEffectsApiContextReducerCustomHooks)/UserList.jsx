import { useState } from "react";
import useDebouncedValue from "./useDebouncedValue";
import UserProfileCard from "./UserProfileCard";
 function UserList({users,onEdit,onDelete,}) {
  const [search, setSearch] = useState("")
  const debouncedSearch = useDebouncedValue(search)
  const filteredUsers = users.filter((user) =>
    user.name
      .toLowerCase()
      .includes(debouncedSearch.toLowerCase())
    )
  return (
    <section>
      <h3>Users ({filteredUsers.length})</h3>
      <input value={search} onChange={(event) => setSearch(event.target.value)}placeholder="Search by name..."/>
      {filteredUsers.length === 0 ? (<p>No users found.</p>) : (filteredUsers.map((user) => (<UserProfileCard key={user.id} user={user} onEdit={onEdit} onDelete={onDelete} />)))}
    </section>
  )
}
export default UserList