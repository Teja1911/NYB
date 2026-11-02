// ========================================
// EMPLOYEE DATA MODULE
// File: employee-data.js
// Purpose: Store and manage employee data
// ========================================

// 1. SAMPLE EMPLOYEE DATA

export const employees = [
    {
        id: 101,
        name: "Rahul Sharma",
        department: "Frontend",
        role: "React Developer",
        monthlySalary: 45000,
        experience: 2
    },
    {
        id: 102,
        name: "Priya Reddy",
        department: "Backend",
        role: "Node.js Developer",
        monthlySalary: 50000,
        experience: 3
    },
    {
        id: 103,
        name: "Arjun Kumar",
        department: "Testing",
        role: "QA Engineer",
        monthlySalary: 35000,
        experience: 1
    },
    {
        id: 104,
        name: "Sneha Rao",
        department: "Frontend",
        role: "UI Developer",
        monthlySalary: 40000,
        experience: 2
    }
];

// 2. GET EMPLOYEE BY ID

export function getEmployeeById(employeeId) {
    return employees.find(function (employee) {
        return employee.id === employeeId;
    });
}

// 3. GET ALL EMPLOYEES

export function getAllEmployees() {
    return [...employees];
}

// 4. ADD A NEW EMPLOYEE

export function addEmployee(employee) {
    if (!employee || typeof employee !== "object") {
        console.error("Please provide valid employee data.");
        return false;
    }

    const employeeExists = employees.some(function (existingEmployee) {
        return existingEmployee.id === employee.id;
    });

    if (employeeExists) {
        console.error("An employee with this ID already exists.");
        return false;
    }

    employees.push(employee);

    console.log("Employee added successfully:", employee.name);

    return true;
}

// 5. UPDATE AN EMPLOYEE

export function updateEmployee(employeeId, updatedDetails) {
    const employee = getEmployeeById(employeeId);

    if (!employee) {
        console.error("Employee not found.");
        return false;
    }

    if (!updatedDetails || typeof updatedDetails !== "object") {
        console.error("Please provide valid update details.");
        return false;
    }

    // Prevent changing the employee ID through this function.
    const { id, ...safeDetails } = updatedDetails;

    Object.assign(employee, safeDetails);

    console.log("Employee updated successfully:", employee.name);

    return true;
}

// 6. DELETE AN EMPLOYEE

export function deleteEmployee(employeeId) {
    const employeeIndex = employees.findIndex(function (employee) {
        return employee.id === employeeId;
    });

    if (employeeIndex === -1) {
        console.error("Employee not found.");
        return false;
    }

    const deletedEmployee = employees.splice(employeeIndex, 1);

    console.log("Employee deleted successfully:", deletedEmployee[0].name);

    return true;
}

// 7. GET EMPLOYEES BY DEPARTMENT

export function getEmployeesByDepartment(departmentName) {
    return employees.filter(function (employee) {
        return employee.department.toLowerCase() ===
            departmentName.toLowerCase();
    });
}