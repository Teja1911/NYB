// ======================================================
// FILE: employee-utils.js
// TOPIC: Reusable Functions and Named Exports
// ======================================================

// 1. Generate a unique employee ID.

let nextEmployeeId = 1001;

export function generateEmployeeId() {
    return nextEmployeeId++;
}


// 2. Format an employee's name.

export function formatEmployeeName(name) {
    if (typeof name !== "string" || name.trim() === "") {
        return "Unknown Employee";
    }

    return name.trim().replace(/\b\w/g, function (character) {
        return character.toUpperCase();
    });
}


// 3. Calculate annual salary.

export function calculateAnnualSalary(monthlySalary) {
    if (
        typeof monthlySalary !== "number" ||
        !Number.isFinite(monthlySalary) ||
        monthlySalary < 0
    ) {
        throw new Error("Salary must be a valid non-negative number.");
    }

    return monthlySalary * 12;
}


// 4. Search employees by name or role.

export function searchEmployees(employees, searchText = "") {
    if (!Array.isArray(employees)) {
        throw new Error("Employees must be provided as an array.");
    }

    if (typeof searchText !== "string") {
        throw new Error("Search text must be a string.");
    }

    const normalizedSearch = searchText.trim().toLowerCase();

    return employees.filter(function (employee) {
        if (!employee || typeof employee !== "object") {
            return false;
        }

        const name = typeof employee.name === "string"
            ? employee.name.toLowerCase()
            : "";

        const role = typeof employee.role === "string"
            ? employee.role.toLowerCase()
            : "";

        return (
            name.includes(normalizedSearch) ||
            role.includes(normalizedSearch)
        );
    });
}


// 5. Sort employees by salary.

// Sort employees by monthly salary
export function sortEmployeesBySalary(
    employees,
    order = "ascending"
) {
    if (!Array.isArray(employees)) {
        throw new TypeError("Employees must be an array.");
    }

    // Create a copy so the original array is not modified.
    const sortedEmployees = [...employees];

    // Validate salary values.
    sortedEmployees.forEach(function (employee) {
        if (
            typeof employee.monthlySalary !== "number" ||
            !Number.isFinite(employee.monthlySalary) ||
            employee.monthlySalary < 0
        ) {
            throw new Error(
                "Every employee must have a valid monthlySalary."
            );
        }
    });

    // Sort from lowest to highest or highest to lowest.
    sortedEmployees.sort(function (employeeA, employeeB) {
        if (order === "descending") {
            return employeeB.monthlySalary - employeeA.monthlySalary;
        }

        return employeeA.monthlySalary - employeeB.monthlySalary;
    });

    return sortedEmployees;
}


// 6. Validate employee information.

export function validateEmployee(employee) {
    if (
        employee === null ||
        typeof employee !== "object" ||
        Array.isArray(employee)
    ) {
        return {
            valid: false,
            message: "Employee data must be an object."
        };
    }

    if (
        typeof employee.name !== "string" ||
        employee.name.trim() === ""
    ) {
        return {
            valid: false,
            message: "Employee name is required."
        };
    }

    if (
        typeof employee.role !== "string" ||
        employee.role.trim() === ""
    ) {
        return {
            valid: false,
            message: "Employee role is required."
        };
    }

    if (
        typeof employee.salary !== "number" ||
        !Number.isFinite(employee.salary) ||
        employee.salary < 0
    ) {
        return {
            valid: false,
            message: "Enter a valid non-negative salary."
        };
    }

    return {
        valid: true,
        message: "Employee information is valid."
    };
}


// 7. Format salary as Indian currency.

export function formatSalary(salary) {
    if (
        typeof salary !== "number" ||
        !Number.isFinite(salary) ||
        salary < 0
    ) {
        throw new Error("Salary must be a valid number.");
    }

    return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(salary);
}


// 8. Create an employee summary.

export function getEmployeeSummary(employee) {
    if (!employee || typeof employee !== "object") {
        throw new Error("A valid employee object is required.");
    }

    if (
        typeof employee.monthlySalary !== "number" ||
        !Number.isFinite(employee.monthlySalary) ||
        employee.monthlySalary < 0
    ) {
        throw new Error("Employee must have a valid monthlySalary.");
    }

    const annualSalary = calculateAnnualSalary(
        employee.monthlySalary
    );

    return {
        id: employee.id,
        name: employee.name,
        department: employee.department,
        role: employee.role,
        monthlySalary: formatSalary(employee.monthlySalary),
        annualSalary: formatSalary(annualSalary)
    };
}