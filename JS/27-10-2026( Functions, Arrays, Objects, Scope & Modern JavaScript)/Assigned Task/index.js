// JAVASCRIPT FUNCTIONS, ARRAYS, OBJECTS AND MODERN JS

// 1. FUNCTION DECLARATION
function calculateAnnualSalary(monthlySalary) {
    return monthlySalary * 12;
}
console.log("Annual Salary:", calculateAnnualSalary(30000));

// 2. FUNCTION EXPRESSION
const calculateBonus = function (monthlySalary) {
    return monthlySalary * 0.10;
};
console.log("Bonus:", calculateBonus(30000));

// 3. ARROW FUNCTION
const calculateAllowance = (monthlySalary) => monthlySalary * 0.05;
console.log("Allowance:", calculateAllowance(30000));

// 4. PARAMETERS, ARGUMENTS AND DEFAULT PARAMETERS
function calculateTotalSalary(basicSalary, allowance = 2000) {
    return basicSalary + allowance;
}
console.log("Total Salary:", calculateTotalSalary(30000, 5000));
console.log("Default Allowance:", calculateTotalSalary(30000));

// 5. REST PARAMETERS
function calculateTotalExpenses(...expenseAmounts) {
    return expenseAmounts.reduce(
        (runningTotal, currentExpense) => runningTotal + currentExpense,
        0
    );
}
console.log("Total Expenses:", calculateTotalExpenses(1000, 2000, 500));

// 6. CALLBACK FUNCTION
function processEmployeeName(employeeName, callbackFunction) {
    return callbackFunction(employeeName);
}
function formatEmployeeName(employeeName) {
    return `Employee: ${employeeName}`;
}
console.log(processEmployeeName("Rahul", formatEmployeeName));

// 7. HIGHER-ORDER FUNCTION
function applySalaryOperation(monthlySalary, salaryOperation) {
    return salaryOperation(monthlySalary);
}
const doubleSalary = (monthlySalary) => monthlySalary * 2;
console.log("Doubled Salary:", applySalaryOperation(30000, doubleSalary));

// 8. IIFE
(function () {
    const applicationStatus = "Application Started";
    console.log(applicationStatus);
})();

// 9. PURE FUNCTION
function calculateDiscount(price, discountPercentage) {
    return price - (price * discountPercentage / 100);
}
console.log("Discounted Price:", calculateDiscount(1000, 10));

// 10. FUNCTION SCOPE AND LEXICAL SCOPE
const companyName = "ABC Technologies";
function displayCompanyInformation() {
    const departmentName = "Engineering";
    function displayDepartmentInformation() {
        console.log("Company:", companyName);
        console.log("Department:", departmentName);
    }
    displayDepartmentInformation();
}
displayCompanyInformation();

// 11. CLOSURE
function createEmployeeIdGenerator() {
    let nextEmployeeId = 1001;
    return function () {
        return nextEmployeeId++;
    };
}
const generateEmployeeId = createEmployeeIdGenerator();
console.log("Generated ID:", generateEmployeeId());
console.log("Generated ID:", generateEmployeeId());

// ARRAYS

// 12. CREATE AND ACCESS ARRAYS
const employeeNames = ["Rahul", "Priya", "Arjun"];
console.log("First Employee:", employeeNames[0]);
console.log("Employee Count:", employeeNames.length);

// 13. ADD AND REMOVE ELEMENTS
const departmentNames = ["HR", "IT"];
departmentNames.push("Sales");
departmentNames.pop();
departmentNames.unshift("Finance");
departmentNames.shift();
console.log("Departments:", departmentNames);

// 14. SLICE AND SPLICE
const originalScores = [10, 20, 30, 40, 50];
console.log("Slice:", originalScores.slice(1, 4));
const mutableScores = [...originalScores];
mutableScores.splice(1, 2, 25);
console.log("Splice:", mutableScores);


// 15. CONCAT, INCLUDES AND INDEXOF
const frontendSkills = ["HTML", "CSS", "JavaScript"];
const backendSkills = ["Node.js", "SQL"];
const fullStackSkills = frontendSkills.concat(backendSkills);
console.log("Combined Skills:", fullStackSkills);
console.log("Has JavaScript:", fullStackSkills.includes("JavaScript"));
console.log("CSS Index:", fullStackSkills.indexOf("CSS"));

// 16. MAP
const monthlySalaries = [30000, 40000, 50000];
const annualSalaries = monthlySalaries.map(
    (monthlySalary) => monthlySalary * 12
);
console.log("Annual Salaries:", annualSalaries);

// 17. FILTER
const eligibleSalaries = monthlySalaries.filter(
    (monthlySalary) => monthlySalary >= 40000
);
console.log("Eligible Salaries:", eligibleSalaries);

// 18. REDUCE
const totalMonthlySalary = monthlySalaries.reduce(
    (runningTotal, monthlySalary) => runningTotal + monthlySalary,
    0
);
console.log("Total Monthly Salary:", totalMonthlySalary);

// 19. FIND AND FINDINDEX
const firstHighSalary = monthlySalaries.find(
    (monthlySalary) => monthlySalary >= 40000
);
const highSalaryIndex = monthlySalaries.findIndex(
    (monthlySalary) => monthlySalary >= 40000
);
console.log("First High Salary:", firstHighSalary);
console.log("High Salary Index:", highSalaryIndex);

// 20. SOME AND EVERY
console.log( "Any High Salary:" ,monthlySalaries.some((monthlySalary) => monthlySalary >= 50000));
console.log( "All Salaries Positive:", monthlySalaries.every((monthlySalary) => monthlySalary > 0));

// 21. SORT
const salaryAmounts = [50000, 25000, 70000, 40000];
const sortedSalaries = [...salaryAmounts].sort(
    (firstSalary, secondSalary) => firstSalary - secondSalary
);
console.log("Sorted Salaries:", sortedSalaries);

// 22. FOREACH
employeeNames.forEach((employeeName) => {
    console.log("Employee Name:", employeeName);
});

// OBJECTS

// 23. OBJECT, PROPERTIES AND METHODS
const employeeProfile = {
    id: 101,
    name: "Rahul",
    department: "IT",
    salary: 40000,
    displayDetails() {
        console.log(this.name, this.department, this.salary);
    }
};
employeeProfile.displayDetails();

// 24. NESTED OBJECTS
const employeeAddress = {
    city: "Hyderabad",
    address: {
        area: "Madhapur",
        pincode: 500081
    }
};
console.log("Employee Area:", employeeAddress.address.area);

// 25. OBJECT DESTRUCTURING
const {name: extractedEmployeeName,salary: extractedMonthlySalary} = employeeProfile;
console.log(extractedEmployeeName, extractedMonthlySalary);

// 26. ARRAY DESTRUCTURING
const employeeTechnologies = ["JavaScript", "React", "Node.js"];
const [primaryTechnology, secondaryTechnology] = employeeTechnologies;
console.log(primaryTechnology, secondaryTechnology);

// 27. SPREAD OPERATOR
const updatedEmployeeProfile = {...employeeProfile,salary: 45000};
console.log("Updated Employee:", updatedEmployeeProfile);

// 28. REST OPERATOR
function displaySkills(primarySkill, ...additionalSkills) {
    console.log("Primary Skill:", primarySkill);
    console.log("Additional Skills:", additionalSkills);
}
displaySkills("JavaScript", "React", "Node.js", "SQL");

// 29. COMPUTED PROPERTY
const selectedPropertyName = "department";
const dynamicEmployee = {name: "Priya",[selectedPropertyName]: "Finance"};
console.log("Dynamic Department:", dynamicEmployee.department);

// 30. OBJECT KEYS, VALUES AND ENTRIES
console.log("Keys:", Object.keys(employeeProfile));
console.log("Values:", Object.values(employeeProfile));
console.log("Entries:", Object.entries(employeeProfile));

// MODERN JAVASCRIPT

// 31. TEMPLATE LITERALS
console.log(`${employeeProfile.name} earns ₹${employeeProfile.salary} per month.`);

// 32. OPTIONAL CHAINING
const employeeContact = {name: "Arjun"};
console.log("City:", employeeContact.address?.city);

// 33. NULLISH COALESCING
const employeeBonus = null;
const finalBonus = employeeBonus ?? 0;
console.log("Final Bonus:", finalBonus);

// 34. ENHANCED OBJECT LITERALS
const employeeName = "Kiran";
const employeeDepartment = "Engineering";
const employeeSummary = {
    employeeName,
    employeeDepartment,
    displaySummary() {
        console.log(`${this.employeeName} works in ${this.employeeDepartment}`);
    }
};
employeeSummary.displaySummary();

// 35. REUSABLE UTILITY FUNCTIONS
function findEmployeeById(employeeList, searchEmployeeId) {
    return employeeList.find(
        (employeeRecord) => employeeRecord.id === searchEmployeeId
    );
}
function filterEmployeesByDepartment(employeeList, searchDepartment) {
    return employeeList.filter(
        (employeeRecord) => employeeRecord.department === searchDepartment
    );
}
function calculateAverageSalary(employeeList) {
    if (employeeList.length === 0) {
        return 0;
    }
    const combinedSalary = employeeList.reduce(
        (runningTotal, employeeRecord) => runningTotal + employeeRecord.salary,
        0
    );
    return combinedSalary / employeeList.length;
}
const practiceEmployees = [
    { id: 201, name: "Asha", department: "IT", salary: 50000 },
    { id: 202, name: "Ravi", department: "HR", salary: 40000 },
    { id: 203, name: "Meena", department: "IT", salary: 60000 }
];
console.log("Found Employee:",findEmployeeById(practiceEmployees, 202));
console.log("IT Employees:",filterEmployeesByDepartment(practiceEmployees, "IT"));
console.log("Average Salary:",calculateAverageSalary(practiceEmployees));

