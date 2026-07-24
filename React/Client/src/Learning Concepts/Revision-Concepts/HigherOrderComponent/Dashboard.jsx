function Dashboard({ users }) {
    return (
        <div>
            <h1>Dashboard</h1>
            {
                users.map(user => (
                    <div
                        key={user.id}
                        className="user-card"
                    >
                        <h3>{user.name}</h3>
                        <p>{user.email}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Dashboard