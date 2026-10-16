import {
  Component, createContext, lazy, memo, Suspense,
  useCallback, useContext, useEffect, useMemo, useReducer, useState,
} from "react";
import {
  Routes, Route, Link, Navigate, useNavigate, useParams,
} from "react-router-dom";
import "./EmployeeManagementSystem.css";
const BASE = "/EmployeeManagementSystem";
// 1. API service layer
const API_URL = import.meta.env.VITE_API_BASE_URL ||
  "https://jsonplaceholder.typicode.com";

async function fetchEmployees(signal) {
  const response = await fetch(`${API_URL}/users`, { signal });
  if (!response.ok) throw new Error("Unable to load employees");

  return (await response.json()).map((user) => ({
    id: user.id,
    name: user.name,
    email: user.email,
    department: user.company?.name || "General",
  }));
}

// 2. Centralized reducer state
const EmployeeContext = createContext(null);

function reducer(state, action) {
  switch (action.type) {
    case "LOAD": return { ...state, employees: action.payload };
    case "ADD": return { ...state, employees: [...state.employees, action.payload] };
    case "UPDATE": return {
      ...state,
      employees: state.employees.map((e) =>
        e.id === action.payload.id ? action.payload : e
      ),
    };
    case "DELETE": return {
      ...state,
      employees: state.employees.filter((e) => e.id !== action.payload),
    };
    default: return state;
  }
}

function useEmployees() {
  const context = useContext(EmployeeContext);
  if (!context) throw new Error("Employee provider is missing");
  return context;
}

// 3. Error boundary
class ErrorBoundary extends Component {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }

  render() {
    return this.state.failed
      ? <p role="alert">Something went wrong. Refresh and try again.</p>
      : this.props.children;
  }
}

// 4. Reusable components
function Button({ children, ...props }) {
  return <button {...props}>{children}</button>;
}

const EmployeeRow = memo(function EmployeeRow({ employee, onDelete }) {
  return (
    <tr>
      <td><Link to={`${BASE}/employees/${employee.id}`}>{employee.name}</Link></td>
      <td>{employee.email}</td>
      <td>{employee.department}</td>
      <td><Button onClick={() => onDelete(employee.id)}>Delete</Button></td>
    </tr>
  );
});

// 5. Login and protected routes (mock authentication)
function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      if (!username.trim()) return;
      onLogin();
      navigate(`${BASE}/dashboard`, { replace: true });
    }}>
      <h2>Employee Portal Login</h2>
      <label>Username
        <input value={username} onChange={(e) => setUsername(e.target.value)} required />
      </label>
      <Button type="submit">Sign In</Button>
    </form>
  );
}

function Protected({ loggedIn, children }) {
  return loggedIn
    ? children
    : <Navigate to={`${BASE}/login`} replace />;
}

// 6. Dashboard and employee list
function Dashboard() {
  const { state } = useEmployees();
  return <section className="panel">
    <h2>Dashboard</h2>
    <p>Total employees: {state.employees.length}</p>
    <Link to={`${BASE}/employees`}>Manage Employees</Link>
    {" | "}
    <Link to={`${BASE}/analytics`}>Analytics</Link>
  </section>;
}

function EmployeeList() {
  const { state, dispatch } = useEmployees();
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All");

  const departments = useMemo(() =>
    ["All", ...new Set(state.employees.map((e) => e.department))],
    [state.employees]
  );

  const visible = useMemo(() => state.employees.filter((e) =>
    e.name.toLowerCase().includes(search.toLowerCase()) &&
    (department === "All" || e.department === department)
  ), [state.employees, search, department]);

  const deleteEmployee = useCallback((id) =>
    dispatch({ type: "DELETE", payload: id }), [dispatch]);

  return <section className="panel">
    <h2>Employee Management</h2>
    <label>Search
      <input value={search} onChange={(e) => setSearch(e.target.value)} />
    </label>
    <label>Department
      <select value={department} onChange={(e) => setDepartment(e.target.value)}>
        {departments.map((d) => <option key={d}>{d}</option>)}
      </select>
    </label>
    <p><Link to="/employees/add">Add Employee</Link></p>
    <div className="table-wrap"><table>
      <thead><tr><th>Name</th><th>Email</th><th>Department</th><th>Action</th></tr></thead>
      <tbody>{visible.map((employee) =>
        <EmployeeRow key={employee.id} employee={employee} onDelete={deleteEmployee} />
      )}</tbody>
    </table></div>
    {visible.length === 0 && <p>No employees found.</p>}
  </section>;
}

// 7. Dynamic details and add/edit form
function EmployeeDetails() {
  const { id } = useParams();
  const { state } = useEmployees();
  const employee = state.employees.find((e) => e.id === Number(id));

  if (!employee) return <p>Employee not found. <Link to={`${BASE}/employees`}>Back</Link></p>;

  return <section className="panel">
    <h2>{employee.name}</h2>
    <p>Email: {employee.email}</p>
    <p>Department: {employee.department}</p>
    <Link to={`${BASE}/employees/${employee.id}/edit`}>Edit</Link>
  </section>;
}

function EmployeeForm() {
  const { id } = useParams();
  const { state, dispatch } = useEmployees();
  const employee = state.employees.find((e) => e.id === Number(id));
  const editing = Boolean(id);
  const [name, setName] = useState(employee?.name || "");
  const [email, setEmail] = useState(employee?.email || "");
  const [department, setDepartment] = useState(employee?.department || "");
  const navigate = useNavigate();

  if (editing && !employee) return <p>Employee not found.</p>;

  return <form className="panel" onSubmit={(event) => {
    event.preventDefault();
    const record = { id: employee?.id ?? Date.now(), name: name.trim(),
      email: email.trim(), department: department.trim() };
    dispatch({ type: editing ? "UPDATE" : "ADD", payload: record });
    navigate(`${BASE}/employees`);
  }}>
    <h2>{editing ? "Edit Employee" : "Add Employee"}</h2>
    <label>Name<input value={name} onChange={(e) => setName(e.target.value)} required /></label>
    <label>Email<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required /></label>
    <label>Department<input value={department} onChange={(e) => setDepartment(e.target.value)} required /></label>
    <Button type="submit">Save Employee</Button>
  </form>;
}

// 8. Lazy-loaded analytics page
const AnalyticsPage = lazy(() => import("./AnalyticsPage"));

function Portal({ loggedIn, onLogout }) {
  const { dispatch } = useEmployees();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    fetchEmployees(controller.signal)
      .then((data) => dispatch({ type: "LOAD", payload: data }))
      .catch((err) => {
        if (err.name !== "AbortError") setError(err.message);
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoading(false);
      });
    return () => controller.abort();
  }, [dispatch]);

  return (
    <>
      <header className="portal-header">
        <h1>Employee Management System</h1>
       <nav>
            <Link to={`${BASE}/dashboard`}>Dashboard</Link>{" | "}
            <Link to={`${BASE}/employees`}>Employees</Link>{" | "}
            <Link to={`${BASE}/analytics`}>Analytics</Link>{" | "}
            <Button onClick={onLogout}>Logout</Button>
        </nav>
      </header>
      {loading ? <p>Loading employees...</p> : error ? <p role="alert">{error}</p> :
        <Routes>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="employees" element={<EmployeeList />} />
          <Route path="employees/add" element={<EmployeeForm />} />
          <Route path="employees/:id" element={<EmployeeDetails />} />
          <Route path="employees/:id/edit" element={<EmployeeForm />} />
          <Route path="analytics" element={
            <Suspense fallback={<p>Loading analytics...</p>}>
              <AnalyticsPage />
            </Suspense>
          } />
          <Route path="*"element={<Navigate to={`${BASE}/dashboard`} replace />}/>
        </Routes>
      }
    </>
  );
}

// 9. Main screen root implementation mapping all top-level entry routes
export default function ReactTestingConcepts() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [state, dispatch] = useReducer(reducer, { employees: [] });

  // Fallback check: If browser is at "/login" directly, render Login immediately
  // This bypasses complex sub-route prefix issues from App.jsx or main.jsx
  if (!loggedIn && window.location.pathname.endsWith("/login")) {
    return (
      <ErrorBoundary>
        <EmployeeContext.Provider value={{ state, dispatch }}>
          <Login onLogin={() => setLoggedIn(true)} />
        </EmployeeContext.Provider>
      </ErrorBoundary>
    );
  }

  return (
    <ErrorBoundary>
      <EmployeeContext.Provider value={{ state, dispatch }}>
        <Routes>
  <Route
    path="login"
    element={
      loggedIn
        ? <Navigate to={`${BASE}/dashboard`} replace />
        : <Login onLogin={() => setLoggedIn(true)} />
    }
  />

  <Route
    path="*"
    element={
      <Protected loggedIn={loggedIn}>
        <Portal
          loggedIn={loggedIn}
          onLogout={() => setLoggedIn(false)}
        />
      </Protected>
    }
  />
</Routes>
      </EmployeeContext.Provider>
    </ErrorBoundary>
  );
}