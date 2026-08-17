import { useContext } from "react";

import { AuthContext } from "../context/AuthContext";

function Dashboard() {

    const {
        isAuthenticated,
        logout,
    } = useContext(AuthContext);

    return (
        <div className="page">

            <h1>Employee Dashboard</h1>

            <p>
                Welcome to the protected dashboard.
            </p>

            <p>
                Authentication Status:{" "}
                <strong>
                    {isAuthenticated ? "Authenticated" : "Not Authenticated"}
                </strong>
            </p>

            <div className="dashboard-card">

                <h2>Dashboard Information</h2>

                <p>
                    Employee management information is available
                    only to authenticated users.
                </p>

                <button onClick={logout}>
                    Logout
                </button>

            </div>

        </div>
    );
}

export default Dashboard;