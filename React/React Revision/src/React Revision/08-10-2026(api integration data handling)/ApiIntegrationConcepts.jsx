import { useEffect, useState } from "react"
const API = "https://jsonplaceholder.typicode.com/users"
function ApiIntegrationConcepts() {
  const [users, setUsers] = useState([])
  const [search, setSearch] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  // GET
  async function getUsers() {
    try {
      setLoading(true)
      setError("")
      const response = await fetch(API)
      if (!response.ok) {
        throw new Error("Failed to fetch users")
      }
      const data = await response.json()
      setUsers(data)
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }
  // POST
  async function addUser() {
    const response = await fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Tej",
        email: "tej@example.com",
      }),
    })
    const data = await response.json();
    console.log("POST:", data);
  }
  // PUT
  async function updateUser() {
    const response = await fetch(`${API}/1`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Updated Tej",
        email: "updated@example.com",
      }),
    })
    console.log("PUT:", await response.json())
  }

  // PATCH
  async function patchUser() {
    const response = await fetch(`${API}/1`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Patched Tej",
      }),
    })
    console.log("PATCH:", await response.json())
  }
  // DELETE
  async function deleteUser() {
    const response = await fetch(`${API}/1`, {
      method: "DELETE",
    })
    console.log("DELETE status:", response.status)
  }
  useEffect(() => {
    getUsers();
  }, [])
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  )
  return (
    <div>
      <h1>API Integration Concepts</h1>
      <input
        placeholder="Search users"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={addUser}>POST</button>
      <button onClick={updateUser}>PUT</button>
      <button onClick={patchUser}>PATCH</button>
      <button onClick={deleteUser}>DELETE</button>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && filteredUsers.length === 0 && (
        <p>No users found.</p>
      )}
      {!loading &&
        !error &&
        filteredUsers.map((user) => (
          <div key={user.id}>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
          </div>
        ))}
    </div>
  )
}

export default ApiIntegrationConcepts