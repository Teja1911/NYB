// EmployeeDataProcessing.js

// 1. Store employee information in an array of objects.
const employees = [
    { id: 101, name: "Rahul", department: "IT", salary: 50000 },
    { id: 102, name: "Priya", department: "HR", salary: 40000 },
    { id: 103, name: "Arjun", department: "IT", salary: 60000 },
    { id: 104, name: "Meena", department: "Finance", salary: 35000 },
    { id: 105, name: "Kiran", department: "HR", salary: 45000 }
];


// 2. Display all employees using a reusable function.
function displayEmployees(employeeList) {
    employeeList.forEach(({ id, name, department, salary }) => {
        console.log(`${id} | ${name} | ${department} | ₹${salary}`);
    });
}


// 3. Filter employees by department.
function filterByDepartment(employeeList, departmentName) {
    return employeeList.filter(
        (employee) => employee.department === departmentName
    );
}


// 4. Find an employee by ID.
function findEmployee(employeeList, employeeId) {
    return employeeList.find(
        (employee) => employee.id === employeeId
    );
}


// 5. Sort employees by salary, lowest to highest.
function sortBySalary(employeeList) {
    return [...employeeList].sort(
        (firstEmployee, secondEmployee) =>
            firstEmployee.salary - secondEmployee.salary
    );
}


// 6. Calculate total salary using reduce().
function calculateTotalSalary(employeeList) {
    return employeeList.reduce(
        (total, employee) => total + employee.salary,
        0
    );
}


// 7. Calculate average salary.
function calculateAverageSalary(employeeList) {
    if (employeeList.length === 0) {
        return 0;
    }

    return calculateTotalSalary(employeeList) / employeeList.length;
}


// 8. Find the highest- and lowest-paid employees.
function findSalaryExtremes(employeeList) {
    if (employeeList.length === 0) {
        return { highestPaid: null, lowestPaid: null };
    }

    const sortedEmployees = sortBySalary(employeeList);

    return {
        lowestPaid: sortedEmployees[0],
        highestPaid: sortedEmployees[sortedEmployees.length - 1]
    };
}


// 9. Use the spread operator to create an updated employee.
const updatedEmployee = {
    ...employees[0],
    salary: 55000
};

console.log("UPDATED EMPLOYEE");
console.log(updatedEmployee);


// 10. Display the employee list.
console.log("\nALL EMPLOYEES");
displayEmployees(employees);


// 11. Filter employees by department.
console.log("\nIT DEPARTMENT");
displayEmployees(filterByDepartment(employees, "IT"));


// 12. Find an employee by ID.
console.log("\nSEARCH EMPLOYEE");

const searchedEmployee = findEmployee(employees, 103);

console.log(searchedEmployee ?? "Employee not found");


// 13. Display employees sorted by salary.
console.log("\nSALARY: LOWEST TO HIGHEST");
displayEmployees(sortBySalary(employees));


// 14. Calculate total and average salary.
console.log("\nSALARY SUMMARY");

console.log("Total Salary: ₹" + calculateTotalSalary(employees));
console.log("Average Salary: ₹" + calculateAverageSalary(employees).toFixed(2));


// 15. Display the highest- and lowest-paid employees.
console.log("\nHIGHEST AND LOWEST SALARIES");

const { highestPaid, lowestPaid } = findSalaryExtremes(employees);

console.log("Highest Paid:", highestPaid);
console.log("Lowest Paid:", lowestPaid);