import { useEffect, useState } from "react"
import api from "../services/api"
import Dashboard from "./Dashboard"
import withLoading from "./withLoading"
const DashboardWithLoading = withLoading(Dashboard)
function HOCExample() {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        async function fetchUsers() {
            try {
                const response = await api.get("/users")
                setUsers(response.data)
            }
            finally {
                setLoading(false)
            }
        }
        fetchUsers()
    }, [])
    return (
        <DashboardWithLoading
            users={users}
            loading={loading}
        />
    )
}

export default HOCExample