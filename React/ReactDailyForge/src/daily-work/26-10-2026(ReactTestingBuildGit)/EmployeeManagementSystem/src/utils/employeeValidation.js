export function validateEmployee(
  employee = {},
  existingEmployees = [],
  editingId = null
) {
  const errors = {};

  const firstName = String(employee.firstName || "").trim();
  const lastName = String(employee.lastName || "").trim();
  const email = String(employee.email || "").trim().toLowerCase();
  const phone = String(employee.phone || "").trim();
  const department = String(employee.department || "").trim();
  const designation = String(employee.designation || "").trim();
  const joiningDate = String(employee.joiningDate || "").trim();
  const salary = employee.salary;

  // 1. First name validation
  if (!firstName) {
    errors.firstName = "First name is required.";
  } else if (firstName.length < 2) {
    errors.firstName = "First name must contain at least 2 characters.";
  }

  // 2. Last name validation
  if (!lastName) {
    errors.lastName = "Last name is required.";
  } else if (lastName.length < 2) {
    errors.lastName = "Last name must contain at least 2 characters.";
  }

  // 3. Email validation
  if (!email) {
    errors.email = "Email address is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Enter a valid email address.";
  } else {
    const duplicateEmail = existingEmployees.some(
      (existingEmployee) =>
        String(existingEmployee.email || "").trim().toLowerCase() ===
          email &&
        String(existingEmployee.id) !== String(editingId)
    );

    if (duplicateEmail) {
      errors.email = "This email address is already registered.";
    }
  }

  // 4. Indian mobile number validation
  if (!phone) {
    errors.phone = "Phone number is required.";
  } else if (!/^[6-9]\d{9}$/.test(phone)) {
    errors.phone = "Enter a valid 10-digit Indian mobile number.";
  }

  // 5. Department validation
  if (!department) {
    errors.department = "Department is required.";
  }

  // 6. Designation validation
  if (!designation) {
    errors.designation = "Designation is required.";
  }

  // 7. Employment status validation
  const validStatuses = ["Active", "Inactive", "On Leave"];

  if (!validStatuses.includes(employee.status)) {
    errors.status = "Select a valid employment status.";
  }

  // 8. Joining date validation
if (!joiningDate) {
  errors.joiningDate = "Joining date is required.";
} else {
  let year;
  let month;
  let day;

  // Support YYYY-MM-DD and DD-MM-YYYY formats
  if (/^\d{4}-\d{2}-\d{2}$/.test(joiningDate)) {
    [year, month, day] = joiningDate.split("-").map(Number);
  } else if (/^\d{2}-\d{2}-\d{4}$/.test(joiningDate)) {
    [day, month, year] = joiningDate.split("-").map(Number);
  }

  const selectedDate = new Date(year, month - 1, day);

  const isValidDate =
    Number.isInteger(year) &&
    Number.isInteger(month) &&
    Number.isInteger(day) &&
    selectedDate.getFullYear() === year &&
    selectedDate.getMonth() === month - 1 &&
    selectedDate.getDate() === day;

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  if (!isValidDate) {
    errors.joiningDate = "Enter a valid joining date.";
  } else if (selectedDate > today) {
    errors.joiningDate = "Joining date cannot be in the future.";
  }
}
  // 9. Annual salary validation
  if (
    salary === "" ||
    salary === null ||
    salary === undefined
  ) {
    errors.salary = "Annual salary is required.";
  } else if (
    !Number.isFinite(Number(salary)) ||
    Number(salary) < 0
  ) {
    errors.salary = "Enter a valid non-negative annual salary.";
  }

  return errors;
}
