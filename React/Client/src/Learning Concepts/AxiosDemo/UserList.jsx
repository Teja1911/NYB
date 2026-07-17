import UserCard from "./UserCard";


function UserList({ users }) {

    if (users.length === 0) {

        return <h2>No Users Found</h2>;

    }

    return (

        <div className="grid">

            {

                users.map((user) => (

                    <UserCard
                        key={user.id}
                        user={user}
                    />

                ))

            }

        </div>

    );

}

export default UserList