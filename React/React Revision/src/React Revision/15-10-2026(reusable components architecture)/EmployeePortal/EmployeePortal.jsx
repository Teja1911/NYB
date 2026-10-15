import {
  Component,
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import "./EmployeePortal.css";

// 1. API service layer: data access lives outside the UI components
const API_URL = import.meta.env.VITE_API_BASE_URL
  || "https://jsonplaceholder.typicode.com";

const employeeService = {
  async getEmployees(signal) {
    const response = await fetch(`${API_URL}/users`, { signal });
    if (!response.ok) throw new Error("Unable to load employees");
    const users = await response.json();
    return users.map((user) => ({
      id: user.id,
      name: user.name,
      email: user.email,
      department: user.company?.name || "General",
    }));
  },
};

// 2. Centralized state and reducer
const EmployeeContext = createContext(null);
function employeeReducer(state, action) {
  switch (action.type) {
    case "LOAD":
      return { ...state, employees: action.payload };
    case "ADD":
      return { ...state, employees: [action.payload, ...state.employees] };
    case "DELETE":
      return {
        ...state,
        employees: state.employees.filter((e) => e.id !== action.payload),
      };
    default:
      return state;
  }
}

function EmployeeProvider({ children }) {
  const [state, dispatch] = useReducer(employeeReducer, {
    employees: [],
  });
  return (
    <EmployeeContext.Provider value={{ state, dispatch }}>
      {children}
    </EmployeeContext.Provider>
  );
}

function useEmployees() {
  const context = useContext(EmployeeContext);
  if (!context) throw new Error("EmployeeProvider is missing");
  return context;
}

// 3. Custom data-fetching Hook
function useEmployeeData() {
  const { dispatch } = useEmployees();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    const controller = new AbortController();
    employeeService.getEmployees(controller.signal)
      .then((employees) => dispatch({ type: "LOAD", payload: employees }))
      .catch((err) => {
        if (err.name !== "AbortError") setError(err.message);
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoading(false);
      });
    return () => controller.abort();
  }, [dispatch]);
  return { loading, error };
}

// 4. Reusable Button
function Button({ children, variant = "", ...props }) {
  return (
    <button className={`button ${variant}`} {...props}>
      {children}
    </button>
  );
}

// 5. Reusable controlled Input
function FormInput({ label, ...props }) {
  return (
    <label className="form-field">
      <span>{label}</span>
      <input {...props} />
    </label>
  );
}

// 6. Error boundary: handles rendering errors in descendants
class ErrorBoundary extends Component {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    if (this.state.failed) {
      return (
        <main className="portal">
          <section className="panel">
            <h2>Something went wrong</h2>
            <p>Please refresh the page and try again.</p>
          </section>
        </main>
      );
    }
    return this.props.children;
  }
}

// 7. Employee form feature
function EmployeeForm() {
  const { dispatch } = useEmployees();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  function submit(event) {
    event.preventDefault();
    if (!name.trim() || !email.trim() || !department.trim()) return;
    dispatch({
      type: "ADD",
      payload: {
        id: Date.now(),
        name: name.trim(),
        email: email.trim(),
        department: department.trim(),
      },
    });
    setName("");
    setEmail("");
    setDepartment("");
  }
  return (
    <section className="panel">
      <h2>Add Employee</h2>
      <form className="employee-form" onSubmit={submit}>
        <FormInput label="Name" value={name} required
          onChange={(e) => setName(e.target.value)} placeholder="Full name" />
        <FormInput label="Email" type="email" value={email} required
          onChange={(e) => setEmail(e.target.value)} placeholder="name@example.com" />
        <FormInput label="Department" value={department} required
          onChange={(e) => setDepartment(e.target.value)} placeholder="Department" />
        <Button type="submit">Add Employee</Button>
      </form>
    </section>
  );
}

// 8. Reusable employee table
function EmployeeTable() {
  const { state, dispatch } = useEmployees();
  const [search, setSearch] = useState("");
  const filtered = state.employees.filter((employee) =>
    `${employee.name} ${employee.email} ${employee.department}`
      .toLowerCase().includes(search.toLowerCase())
  );
  return (
    <section className="panel">
      <div className="section-heading">
        <h2>Employee Directory</h2>
        <span>{filtered.length} employees</span>
      </div>
      <FormInput label="Search" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search name, email or department" />
      <div className="table-wrap">
        <table>
          <thead>
            <tr><th>Name</th><th>Email</th><th>Department</th><th>Action</th></tr>
          </thead>
          <tbody>
            {filtered.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.name}</td>
                <td>{employee.email}</td>
                <td>{employee.department}</td>
                <td>
                  <Button variant="danger" onClick={() =>
                    dispatch({ type: "DELETE", payload: employee.id })
                  }>
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {filtered.length === 0 && <p>No matching employees found.</p>}
    </section>
  );
}

// 9. Main dashboard
function EmployeeDashboard() {
  const { state } = useEmployees();
  const { loading, error } = useEmployeeData();
  return (
    <main className="portal">
      <header className="portal-header">
        <div>
          <p className="eyebrow">MODULAR REACT APPLICATION</p>
          <h1>Employee Management Portal</h1>
          <p>Reusable components, custom Hooks and centralized state.</p>
        </div>
        <span className="employee-count">
          {state.employees.length} employees
        </span>
      </header>
      {loading && <div className="notice">Loading employees...</div>}
      {error && <div className="notice error" role="alert">{error}</div>}
      {!loading && !error && (
        <>
          <EmployeeForm />
          <EmployeeTable />
        </>
      )}
    </main>
  );
}

// 10. Application entry point
function EmployeePortal() {
  return (
    <ErrorBoundary>
      <EmployeeProvider>
        <EmployeeDashboard />
      </EmployeeProvider>
    </ErrorBoundary>
  );
}
export default EmployeePortal