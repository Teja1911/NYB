
import { useSearchParams, Link } from "react-router-dom";
import useEmployees from "../hooks/useEmployees";

function EmployeeCard({ employee, onDelete }) {
  return (
    <article className="employee-card">
      <h3>{employee.name}</h3>
      <p>{employee.email}</p>
      <p>Department: {employee.department}</p>

      <Link to={`/employees/${employee.id}`}>Details</Link>{" "}
      <Link to={`/employees/${employee.id}/edit`}>Edit</Link>{" "}
      <button onClick={() => onDelete(employee.id)}>Delete</button>
    </article>
  );
}

export default function EmployeeListPage() {
  const {
  employees,
  loading,
  error,
  deleteEmployee,
} = useEmployees();

if (loading) {
  return <p role="status">Loading employees...</p>;
}

if (error) {
  return <p role="alert">{error}</p>;
}
  const [params, setParams] = useSearchParams();

  const search = params.get("search") || "";
  const department = params.get("department") || "All";

  function updateParam(key, value) {
    const next = new URLSearchParams(params);

    if (value) {
      next.set(key, value);
    } else {
      next.delete(key);
    }

    setParams(next);
  }

  const filteredEmployees = employees.filter((employee) => {
    const matchesText =
      employee.name.toLowerCase().includes(search.toLowerCase()) ||
      employee.email.toLowerCase().includes(search.toLowerCase());

    const matchesDepartment =
      department === "All" || employee.department === department;

    return matchesText && matchesDepartment;
  });

  function handleDelete(id) {
    if (window.confirm("Delete this employee?")) {
      deleteEmployee(id);
    }
  }

  return (
    <section>
      <h2>Employee List</h2>
      <p>Search and filter values are stored in the URL.</p>

      <Link to="/employees/new">Add Employee</Link>

      <div className="filter-row">
        <input
          value={search}
          onChange={(event) => updateParam("search", event.target.value)}
          placeholder="Search by name or email"
          aria-label="Search employees"
        />

        <select
          value={department}
          onChange={(event) => updateParam("department", event.target.value)}
          aria-label="Filter by department"
        >
          <option value="All">All departments</option>
          <option value="IT">IT</option>
          <option value="HR">HR</option>
          <option value="Finance">Finance</option>
        </select>
      </div>

      <p>Results: {filteredEmployees.length}</p>

      {filteredEmployees.map((employee) => (
        <EmployeeCard
          key={employee.id}
          employee={employee}
          onDelete={handleDelete}
        />
      ))}

      {filteredEmployees.length === 0 && <p>No employees found.</p>}
    </section>
  );
}
