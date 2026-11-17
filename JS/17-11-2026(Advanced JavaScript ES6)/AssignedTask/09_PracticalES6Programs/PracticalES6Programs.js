const Output = document.getElementById("Output")
function Print(Title, Value) {
    Output.textContent += Title + "\n" + Value + "\n\n"
}
function RunPrograms() {
    Output.textContent = ""
    const Employees = [
        { Id: 1, Name: "Rahul", Salary: 40000, Department: "Frontend" },
        { Id: 2, Name: "Priya", Salary: 55000, Department: "Backend" },
        { Id: 3, Name: "Kiran", Salary: 35000, Department: "Frontend" },
        { Id: 4, Name: "Anil", Salary: 60000, Department: "Testing" }
    ]
    // PROGRAM 1: Find employees earning above 40000.
    const HighSalaryEmployees = Employees.filter(
        ({ Salary }) => Salary > 40000
    )
    Print(
        "1. High Salary Employees:",
        HighSalaryEmployees.map(({ Name }) => Name).join(", ")
    )
    // PROGRAM 2: Calculate total salary.
    const TotalSalary = Employees.reduce(
        (Total, { Salary }) => Total + Salary,
        0
    )
    Print("2. Total Salary:", TotalSalary)
    // PROGRAM 3: Increase salary by 10% without modifying originals.
    const UpdatedEmployees = Employees.map(Employee => ({
        ...Employee,
        Salary: Employee.Salary * 1.10
    }))
    Print(
        "3. Updated Salaries:",
        UpdatedEmployees.map(Employee =>
            `${Employee.Name}: ${Employee.Salary.toFixed(2)}`
        ).join("\n")
    )
    // PROGRAM 4: Find an employee by ID.
    const FoundEmployee = Employees.find(({ Id }) => Id === 3)
    Print("4. Employee with ID 3:", FoundEmployee.Name)
    // PROGRAM 5: Get unique departments.
    const Departments = [...new Set(
        Employees.map(({ Department }) => Department)
    )]
    Print("5. Unique Departments:", Departments.join(", "))
    // PROGRAM 6: Group employees by department.
    const GroupedEmployees = Object.groupBy(
        Employees,
        Employee => Employee.Department
    )
    Print(
        "6. Department Grouping:",
        JSON.stringify(GroupedEmployees, null, 2)
    )
    // PROGRAM 7: Destructure the first employee.
    const [FirstEmployee, ...RemainingEmployees] = Employees
    Print("7. First Employee:", FirstEmployee.Name)
    Print("Remaining Employees:", RemainingEmployees.length)
    // PROGRAM 8: Use rest parameters to calculate an average.
    const CalculateAverage = (...Numbers) => {
        if (Numbers.length === 0) return 0
        return Total / Numbers.length
    }
    Print("8. Average Marks:", CalculateAverage(80, 90, 75, 85))
    // PROGRAM 9: Check employee salary conditions.
    Print(
        "9. All Employees Have Salary:",
        Employees.every(({ Salary }) => Salary > 0)
    )
    Print(
        "10. Any Employee Above 50000:",
        Employees.some(({ Salary }) => Salary > 50000)
    )
}
document.getElementById("RunButton").addEventListener("click", RunPrograms)