
import { Component, useEffect, useState } from "react";

// 1. Reusable component
function Button({ children, onClick }) {
  return <button onClick={onClick}>{children}</button>;
}

// 2. Form and validation
function EmployeeForm({ onAdd }) {
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  function submit(event) {
    event.preventDefault();

    if (!name.trim()) {
      setError("Name is required");
      return;
    }

    setError("");
    onAdd(name.trim());
    setName("");
  }

  return (
    <form onSubmit={submit}>
      <label>
        Employee name
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      {error && <p role="alert">{error}</p>}
      <Button> { "Add Employee" } </Button>
    </form>
  );
}

// 3. API integration: loading, success, and error states
function ApiExample() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    fetch("https://jsonplaceholder.typicode.com/users", {
      signal: controller.signal,
    })
      .then((response) => {
        if (!response.ok) throw new Error("Unable to load users");
        return response.json();
      })
      .then(setUsers)
      .catch((err) => {
        if (err.name !== "AbortError") setError(err.message);
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoading(false);
      });
    return () => controller.abort();
  }, []);

  if (loading) return <p>Loading users...</p>;
  if (error) return <p role="alert">{error}</p>;

  // FIX: Return the summary AND map over the users to display their names
  return (
    <div>
      <p><strong>Loaded {users.length} users:</strong></p>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

// 4. Error boundary: catches descendant rendering errors
class ErrorBoundary extends Component {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  render() {
    if (this.state.failed) return <p>Something went wrong.</p>;
    return this.props.children;
  }
}

// 5. Main screen: testable user interactions and conditional UI
 function ReactTestingConcepts() {
  const [employees, setEmployees] = useState([]);
  const [showApi, setShowApi] = useState(false);

  return (
    <ErrorBoundary>
      <main>
        <h2>React Testing Concepts</h2>
        <EmployeeForm onAdd={(name) =>
          setEmployees((old) => [...old, name])
        } />

        <p>Total employees: {employees.length}</p>
        {employees.map((name, index) => (
          <p key={`${name}-${index}`}>{name}</p>
        ))}

        <Button onClick={() => setShowApi((value) => !value)}>
          {showApi ? "Hide API" : "Show API"}
        </Button>
        {showApi && <ApiExample />}
      </main>
    </ErrorBoundary>
  );
}
export default ReactTestingConcepts