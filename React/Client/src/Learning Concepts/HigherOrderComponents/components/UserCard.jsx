import "../HigherOrderComponent.css";

function UserCard({ user }) {
    return (
        <div className="user-card">
            <h3>{user.name}</h3>

            <p>
                <strong>Email:</strong> {user.email}
            </p>

            <p>
                <strong>Phone:</strong> {user.phone}
            </p>

            <p>
                <strong>Company:</strong> {user.company.name}
            </p>
        </div>
    );
}

export default UserCard;