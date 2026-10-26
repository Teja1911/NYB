import { useEffect, useState } from "react";
import {
  Link,
  useNavigate,
  useParams
} from "react-router-dom";

import PageHeader from "../components/PageHeader";
import LoadingState from "../components/LoadingState";
import Notification from "../components/Notification";
import AppNavigation from "../components/AppNavigation";
import EmployeeForm from "../components/EmployeeForm";
import { ErrorMessage } from "../components/FeedbackStates";

import { useEmployees } from "../hooks/useEmployees";
import { useEmployee } from "../hooks/useEmployee";

function createEmployeeId(existingEmployees) {
  const numericIds = existingEmployees
    .map((employee) => {
      const match = String(employee.id).match(/^EMP(\d+)$/);
      return match ? Number(match[1]) : 0;
    })
    .filter(Number.isFinite);

  const nextNumber = Math.max(1000, ...numericIds) + 1;

  return `EMP${nextNumber}`;
}

function EmployeeFormPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const isEditing = Boolean(id);

  const {
    employees,
    loading: employeesLoading,
    error: employeesError,
    fetchEmployees,
    addEmployee,
    updateEmployee
  } = useEmployees();

  const {
    employee,
    loading: employeeLoading,
    error: employeeError
  } = useEmployee(id);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [pageError, setPageError] = useState("");

  useEffect(() => {
    fetchEmployees().catch(() => {
      // The context stores the employee-list error.
    });
  }, [fetchEmployees]);

  const loading =
    employeesLoading || (isEditing && employeeLoading);

  const loadError =
    (isEditing && employeeError) || employeesError;

  async function handleSubmit(formData) {
    setIsSubmitting(true);
    setPageError("");

    try {
      if (isEditing) {
        await updateEmployee(id, {
          ...employee,
          ...formData,
          id: employee.id
        });
      } else {
        await addEmployee({
          ...formData,
          id: createEmployeeId(employees)
        });
      }

      navigate("/employees", {
        replace: true,
        state: {
          message: isEditing
            ? "Employee updated successfully."
            : "Employee created successfully."
        }
      });
    } catch (error) {
      setPageError(
        error.message || "Unable to save the employee."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="app-container employee-form-page">
      <AppNavigation />

      <PageHeader
        title={isEditing ? "Edit Employee" : "Add Employee"}
        description={
          isEditing
            ? "Update the employee's information."
            : "Enter the details to create a new employee record."
        }
      />

      {loading && (
        <LoadingState message="Loading employee information..." />
      )}

      {!loading && loadError && (
        <ErrorMessage message={loadError} />
      )}

      {!loading && !loadError && isEditing && !employee && (
        <div className="employee-empty-state">
          <h3>Employee not found</h3>
          <p>The requested employee record could not be found.</p>
          <Link className="employee-secondary-link" to="/employees">
            Back to Employee Directory
          </Link>
        </div>
      )}

      {!loading && !loadError && (!isEditing || employee) && (
        <>
          {pageError && (
            <Notification
              type="error"
              message={pageError}
              onClose={() => setPageError("")}
              duration={0}
            />
          )}

          <EmployeeForm
            initialValues={employee}
            existingEmployees={employees}
            employeeId={id}
            onSubmit={handleSubmit}
            onCancel={() => navigate("/employees")}
            isSubmitting={isSubmitting}
            submitLabel={
              isEditing ? "Update Employee" : "Create Employee"
            }
          />
        </>
      )}
    </main>
  );
}

export default EmployeeFormPage;