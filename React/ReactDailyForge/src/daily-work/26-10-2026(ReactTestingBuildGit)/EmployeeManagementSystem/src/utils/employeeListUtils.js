export function getUniqueDepartments(employees) {
  return [
    ...new Set(
      employees
        .map((employee) => employee.department)
        .filter(Boolean)
    )
  ].sort((first, second) => first.localeCompare(second));
}

export function filterAndSortEmployees(
  employees,
  {
    search = "",
    department = "All",
    status = "All",
    sortBy = "firstName",
    sortDirection = "asc"
  } = {}
) {
  const searchTerm = search.trim().toLowerCase();

  const filteredEmployees = employees.filter((employee) => {
    const fullName =
      `${employee.firstName || ""} ${employee.lastName || ""}`
        .trim()
        .toLowerCase();

    const email = (employee.email || "").toLowerCase();
    const employeeId = String(employee.id || "").toLowerCase();

    const matchesSearch =
      !searchTerm ||
      fullName.includes(searchTerm) ||
      email.includes(searchTerm) ||
      employeeId.includes(searchTerm);

    const matchesDepartment =
      department === "All" ||
      employee.department === department;

    const matchesStatus =
      status === "All" ||
      employee.status === status;

    return (
      matchesSearch &&
      matchesDepartment &&
      matchesStatus
    );
  });

  return filteredEmployees.sort((first, second) => {
    let comparison = 0;

    if (sortBy === "joiningDate") {
      comparison = String(first.joiningDate || "").localeCompare(
        String(second.joiningDate || "")
      );
    } else if (sortBy === "department") {
      comparison = String(first.department || "").localeCompare(
        String(second.department || "")
      );
    } else {
      const firstName =
        `${first.firstName || ""} ${first.lastName || ""}`;

      const secondName =
        `${second.firstName || ""} ${second.lastName || ""}`;

      comparison = firstName.localeCompare(secondName);
    }

    return sortDirection === "desc"
      ? -comparison
      : comparison;
  });
}