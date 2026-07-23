import UserCard from "./UserCard";
import "../HigherOrderComponent.css";

function Dashboard({ users }) {
    return (
        <div className="dashboard">

            <h1>Employee Directory</h1>

            <div className="card-container">

                {users.map((user) => (
                    <UserCard
                        key={user.id}
                        user={user}
                    />
                ))}

            </div>

        </div>
    );
}

export default Dashboard;