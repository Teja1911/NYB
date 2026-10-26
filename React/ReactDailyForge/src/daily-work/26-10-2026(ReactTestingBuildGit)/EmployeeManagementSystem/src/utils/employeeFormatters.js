export function formatEmployeeName(employee) {
  if (!employee) {
    return "Unknown Employee";
  }

  return `${employee.firstName || ""} ${employee.lastName || ""}`.trim();
}

export function formatJoiningDate(dateValue) {
  if (!dateValue) {
    return "Not provided";
  }

  const date = new Date(`${dateValue}T00:00:00`);

  if (Number.isNaN(date.getTime())) {
    return "Invalid date";
  }

  return new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  }).format(date);
}

export function formatSalary(salary) {
  if (
    salary === null ||
    salary === undefined ||
    salary === "" ||
    !Number.isFinite(Number(salary))
  ) {
    return "Not provided";
  }

  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(Number(salary));
}