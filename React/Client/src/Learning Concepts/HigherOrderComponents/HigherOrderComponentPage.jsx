import { useEffect, useState } from "react";
import Dashboard from "./components/Dashboard";
import api from "./services/api";

import withLoading from "./hoc/withLoading";
import withAuth from "./hoc/withAuth";
import withAuthorization from "./hoc/withAuthorization";

const ProtectedDashboard = withAuthorization(
    withAuth(
        withLoading(Dashboard)
    )
);

function HigherOrderComponentPage() {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    // Change these values to test different scenarios
    const [isLoggedIn] = useState(true);
    const [role] = useState("Admin");

    useEffect(() => {

        async function fetchUsers() {

            try {

                const response = await api.get("/users");

                setUsers(response.data);

            } catch (error) {

                console.log("Error fetching users:", error);

            } finally {

                setLoading(false);

            }

        }

        fetchUsers();

    }, []);

    return (
        <div>

            <ProtectedDashboard
                loading={loading}
                users={users}
                isLoggedIn={isLoggedIn}
                role={role}
            />

        </div>
    );
}

export default HigherOrderComponentPage;