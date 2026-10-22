function UserProfileCard({user,onEdit,onDelete,}) {
  return (
    <article className="user-card">
      <h4>{user.name}</h4>
      <p>{user.email || "No email available"}</p>
      <button onClick={() => onEdit(user)}>Edit</button>
      <button onClick={() => onDelete(user.id)}>Delete</button>
    </article>
  )
}
export default UserProfileCard