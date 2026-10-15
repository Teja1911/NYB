import { Component, createContext, useContext, useEffect, useState, useRef } from "react";

// 1. API service: separate data access from UI
const userService = {
  async getUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) throw new Error("Unable to load users");
    return response.json();
  }
};

// 2. Custom Hook: shared reusable state logic
function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);
  const toggle = () => setValue((oldValue) => !oldValue);
  return [value, toggle]; // Changed from object to array to match your component usage
}

// 3. Data-fetching Hook: loading, data, and error
function useUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;
    userService.getUsers()
      .then((data) => { if (active) setUsers(data); })
      .catch((err) => { if (active) setError(err.message); })
      .finally(() => { if (active) setLoading(false); });
    return () => { active = false; };
  }, []);

  return { users, loading, error };
}

// 4. Reusable Button component
function Button({ children, onClick, type = "button" }) {
  return <button type={type} onClick={onClick}>{children}</button>;
}

// 5. Reusable controlled Input
function TextInput({ label, value, onChange, type = "text" }) {
  return (
    <label>
      {label}
      <input type={type} value={value} onChange={onChange} />
    </label>
  );
}

// 6. Uncontrolled input: read its value using ref
function UncontrolledInput() {
  const [submitted, setSubmitted] = useState("");
  const ref = useRef(null); // Used native React useRef here

  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      setSubmitted(ref.current.value);
    }}>
      <input ref={ref} placeholder="Uncontrolled input" />
      <button type="submit">Read Value</button>
      <p>{submitted}</p>
    </form>
  );
}

// 7. Error boundary: catches descendant rendering errors
class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <p>Something went wrong. Please refresh</p>;
    }
    return this.props.children;
  }
}

// 8. Compound component pattern using Context
const PanelContext = createContext(false);

function Panel({ children }) { // Capitalized component name (Panel instead of panel)
  const [open, setOpen] = useState(true);
  return (
    <PanelContext.Provider value={open}>
      <section>
        <button onClick={() => setOpen((old) => !old)}>Toggle Panel</button>
        {children}
      </section>
    </PanelContext.Provider>
  );
}

function PanelContent() {
  const open = useContext(PanelContext);
  return open ? <p>Reusable compound panel content.</p> : null;
}

// 9. Main concepts screen
function ReusableArchitectureConcepts() {
  const [name, setName] = useState("");
  const [value, toggle] = useToggle(); // Now perfectly matches the array return statement
  const {users, loading, error} = useUsers();

  return (
    <ErrorBoundary>
      <main>
        <h2>Reusable Components & Architecture</h2>
        
        <TextInput 
          label="Employee name: " 
          value={name} 
          onChange={(event) => setName(event.target.value)} 
        />
        <p>Hello, {name || "Employee"}</p>
        
        <button onClick={toggle}>{value ? "Hide Message" : "Show Message"}</button>
        {value && <p>Custom Hook controls this message.</p>}
        
        <Panel>
          <PanelContent />
        </Panel>
        
        <h3>Users from API</h3>
        {loading && <p>Loading users...</p>}
        {error && <p role="alert">{error}</p>}
        {users.slice(0, 5).map((user) => (
          <p key={user.id}>{user.name}</p>
        ))}
        
        <UncontrolledInput />
      </main>
    </ErrorBoundary>
  );
}

export default ReusableArchitectureConcepts;