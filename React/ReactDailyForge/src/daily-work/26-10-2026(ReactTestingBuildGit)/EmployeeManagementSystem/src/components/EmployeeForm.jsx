import { useState } from "react";

import Button from "./Button";
import { validateEmployee } from "../utils/employeeValidation";

const EMPTY_EMPLOYEE = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  department: "",
  designation: "",
  status: "Active",
  joiningDate: "",
  salary: ""
};

function EmployeeForm({
  initialValues,
  existingEmployees = [],
  employeeId = null,
  onSubmit,
  onCancel,
  isSubmitting = false,
  submitLabel = "Save Employee"
}) {
  const [formData, setFormData] = useState(() => ({
    ...EMPTY_EMPLOYEE,
    ...initialValues,
    salary:
      initialValues?.salary === undefined ||
      initialValues?.salary === null
        ? ""
        : String(initialValues.salary)
  }));

  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value
    }));

    setErrors((currentErrors) => ({
      ...currentErrors,
      [name]: ""
    }));

    setSubmitError("");
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const validationErrors = validateEmployee(
      formData,
      existingEmployees,
      employeeId
    );

    setErrors(validationErrors);
    setSubmitError("");

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    const employeeData = {
      ...formData,
      firstName: formData.firstName.trim(),
      lastName: formData.lastName.trim(),
      email: formData.email.trim().toLowerCase(),
      phone: formData.phone.trim(),
      department: formData.department.trim(),
      designation: formData.designation.trim(),
      salary: Number(formData.salary)
    };

    try {
      await onSubmit(employeeData);
    } catch (error) {
      setSubmitError(
        error.message || "Unable to save the employee."
      );
    }
  }

  function renderError(fieldName) {
    if (!errors[fieldName]) {
      return null;
    }

    return (
      <span className="employee-field-error" role="alert">
        {errors[fieldName]}
      </span>
    );
  }

  return (
    <form className="employee-form-card" onSubmit={handleSubmit} noValidate>
      {submitError && (
        <p className="employee-form-error" role="alert">
          {submitError}
        </p>
      )}

      <div className="employee-form-grid">
        <div className="employee-form-field">
          <label htmlFor="firstName">First name *</label>
          <input
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            autoComplete="given-name"
          />
          {renderError("firstName")}
        </div>

        <div className="employee-form-field">
          <label htmlFor="lastName">Last name *</label>
          <input
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            autoComplete="family-name"
          />
          {renderError("lastName")}
        </div>

        <div className="employee-form-field">
          <label htmlFor="email">Email address *</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            autoComplete="email"
          />
          {renderError("email")}
        </div>

        <div className="employee-form-field">
          <label htmlFor="phone">Phone number *</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            inputMode="numeric"
            maxLength={10}
            autoComplete="tel"
          />
          {renderError("phone")}
        </div>

        <div className="employee-form-field">
          <label htmlFor="department">Department *</label>
          <input
            id="department"
            name="department"
            value={formData.department}
            onChange={handleChange}
            placeholder="e.g. Engineering"
          />
          {renderError("department")}
        </div>

        <div className="employee-form-field">
          <label htmlFor="designation">Designation *</label>
          <input
            id="designation"
            name="designation"
            value={formData.designation}
            onChange={handleChange}
            placeholder="e.g. Frontend Developer"
          />
          {renderError("designation")}
        </div>

        <div className="employee-form-field">
          <label htmlFor="status">Employment status *</label>
          <select
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
            <option value="On Leave">On Leave</option>
          </select>
          {renderError("status")}
        </div>

        <div className="employee-form-field">
          <label htmlFor="joiningDate">Joining date *</label>
          <input
            id="joiningDate"
            name="joiningDate"
            type="date"
            value={formData.joiningDate}
            onChange={handleChange}
          />
          {renderError("joiningDate")}
        </div>

        <div className="employee-form-field">
          <label htmlFor="salary">Annual salary (₹) *</label>
          <input
            id="salary"
            name="salary"
            type="number"
            min="0"
            step="1"
            value={formData.salary}
            onChange={handleChange}
            placeholder="e.g. 600000"
          />
          {renderError("salary")}
        </div>
      </div>

      <p className="employee-inline-message">
        Fields marked with * are required.
      </p>

      <div className="employee-form-actions">
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Saving..." : submitLabel}
        </Button>

        <Button
          type="button"
          variant="secondary"
          onClick={onCancel}
          disabled={isSubmitting}
        >
          Cancel
        </Button>
      </div>
    </form>
  );
}

export default EmployeeForm;