function UserCard({ user }) {

    return (
        <article className="user-card">

            <h3>
                {user.name}
            </h3>

            <p>
                <strong>Username:</strong>{" "}
                {user.username}
            </p>

            <p>
                <strong>Email:</strong>{" "}
                {user.email}
            </p>

            <p>
                <strong>Phone:</strong>{" "}
                {user.phone}
            </p>

            <p>
                <strong>Website:</strong>{" "}
                {user.website}
            </p>

            <p>
                <strong>Company:</strong>{" "}
                {user.company.name}
            </p>

        </article>
    );
}

export default UserCard;