import { useEffect, useState } from "react";
import { getEmployees } from "./employeeApi";

export default function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadEmployees() {
      try {
        setLoading(true);
        setError("");

        const data = await getEmployees();

        setEmployees(data);
      } catch {
        setError("Unable to load employees.");
      } finally {
        setLoading(false);
      }
    }

    loadEmployees();
  }, []);

  if (loading) {
    return <p role="status">Loading employees...</p>;
  }

  if (error) {
    return <p role="alert">{error}</p>;
  }

  if (employees.length === 0) {
    return <p>No employees found.</p>;
  }

  return (
    <section>
      <h2>Employee List</h2>

      <ul>
        {employees.map((employee) => (
          <li key={employee.id}>
            <strong>{employee.name}</strong>
            {" — "}
            {employee.email}
          </li>
        ))}
      </ul>
    </section>
  );
}