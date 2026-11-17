const Output = document.getElementById("Output")
function Print(Title, Value) {
    Output.textContent += Title + "\n" + Value + "\n\n"
}
function RunExamples() {
    Output.textContent = ""
    const Employees = [
        { Name: "Rahul", Salary: 40000, Department: "Frontend" },
        { Name: "Priya", Salary: 55000, Department: "Backend" },
        { Name: "Kiran", Salary: 35000, Department: "Frontend" },
        { Name: "Anil", Salary: 60000, Department: "Testing" },
        { Name: "Suma", Salary: 50000, Department: "Backend" }
    ]
    // map(): transform each item into a new value.
    const EmployeeNames = Employees.map(Employee => Employee.Name)
    Print("1. map() - Employee Names:", EmployeeNames.join(", "))
    // filter(): return all employees matching a condition.
    const HighSalaryEmployees = Employees.filter(
        Employee => Employee.Salary >= 50000
    )
    Print(
        "2. filter() - Salary >= 50000:",
        HighSalaryEmployees.map(Employee => Employee.Name).join(", ")
    )
    // reduce(): calculate one accumulated result.
    const TotalSalary = Employees.reduce(
        (Total, Employee) => Total + Employee.Salary,
        0
    )
    Print("3. reduce() - Total Salary:", TotalSalary)
    // find(): return the first matching employee.
    const FoundEmployee = Employees.find(
        Employee => Employee.Department === "Backend"
    )
    Print("4. find() - First Backend Employee:", FoundEmployee.Name)
    // some(): check whether at least one item matches.
    const HasHighSalary = Employees.some(
        Employee => Employee.Salary > 55000
    )
    Print("5. some() - Salary above 55000:", HasHighSalary)
    // every(): check whether all items match.
    const AllHaveSalary = Employees.every(
        Employee => Employee.Salary > 0
    )
    Print("6. every() - All salaries are positive:", AllHaveSalary)
    // SORT: copy first, then sort numerically.
    const SortedEmployees = [...Employees].sort(
        (First, Second) => First.Salary - Second.Salary
    )
    Print(
        "7. Sorted Salaries:",
        SortedEmployees.map(Employee => Employee.Salary).join(", ")
    )
    // Department-wise grouping using reduce().
    const DepartmentGroups = Employees.reduce(
        (Groups, Employee) => {
            const Department = Employee.Department
            if (!Groups[Department]) {
                Groups[Department] = []
            }
            Groups[Department].push(Employee.Name)
            return Groups
        },
        {}
    )
    Print(
        "8. Department Groups:",
        JSON.stringify(DepartmentGroups, null, 2)
    )
}
document.getElementById("RunButton").addEventListener("click", RunExamples)