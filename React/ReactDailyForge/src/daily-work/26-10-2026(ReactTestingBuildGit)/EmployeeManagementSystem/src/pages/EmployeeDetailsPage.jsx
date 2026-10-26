import { Link, useParams } from "react-router-dom";

import AppNavigation from "../components/AppNavigation";
import PageHeader from "../components/PageHeader";
import LoadingState from "../components/LoadingState";
import StatusBadge from "../components/StatusBadge";
import { ErrorMessage } from "../components/FeedbackStates";

import { useEmployee } from "../hooks/useEmployee";

import {
  formatEmployeeName,
  formatJoiningDate,
  formatSalary
} from "../utils/employeeFormatters";

function EmployeeDetailsPage() {
  const { id } = useParams();

  const {
    employee,
    loading,
    error
  } = useEmployee(id);

  if (loading) {
    return (
      <main className="app-container employee-details-page">
        <AppNavigation />
        <LoadingState message="Loading employee details..." />
      </main>
    );
  }

  if (error || !employee) {
    return (
      <main className="app-container employee-details-page">
        <AppNavigation />

        <PageHeader
          title="Employee Details"
          description="View employee information."
        />

        <section className="employee-details-error">
          <ErrorMessage
            message={error || "Employee record not found."}
          />

          <Link
            to="/employees"
            className="employee-secondary-link"
          >
            Back to Employee Directory
          </Link>
        </section>
      </main>
    );
  }

  const fullName = formatEmployeeName(employee);

  return (
    <main className="app-container employee-details-page">
      <AppNavigation />

      <PageHeader
        title="Employee Details"
        description="View the employee's complete profile and employment information."
      />

      <section className="employee-profile-card">
        <div className="employee-profile-header">
          <div className="employee-avatar" aria-hidden="true">
            {employee.firstName?.charAt(0).toUpperCase() || "E"}
            {employee.lastName?.charAt(0).toUpperCase() || ""}
          </div>

          <div className="employee-profile-heading">
            <h2>{fullName}</h2>

            <p>
              {employee.designation || "Designation not provided"}
            </p>

            <span className="employee-profile-id">
              Employee ID: {employee.id}
            </span>
          </div>

          <div className="employee-profile-status">
            <StatusBadge status={employee.status} />
          </div>
        </div>

        <div className="employee-details-section">
          <h3>Personal Information</h3>

          <div className="employee-details-grid">
            <DetailItem
              label="First Name"
              value={employee.firstName}
            />

            <DetailItem
              label="Last Name"
              value={employee.lastName}
            />

            <DetailItem
              label="Email Address"
              value={employee.email}
            />

            <DetailItem
              label="Phone Number"
              value={employee.phone}
            />
          </div>
        </div>

        <div className="employee-details-section">
          <h3>Employment Information</h3>

          <div className="employee-details-grid">
            <DetailItem
              label="Department"
              value={employee.department}
            />

            <DetailItem
              label="Designation"
              value={employee.designation}
            />

            <DetailItem
              label="Employment Status"
              value={employee.status}
            />

            <DetailItem
              label="Joining Date"
              value={formatJoiningDate(employee.joiningDate)}
            />

            <DetailItem
              label="Annual Salary"
              value={formatSalary(employee.salary)}
            />
          </div>
        </div>

        <div className="employee-details-actions">
          <Link
            to={`/employees/${encodeURIComponent(employee.id)}/edit`}
            className="employee-primary-link"
          >
            Edit Employee
          </Link>

          <Link
            to="/employees"
            className="employee-secondary-link"
          >
            Back to Directory
          </Link>
        </div>
      </section>
    </main>
  );
}

function DetailItem({ label, value }) {
  return (
    <div className="employee-detail-item">
      <span className="employee-detail-label">{label}</span>

      <strong className="employee-detail-value">
        {value === null ||
        value === undefined ||
        value === ""
          ? "Not provided"
          : value}
      </strong>
    </div>
  );
}

export default EmployeeDetailsPage;