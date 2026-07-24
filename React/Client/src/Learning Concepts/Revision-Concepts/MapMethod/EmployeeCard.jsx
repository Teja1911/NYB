function EmployeeCard({ user }) {
    return (
        <div className="user-card">
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <p>{user.company.name}</p>
        </div>
    )
}

export default EmployeeCard