import { Link } from "react-router-dom";
import "../styles/react-fundamentals.css";

export default function ReactFundamentalsHome() {
  return (
    <main className="learning-page">
      <h1>React Fundamentals</h1>
      <p>Components, Props, State and Forms</p>

      <section className="learning-section">
        <h2>Concepts</h2>
        <p>Learn JSX, components, props, state, events, lists and forms.</p>
        <Link to="/react-fundamentals-components-state-forms/concepts">
          Explore Concepts
        </Link>
      </section>

      <section className="learning-section">
        <h2>Assigned Tasks</h2>
        <ul>
          <li>Create reusable functional components.</li>
          <li>Pass data using props.</li>
          <li>Manage state and handle events.</li>
          <li>Build controlled forms and validate input.</li>
          <li>Render dynamic lists and conditional UI.</li>
        </ul>
      </section>

      <section className="learning-section">
        <h2>Mini Assignment</h2>
        <p>Build a Student Management UI with add, edit, delete and search.</p>
        <Link to="/react-fundamentals-components-state-forms/student-management">
          Open Student Management
        </Link>
      </section>
    </main>
  );
}