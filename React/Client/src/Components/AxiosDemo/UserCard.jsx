function UserCard({ user }) {
    return (
        <div className="card">
            <h2>{user.name}</h2>
            <p><strong>Email :</strong>{user.email}</p>
            <p><strong>Phone :</strong>{user.phone}</p>
            <p><strong>Website :</strong>{user.website}</p>
        </div>
    )
}

export default UserCard