// JAVASCRIPT MODULE DEMONSTRATION
// File: module-demo.js
// Purpose: Connect employee data and utilities
// ========================================

// 1. IMPORT EMPLOYEE DATA FUNCTIONS

import {
    employees,
    getEmployeeById,
    getAllEmployees,
    addEmployee,
    updateEmployee,
    deleteEmployee,
    getEmployeesByDepartment
} from "./employee-data.js";

// 2. IMPORT EMPLOYEE UTILITY FUNCTIONS

import {
    generateEmployeeId,
    formatEmployeeName,
    calculateAnnualSalary,
    searchEmployees,
    sortEmployeesBySalary,
    validateEmployee,
    formatSalary,
    getEmployeeSummary
} from "./employee-utils.js";


// ========================================
// TASK 1: DISPLAY ALL EMPLOYEES
// ========================================

console.log("\n========== ALL EMPLOYEES ==========");

getAllEmployees().forEach(function (employee) {
    console.log(employee);
});


// ========================================
// TASK 2: FIND AN EMPLOYEE BY ID
// ========================================

console.log("\n========== FIND EMPLOYEE ==========");

const selectedEmployee = getEmployeeById(102);

if (selectedEmployee) {
    console.log("Employee found:", selectedEmployee);
} else {
    console.log("Employee not found.");
}


// ========================================
// TASK 3: FORMAT EMPLOYEE NAMES
// ========================================

console.log("\n========== FORMATTED NAMES ==========");

employees.forEach(function (employee) {
    console.log(formatEmployeeName(employee.name));
});


// ========================================
// TASK 4: CALCULATE ANNUAL SALARIES
// ========================================

console.log("\n========== ANNUAL SALARIES ==========");

employees.forEach(function (employee) {
    const annualSalary = calculateAnnualSalary(
        employee.monthlySalary
    );

    console.log(
        employee.name,
        "Annual Salary:",
        formatSalary(annualSalary)
    );
});


// ========================================
// TASK 5: SEARCH EMPLOYEES
// ========================================

console.log("\n========== SEARCH EMPLOYEES ==========");

const searchResults = searchEmployees(employees, "React");

console.log("Search results:", searchResults);


// ========================================
// TASK 6: SORT EMPLOYEES BY SALARY
// ========================================

console.log("\n========== SALARY: LOW TO HIGH ==========");

const sortedEmployees = sortEmployeesBySalary(
    employees,
    "ascending"
);

sortedEmployees.forEach(function (employee) {
    console.log(
        employee.name,
        formatSalary(employee.monthlySalary)
    );
});


// ========================================
// TASK 7: FILTER BY DEPARTMENT
// ========================================

console.log("\n========== FRONTEND EMPLOYEES ==========");

const frontendEmployees = getEmployeesByDepartment("Frontend");

frontendEmployees.forEach(function (employee) {
    console.log(employee.name, "-", employee.role);
});


// ========================================
// TASK 8: VALIDATE EMPLOYEE DATA
// ========================================

console.log("\n========== VALIDATE EMPLOYEE ==========");

const newEmployee = {
    id: 105,
    name: "Kiran Patel",
    department: "Backend",
    role: "Node.js Developer",
    monthlySalary: 42000,
    experience: 2
};

const validationResult = validateEmployee(newEmployee);

console.log("Is employee valid?", validationResult);


// ========================================
// TASK 9: ADD AN EMPLOYEE
// ========================================

console.log("\n========== ADD EMPLOYEE ==========");

const employeeToAdd = {
    id: generateEmployeeId(),
    name: "Kiran Patel",
    department: "Backend",
    role: "Node.js Developer",
    monthlySalary: 42000,
    experience: 2
};

const isValidEmployee = validateEmployee(employeeToAdd);

if (isValidEmployee) {
    addEmployee(employeeToAdd);
} else {
    console.log("Employee validation failed.");
}


// ========================================
// TASK 10: UPDATE AN EMPLOYEE
// ========================================

console.log("\n========== UPDATE EMPLOYEE ==========");

updateEmployee(101, {
    role: "Senior React Developer",
    monthlySalary: 60000
});

console.log("Updated employee:", getEmployeeById(101));


// ========================================
// TASK 11: DISPLAY EMPLOYEE SUMMARY
// ========================================

console.log("\n========== EMPLOYEE SUMMARY ==========");

const employeeForSummary = getEmployeeById(101);

if (employeeForSummary) {
    console.log(getEmployeeSummary(employeeForSummary));
}


// ========================================
// TASK 12: DELETE AN EMPLOYEE
// ========================================

console.log("\n========== DELETE EMPLOYEE ==========");

deleteEmployee(103);

console.log("Remaining employees:", getAllEmployees());


// ========================================
// TASK 13: DISPLAY FINAL EMPLOYEE COUNT
// ========================================

console.log("\n========== FINAL RESULT ==========");

console.log("Total employees:", employees.length);