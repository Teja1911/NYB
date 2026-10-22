import { useEffect, useState } from "react"
import { getUsers } from "./userApi"
export default function useUsersApi() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  useEffect(() => {
    let active = true
    async function loadUsers() {
      try {
        const data = await getUsers()
        if (active) {
          setUsers(data)
          setError("")
        }
      } catch (err) {
        if (active) {
          setError(err.message)
        }
      } finally {
        if (active) {
          setLoading(false)
        }
      }
    }
    loadUsers()
    return () => {
      active = false
    }
  }, [])
  return { users, setUsers, loading, error }
}
