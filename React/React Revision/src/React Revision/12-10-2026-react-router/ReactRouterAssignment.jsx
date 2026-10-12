
import { useState } from "react";
import {
  Routes,
  Route,
  Link,
  NavLink,
  Outlet,
  useParams,
  useNavigate,
  useSearchParams,
  Navigate,
} from "react-router-dom";

const BASE = "/ReactRouterAssignment";

function ProtectedRoute({ loggedIn }) {
  return loggedIn ? <Outlet /> : <Navigate to={`${BASE}/login`} replace />;
}

function DashboardLayout({ onLogout }) {
  return (
    <>
      <header>
        <h2>Employee Portal</h2>
        <nav>
          <NavLink to={`${BASE}/dashboard`}>Dashboard</NavLink>{" | "}
          <NavLink to={`${BASE}/employees`}>Employees</NavLink>{" | "}
          <Link to={`${BASE}/employees/add`}>Add Employee</Link>{" | "}
          <button onClick={onLogout}>Logout</button>
        </nav>
      </header>
      <Outlet />
    </>
  );
}

function Dashboard({ employees }) {
  return (
    <section>
      <h2>Dashboard</h2>
      <p>Total employees: {employees.length}</p>
      <Link to={`${BASE}/employees`}>View Employees</Link>{" | "}
      <Link to={`${BASE}/employees/add`}>Add Employee</Link>
    </section>
  );
}

function EmployeeList({ employees }) {
  const [params, setParams] = useSearchParams();
  const search = params.get("search") || "";

  const filtered = employees.filter((employee) =>
    employee.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section>
      <h2>Employee List</h2>
      <input
        placeholder="Search employees"
        value={search}
        onChange={(e) =>
          setParams(e.target.value ? { search: e.target.value } : {})
        }
      />

      <p>
        <Link to={`${BASE}/employees/add`}>Add Employee</Link>
      </p>

      {filtered.map((employee) => (
        <p key={employee.id}>
          {employee.name} — {employee.role}{" "}
          <Link to={`${BASE}/employees/${employee.id}`}>Details</Link>{" "}
          <Link to={`${BASE}/employees/${employee.id}/edit`}>Edit</Link>
        </p>
      ))}

      {filtered.length === 0 && <p>No employees found.</p>}
    </section>
  );
}

function EmployeeDetails({ employees }) {
  const { id } = useParams();
  const employee = employees.find((item) => item.id === Number(id));

  if (!employee) return <NotFound />;

  return (
    <section>
      <h2>Employee Details</h2>
      <p>ID: {employee.id}</p>
      <p>Name: {employee.name}</p>
      <p>Role: {employee.role}</p>
      <p>Email: {employee.email}</p>
      <Link to={`${BASE}/employees/${employee.id}/edit`}>
        Edit Employee
      </Link>
      {" | "}
      <Link to={`${BASE}/employees`}>Back to List</Link>
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
    <form onSubmit={handleSubmit}>
      <h2>{editing ? "Edit Employee" : "Add Employee"}</h2>

      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        placeholder="Role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
        required
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <button type="submit">
        {editing ? "Update Employee" : "Save Employee"}
      </button>
    </form>
  );
}

function Login({ onLogin, loggedIn }) {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();

    if (!username.trim()) return;

    onLogin();
    navigate(`${BASE}/dashboard`, { replace: true });
  }

  if (loggedIn) {
    return <Navigate to={`${BASE}/dashboard`} replace />;
  }

  return (
    <form onSubmit={handleLogin}>
      <h2>Employee Portal Login</h2>
      <p>Enter any username to test mock authentication.</p>

      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        required
      />

      <button type="submit">Sign In</button>
    </form>
  );
}

function NotFound() {
  return (
    <section>
      <h2>404 - Page Not Found</h2>
      <p>The requested page or employee does not exist.</p>
      <Link to={`${BASE}/dashboard`}>Return to Dashboard</Link>
    </section>
  );
}

function PortalRoutes({
  loggedIn,
  onLogin,
  onLogout,
  employees,
  saveEmployee,
}) {
  return (
    <>
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
          element={
            <Login onLogin={onLogin} loggedIn={loggedIn} />
          }
        />

        <Route element={<ProtectedRoute loggedIn={loggedIn} />}>
          <Route element={<DashboardLayout onLogout={onLogout} />}>
            <Route
              path="dashboard"
              element={<Dashboard employees={employees} />}
            />

            <Route
              path="employees"
              element={<EmployeeList employees={employees} />}
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
    </>
  );
}

export default function ReactRouterAssignment() {
  const [loggedIn, setLoggedIn] = useState(false);

  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Ananya",
      role: "Developer",
      email: "ananya@example.com",
    },
    {
      id: 2,
      name: "Rahul",
      role: "Tester",
      email: "rahul@example.com",
    },
  ]);

  function saveEmployee(data) {
    if (data.id !== undefined) {
      setEmployees((old) =>
        old.map((employee) =>
          employee.id === data.id ? data : employee
        )
      );
    } else {
      setEmployees((old) => [
        ...old,
        {
          ...data,
          id: Math.max(0, ...old.map((employee) => employee.id)) + 1,
        },
      ]);
    }
  }

  return (
    <PortalRoutes
      loggedIn={loggedIn}
      onLogin={() => setLoggedIn(true)}
      onLogout={() => setLoggedIn(false)}
      employees={employees}
      saveEmployee={saveEmployee}
    />
  );
}
