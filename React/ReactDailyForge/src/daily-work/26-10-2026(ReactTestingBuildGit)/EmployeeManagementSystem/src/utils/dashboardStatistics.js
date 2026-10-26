// Calculate employee statistics from the employee records.

export function calculateDashboardStatistics(employees = []) {
  const statistics = {
    totalEmployees: employees.length,
    activeEmployees: 0,
    inactiveEmployees: 0,
    employeesOnLeave: 0
  };

  employees.forEach((employee) => {
    if (employee.status === "Active") {
      statistics.activeEmployees += 1;
    } else if (employee.status === "Inactive") {
      statistics.inactiveEmployees += 1;
    } else if (employee.status === "On Leave") {
      statistics.employeesOnLeave += 1;
    }
  });

  return statistics;
}

// Count employees belonging to each department.

export function calculateDepartmentStatistics(employees = []) {
  const departmentCounts = {};

  employees.forEach((employee) => {
    const department = employee.department?.trim();

    if (!department) {
      return;
    }

    departmentCounts[department] =
      (departmentCounts[department] || 0) + 1;
  });

  return Object.entries(departmentCounts)
    .map(([department, count]) => ({
      department,
      count
    }))
    .sort((first, second) =>
      first.department.localeCompare(second.department)
    );
}

// Calculate the percentage of employees in a category.

export function calculatePercentage(count, total) {
  if (total === 0) {
    return 0;
  }

  return Math.round((count / total) * 100);
}