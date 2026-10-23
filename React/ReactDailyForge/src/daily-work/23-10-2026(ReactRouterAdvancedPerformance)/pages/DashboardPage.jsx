
import { Link } from "react-router-dom";
import useEmployees from "../hooks/useEmployees";

export default function DashboardPage() {
  const { employees } = useEmployees();

  return (
    <section>
      <h2>Dashboard</h2>
      <p>Welcome to the Employee Management Portal.</p>
      <h3>Total employees: {employees.length}</h3>
      <Link to="/employees">Manage Employees</Link>
    </section>
  );
}
