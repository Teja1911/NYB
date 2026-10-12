
import { useState } from "react";
import {
  Routes,
  Route,
  Link,
  NavLink,
  Outlet,
  Navigate,
  useParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import "./EmployeeManagementAssessment.css";

const BASE = "/EmployeeManagementAssessment";

function ProtectedRoute({ loggedIn }) {
  return loggedIn ? <Outlet /> : <Navigate to={`${BASE}/login`} replace />;
}

function Layout({ onLogout }) {
  return (
    <div className="portal">
      <header className="header">
        <Link className="brand" to={`${BASE}/dashboard`}>
          Employee Portal
        </Link>
        <nav>
          <NavLink to={`${BASE}/dashboard`}>Dashboard</NavLink>
          <NavLink to={`${BASE}/employees`}>Employees</NavLink>
          <NavLink to={`${BASE}/employees/add`}>Add Employee</NavLink>
          <button className="logout" onClick={onLogout}>Logout</button>
        </nav>
      </header>
      <main className="container">
        <Outlet />
      </main>
    </div>
  );
}

function Dashboard({ employees }) {
  return (
    <section className="panel">
      <p className="eyebrow">OVERVIEW</p>
      <h1>Dashboard</h1>
      <p>Welcome to your Employee Management Portal.</p>
      <div className="stat">
        <span>Total Employees</span>
        <strong>{employees.length}</strong>
      </div>
      <Link className="btn" to={`${BASE}/employees`}>
        View Employees
      </Link>
    </section>
  );
}

function EmployeeList({ employees, deleteEmployee }) {
  const [params, setParams] = useSearchParams();
  const search = params.get("search") || "";

  const filtered = employees.filter((employee) =>
    `${employee.name} ${employee.role} ${employee.email}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <section className="panel">
      <div className="page-heading">
        <div>
          <p className="eyebrow">TEAM DIRECTORY</p>
          <h1>Employees</h1>
        </div>
        <Link className="btn" to={`${BASE}/employees/add`}>
          + Add Employee
        </Link>
      </div>

      <input
        className="search"
        placeholder="Search name, role or email..."
        value={search}
        onChange={(e) =>
          setParams(e.target.value ? { search: e.target.value } : {})
        }
      />

      <div className="employee-list">
        {filtered.map((employee) => (
          <article className="employee-row" key={employee.id}>
            <div className="avatar">
              {employee.name.charAt(0).toUpperCase()}
            </div>
            <div className="employee-info">
              <strong>{employee.name}</strong>
              <span>{employee.role}</span>
              <small>{employee.email}</small>
            </div>
            <div className="actions">
              <Link to={`${BASE}/employees/${employee.id}`}>View</Link>
              <Link to={`${BASE}/employees/${employee.id}/edit`}>Edit</Link>
              <button
                className="delete"
                onClick={() => deleteEmployee(employee.id)}
              >
                Delete
              </button>
            </div>
          </article>
        ))}
      </div>

      {filtered.length === 0 && <p>No matching employees found.</p>}
    </section>
  );
}

function EmployeeDetails({ employees }) {
  const { id } = useParams();
  const employee = employees.find((item) => item.id === Number(id));

  if (!employee) return <NotFound />;

  return (
    <section className="panel">
      <p className="eyebrow">EMPLOYEE PROFILE</p>
      <div className="profile-avatar">
        {employee.name.charAt(0).toUpperCase()}
      </div>
      <h1>{employee.name}</h1>
      <p><strong>Employee ID:</strong> {employee.id}</p>
      <p><strong>Role:</strong> {employee.role}</p>
      <p><strong>Email:</strong> {employee.email}</p>

      <Link className="btn" to={`${BASE}/employees/${employee.id}/edit`}>
        Edit Employee
      </Link>{" "}
      <Link to={`${BASE}/employees`}>Back to Employees</Link>
    </section>
  );
}

function EmployeeForm({ employees, saveEmployee }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const editing = id !== undefined;
  const employee = employees.find((item) => item.id === Number(id));

  const [name, setName] = useState(employee?.name || "");
  const [role, setRole] = useState(employee?.role || "");
  const [email, setEmail] = useState(employee?.email || "");

  if (editing && !employee) return <NotFound />;

  function handleSubmit(e) {
    e.preventDefault();

    if (!name.trim() || !role.trim() || !email.trim()) return;

    saveEmployee({
      id: employee?.id,
      name: name.trim(),
      role: role.trim(),
      email: email.trim(),
    });

    navigate(`${BASE}/employees`);
  }

  return (
    <form className="panel form" onSubmit={handleSubmit}>
      <p className="eyebrow">EMPLOYEE RECORD</p>
      <h1>{editing ? "Edit Employee" : "Add Employee"}</h1>

      <label>Full Name</label>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter employee name"
        required
      />

      <label>Job Role</label>
      <input
        value={role}
        onChange={(e) => setRole(e.target.value)}
        placeholder="Enter job role"
        required
      />

      <label>Email Address</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="name@example.com"
        required
      />

      <button className="btn" type="submit">
        {editing ? "Update Employee" : "Save Employee"}
      </button>
      <Link to={`${BASE}/employees`}>Cancel</Link>
    </form>
  );
}

function Login({ loggedIn, onLogin }) {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!username.trim()) return;

    onLogin();
    navigate(`${BASE}/dashboard`, { replace: true });
  }

  if (loggedIn) {
    return <Navigate to={`${BASE}/dashboard`} replace />;
  }

  return (
    <div className="login-page">
      <form className="panel form login-card" onSubmit={handleSubmit}>
        <div className="login-logo">EP</div>
        <p className="eyebrow">EMPLOYEE MANAGEMENT</p>
        <h1>Welcome back</h1>
        <p>Enter any username to try the demo.</p>

        <label>Username</label>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter username"
          required
        />

        <button className="btn" type="submit">Sign In</button>
      </form>
    </div>
  );
}

function NotFound() {
  return (
    <section className="panel not-found">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The page or employee record could not be found.</p>
      <Link className="btn" to={`${BASE}/dashboard`}>
        Return to Dashboard
      </Link>
    </section>
  );
}

function AssessmentRoutes({
  loggedIn,
  onLogin,
  onLogout,
  employees,
  saveEmployee,
  deleteEmployee,
}) {
  return (
    <Routes>
      <Route
        index
        element={
          <Navigate
            to={loggedIn ? `${BASE}/dashboard` : `${BASE}/login`}
            replace
          />
        }
      />

      <Route
        path="login"
        element={<Login loggedIn={loggedIn} onLogin={onLogin} />}
      />

      <Route element={<ProtectedRoute loggedIn={loggedIn} />}>
        <Route element={<Layout onLogout={onLogout} />}>
          <Route
            path="dashboard"
            element={<Dashboard employees={employees} />}
          />
          <Route
            path="employees"
            element={
              <EmployeeList
                employees={employees}
                deleteEmployee={deleteEmployee}
              />
            }
          />
          <Route
            path="employees/add"
            element={
              <EmployeeForm
                employees={employees}
                saveEmployee={saveEmployee}
              />
            }
          />
          <Route
            path="employees/:id"
            element={<EmployeeDetails employees={employees} />}
          />
          <Route
            path="employees/:id/edit"
            element={
              <EmployeeForm
                employees={employees}
                saveEmployee={saveEmployee}
              />
            }
          />
        </Route>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default function EmployeeManagementAssessment() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [employees, setEmployees] = useState([
    { id: 1, name: "Ananya Rao", role: "Frontend Developer", email: "ananya@example.com" },
    { id: 2, name: "Rahul Kumar", role: "Backend Developer", email: "rahul@example.com" },
    { id: 3, name: "Priya Sharma", role: "QA Engineer", email: "priya@example.com" },
  ]);

  function saveEmployee(data) {
    if (data.id !== undefined) {
      setEmployees((old) =>
        old.map((item) => item.id === data.id ? data : item)
      );
    } else {
      setEmployees((old) => [
        ...old,
        { ...data, id: Math.max(0, ...old.map((item) => item.id)) + 1 },
      ]);
    }
  }

  function deleteEmployee(id) {
    setEmployees((old) => old.filter((item) => item.id !== id));
  }

  return (
    <AssessmentRoutes
      loggedIn={loggedIn}
      onLogin={() => setLoggedIn(true)}
      onLogout={() => setLoggedIn(false)}
      employees={employees}
      saveEmployee={saveEmployee}
      deleteEmployee={deleteEmployee}
    />
  );
}
