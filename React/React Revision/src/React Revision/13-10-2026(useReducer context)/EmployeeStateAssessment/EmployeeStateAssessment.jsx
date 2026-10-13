
import { createContext, useContext, useEffect, useReducer, useState } from "react";
import "./EmployeeStateAssessment.css";

const EmployeeContext = createContext(null);

const initialState = {
  employees: [
    { id: 1, name: "Ananya Rao", role: "Frontend Developer", email: "ananya@example.com", status: "Active" },
    { id: 2, name: "Rahul Kumar", role: "Backend Developer", email: "rahul@example.com", status: "Inactive" },
    { id: 3, name: "Priya Sharma", role: "QA Engineer", email: "priya@example.com", status: "Active" },
  ],
};

function employeeReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return { ...state, employees: [...state.employees, action.payload] };
    case "UPDATE":
      return {
        ...state,
        employees: state.employees.map((e) =>
          e.id === action.payload.id ? { ...e, ...action.payload } : e
        ),
      };
    case "DELETE":
      return {
        ...state,
        employees: state.employees.filter((e) => e.id !== action.payload),
      };
    case "TOGGLE_STATUS":
      return {
        ...state,
        employees: state.employees.map((e) =>
          e.id === action.payload
            ? { ...e, status: e.status === "Active" ? "Inactive" : "Active" }
            : e
        ),
      };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

function EmployeeProvider({ children }) {
  const [state, dispatch] = useReducer(employeeReducer, initialState);
  return (
    <EmployeeContext.Provider value={{ state, dispatch }}>
      {children}
    </EmployeeContext.Provider>
  );
}

function useEmployees() {
  const context = useContext(EmployeeContext);
  if (!context) throw new Error("useEmployees must be inside EmployeeProvider");
  return context;
}

function Dashboard() {
  const { state } = useEmployees();
  const { employees } = state;
  const active = employees.filter((e) => e.status === "Active").length;

  return (
    <section className="summary-grid">
      <article className="summary-card">
        <span>Total Employees</span><strong>{employees.length}</strong>
      </article>
      <article className="summary-card">
        <span>Active</span><strong>{active}</strong>
      </article>
      <article className="summary-card">
        <span>Inactive</span><strong>{employees.length - active}</strong>
      </article>
    </section>
  );
}

function EmployeeForm({ selected, onCancel, onSaved }) {
  const { state, dispatch } = useEmployees();
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    setName(selected?.name || "");
    setRole(selected?.role || "");
    setEmail(selected?.email || "");
  }, [selected]);

  function submit(e) {
    e.preventDefault();
    if (!name.trim() || !role.trim() || !email.trim()) return;

    if (selected) {
      dispatch({
        type: "UPDATE",
        payload: { id: selected.id, name: name.trim(), role: role.trim(), email: email.trim() },
      });
    } else {
      dispatch({
        type: "ADD",
        payload: {
          id: Math.max(0, ...state.employees.map((e) => e.id)) + 1,
          name: name.trim(),
          role: role.trim(),
          email: email.trim(),
          status: "Active",
        },
      });
    }

    onSaved();
  }

  return (
    <section className="panel">
      <h2>{selected ? "Update Employee" : "Add Employee"}</h2>
      <form className="employee-form" onSubmit={submit}>
        <input placeholder="Full name" value={name}
          onChange={(e) => setName(e.target.value)} required />
        <input placeholder="Job role" value={role}
          onChange={(e) => setRole(e.target.value)} required />
        <input type="email" placeholder="Email address" value={email}
          onChange={(e) => setEmail(e.target.value)} required />
        <button className="primary" type="submit">
          {selected ? "Save Changes" : "Add Employee"}
        </button>
        {selected && <button type="button" onClick={onCancel}>Cancel</button>}
      </form>
    </section>
  );
}

function EmployeeList({ onEdit }) {
  const { state, dispatch } = useEmployees();
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const employees = state.employees.filter((e) => {
    const matchesSearch = `${e.name} ${e.role} ${e.email}`
      .toLowerCase().includes(search.toLowerCase());
    return matchesSearch && (filter === "All" || e.status === filter);
  });

  return (
    <section className="panel">
      <div className="list-heading">
        <h2>Employee Directory</h2><span>{employees.length} records</span>
      </div>
      <div className="filters">
        <input placeholder="Search employees..." value={search}
          onChange={(e) => setSearch(e.target.value)} />
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="All">All statuses</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>
      <div className="table-wrap">
        <table>
          <thead>
            <tr><th>Employee</th><th>Role</th><th>Status</th><th>Actions</th></tr>
          </thead>
          <tbody>
            {employees.map((e) => (
              <tr key={e.id}>
                <td><strong>{e.name}</strong><small>{e.email}</small></td>
                <td>{e.role}</td>
                <td><span className={`status ${e.status.toLowerCase()}`}>{e.status}</span></td>
                <td>
                  <div className="row-actions">
                    <button onClick={() => onEdit(e)}>Edit</button>
                    <button onClick={() => dispatch({ type: "TOGGLE_STATUS", payload: e.id })}>
                      Change Status
                    </button>
                    <button onClick={() => dispatch({ type: "DELETE", payload: e.id })}>
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {employees.length === 0 && <p>No employees match your filters.</p>}
    </section>
  );
}

function EmployeeWorkspace() {
  const [selected, setSelected] = useState(null);

  function finishEditing() {
    setSelected(null);
  }

  return (
    <main className="employee-app">
      <header className="app-header">
        <div>
          <p className="eyebrow">CENTRALIZED STATE MANAGEMENT</p>
          <h1>Employee Portal</h1>
        </div>
        <button className="reset-button" onClick={() => window.location.reload()}>
          Reload Demo
        </button>
      </header>
      <Dashboard />
      <EmployeeForm
        selected={selected}
        onCancel={finishEditing}
        onSaved={finishEditing}
      />
      <EmployeeList onEdit={setSelected} />
    </main>
  );
}

export default function EmployeeStateAssessment() {
  return (
    <EmployeeProvider>
      <EmployeeWorkspace />
    </EmployeeProvider>
  );
}
