import { Link } from "react-router-dom"
 function EffectsApiStatePatternsHome() {
  return (
    <main className="practice-page">
      <h2>React Effects and State Patterns</h2>
      <p>Today's topics: effects, APIs, Context, reducers and custom hooks.</p>
      <ul>
        <li><Link to="/effects-api-context-reducer-hooks/practice">Assigned Practice</Link></li><li>
        <Link to="/effects-api-context-reducer-hooks/user-management">User Management Mini Assignment</Link></li>
      </ul>
    </main>
  )
}
export default EffectsApiStatePatternsHome