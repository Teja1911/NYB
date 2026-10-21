import { useState } from "react";
import "../styles/react-fundamentals.css";

function WelcomeMessage({ name }) {
  return <p>Welcome, {name}!</p>;
}

export default function ReactFundamentalsConcepts() {
  const [count, setCount] = useState(0);
  const [showMessage, setShowMessage] = useState(true);

  const students = ["Ravi", "Priya", "Arun"];

  function handleClick() {
    setCount(previousCount => previousCount + 1);
  }

  return (
    <main className="learning-page">
      <h1>React Concepts Practice</h1>

      <WelcomeMessage name="Ravi" />

      <section className="learning-section">
        <h2>State and Events</h2>
        <p>Button clicked: {count} times</p>
        <button onClick={handleClick}>Increase Count</button>
      </section>

      <section className="learning-section">
        <h2>Conditional Rendering</h2>
        <button onClick={() => setShowMessage(show => !show)}>
          Toggle Message
        </button>
        {showMessage && <p>The message is visible.</p>}
      </section>

      <section className="learning-section">
        <h2>List Rendering</h2>
        {students.map(student => (
          <p key={student}>{student}</p>
        ))}
      </section>
    </main>
  );
}