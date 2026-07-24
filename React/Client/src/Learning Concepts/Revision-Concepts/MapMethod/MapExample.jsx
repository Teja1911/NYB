import { useEffect, useState } from "react"
import api from "../services/api"
import EmployeeList from "./EmployeeList"
function MapExample() {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")
    useEffect(() => {
        async function fetchUsers() {
            try {
                const response = await api.get("/users")
                setUsers(response.data)
            }
            catch {
                setError("Unable to fetch users")
            }
            finally {
                setLoading(false)
            }
        }
        fetchUsers()
    }, [])
    if (loading) {
        return <h2>Loading...</h2>
    }
    if (error) {
        return <h2>{error}</h2>
    }
    return (
        <div className="container">
            <h1>map() Method</h1>
            <EmployeeList
                users={users}
            />
        </div>
    )
}

export default MapExample