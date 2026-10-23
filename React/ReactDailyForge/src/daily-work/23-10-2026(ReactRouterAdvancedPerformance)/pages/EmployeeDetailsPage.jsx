
import { Link, useParams } from "react-router-dom";
import useEmployees from "../hooks/useEmployees";

export default function EmployeeDetailsPage() {
  const { employeeId } = useParams();
  const { employees } = useEmployees();

  const employee = employees.find(
    (item) => item.id === Number(employeeId)
  );

  if (!employee) {
    return (
      <section>
        <h2>Employee not found</h2>
        <Link to="/employees">Back to Employee List</Link>
      </section>
    );
  }

  return (
    <section>
      <h2>Employee Details</h2>
      <p>ID: {employee.id}</p>
      <p>Name: {employee.name}</p>
      <p>Email: {employee.email}</p>
      <p>Department: {employee.department}</p>

      <Link to={`/employees/${employee.id}/edit`}>Edit Employee</Link>
    </section>
  );
}
