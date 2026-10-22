import { useEffect, useReducer, useState } from "react"
import { getUsers } from "./userApi"
import "./effects-api-practice.css"
function counterReducer(count, action) {
  if (action === "INCREMENT") return count + 1
  if (action === "RESET") return 0
  return count
}
 function AssignedTaskPractice() {
  const [count, setCount] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [users, setUsers] = useState([])
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(true)
  const [reducerCount, dispatch] = useReducer(counterReducer,0)
  // Runs when count changes
  useEffect(() => {
    document.title = `Count: ${count}`
  }, [count])
  // Timer with cleanup
  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((previous) => previous + 1)
    }, 1000)
    return () => clearInterval(timer)
  }, [])
  // Fetch users once
  useEffect(() => {
    async function loadUsers() {
      try {
        const data = await getUsers()
        setUsers(data.slice(0, 5))
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    loadUsers()
  }, [])

  return (
    <main className="practice-page">
      <h2>React Assigned Practice</h2>

      <section>
        <h3>1. useState Counter: {count}</h3>
        <button onClick={() => setCount(count + 1)}>
          Increase
        </button>
        <button onClick={() => setCount(0)}>Reset</button>
      </section>

      <section>
        <h3>2. Timer: {seconds} seconds</h3>
        <p>The timer starts when this page loads.</p>
      </section>

      <section>
        <h3>3. API Fetching</h3>
        {loading && <p>Loading users...</p>}
        {error && <p>{error}</p>}

        {!loading &&
          users.map((user) => (
            <p key={user.id}>{user.name}</p>
          ))}
      </section>

      <section>
        <h3>4. useReducer Counter: {reducerCount}</h3>
        <button
          onClick={() => dispatch("INCREMENT")}
        >
          Increase
        </button>
        <button onClick={() => dispatch("RESET")}>
          Reset
        </button>
      </section>
    </main>
  )
}
export default AssignedTaskPractice