import { Link } from "react-router-dom";
import StatusBadge from "./StatusBadge";

function EmployeeTable({ employees, onDelete }) {
  function formatDate(date) {
    if (!date) return "—";

    return new Date(`${date}T00:00:00`).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric"
    });
  }

  if (employees.length === 0) {
    return (
      <div className="employee-empty-state">
        <h3>No employees found</h3>
        <p>Try changing your search or filter criteria.</p>
      </div>
    );
  }

  return (
    <div className="employee-table-wrapper">
      <table className="employee-table">
        <thead>
          <tr>
            <th>Employee</th>
            <th>Employee ID</th>
            <th>Department</th>
            <th>Designation</th>
            <th>Status</th>
            <th>Joining Date</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>
                <div className="employee-name-cell">
                  <strong>
                    {employee.firstName} {employee.lastName}
                  </strong>
                  <span>{employee.email}</span>
                </div>
              </td>

              <td>{employee.id}</td>
              <td>{employee.department}</td>
              <td>{employee.designation}</td>

              <td>
                <StatusBadge status={employee.status} />
              </td>

              <td>{formatDate(employee.joiningDate)}</td>

              <td>
                <div className="employee-row-actions">
                  <Link
                    className="employee-action-link"
                    to={`/employees/${encodeURIComponent(employee.id)}`}
                  >
                    View
                  </Link>

                  <Link
                    className="employee-action-link"
                    to={`/employees/${encodeURIComponent(employee.id)}/edit`}
                  >
                    Edit
                  </Link>

                  <button
                    className="employee-delete-button"
                    type="button"
                    onClick={() => onDelete(employee)}
                    aria-label={`Delete ${employee.firstName} ${employee.lastName}`}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeTable;