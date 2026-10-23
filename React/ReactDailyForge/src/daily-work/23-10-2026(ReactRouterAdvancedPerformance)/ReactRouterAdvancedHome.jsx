
import { Link } from "react-router-dom";

export default function ReactRouterAdvancedHome() {
  return (
    <main className="page-content">
      <h1>React Router and Advanced React</h1>
      <p>23 October 2026 — Daily practice</p>

      <section className="practice-card">
        <h2>Router Practice</h2>
        <p>Learn dynamic routes, query parameters and navigation.</p>
        <Link to="/router-practice">Open Router Practice</Link>
      </section>

      <section className="practice-card">
        <h2>Employee Portal</h2>
        <p>Sign in to practise protected routes and employee CRUD.</p>
        <Link to="/login">Open Login</Link>
      </section>

      <section className="practice-card">
        <h2>Performance Optimization</h2>
        <p>Observe rendering and practise React memoization hooks.</p>
        <Link to="/performance">Open Performance Practice</Link>
      </section>
    </main>
  );
}
