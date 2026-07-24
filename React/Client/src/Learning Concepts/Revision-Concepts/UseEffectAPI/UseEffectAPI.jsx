import { useEffect, useState } from "react";
import api from "../services/api";

function UseEffectAPI() {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function fetchUsers() {
            try {
                const response = await api.get("/users");
                setUsers(response.data);
            }
            catch (err) {
                setError("Unable to fetch users");
            }
            finally {
                setLoading(false);
            }
        }
        fetchUsers();
    }, []);
    if (loading) {
        return <h2>Loading...</h2>;
    }
    if (error) {
        return <h2>{error}</h2>;
    }
    return (
        <div className="container">
            <h1>API Integration using useEffect</h1>
            {
                users.map(user => (
                    <div
                        key={user.id}
                        className="user-card"
                    >
                        <h3>{user.name}</h3>
                        <p>{user.email}</p>
                        <p>{user.company.name}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default UseEffectAPI