
/*
    EMPLOYEE DATA MANAGEMENT SYSTEM

    Advanced JavaScript and ES6+ concepts used:
    1. const and let
    2. Objects and arrays
    3. Arrow functions
    4. Template literals
    5. Destructuring
    6. Spread operator
    7. Rest-style array methods
    8. map()
    9. filter()
    10. reduce()
    11. find()
    12. some()
    13. every()
    14. Set
    15. Event handling
    16. DOM manipulation
*/

// Initial employee data for demonstration.
let Employees = [
    {
        EmployeeId: "EMP101",
        EmployeeName: "Rahul",
        Department: "Frontend",
        Role: "React Developer",
        Salary: 45000,
        Experience: 2
    },
    {
        EmployeeId: "EMP102",
        EmployeeName: "Priya",
        Department: "Backend",
        Role: "Node Developer",
        Salary: 55000,
        Experience: 3
    },
    {
        EmployeeId: "EMP103",
        EmployeeName: "Kiran",
        Department: "Testing",
        Role: "QA Engineer",
        Salary: 40000,
        Experience: 2
    },
    {
        EmployeeId: "EMP104",
        EmployeeName: "Anil",
        Department: "Frontend",
        Role: "UI Developer",
        Salary: 50000,
        Experience: 4
    },
    {
        EmployeeId: "EMP105",
        EmployeeName: "Suma",
        Department: "HR",
        Role: "HR Executive",
        Salary: 35000,
        Experience: 1
    }
]
// Select HTML elements.
const EmployeeForm = document.getElementById("EmployeeForm")
const EmployeeTableBody = document.getElementById("EmployeeTableBody")
const EmployeeIdInput = document.getElementById("EmployeeId")
const EmployeeNameInput = document.getElementById("EmployeeName")
const EmployeeDepartmentInput = document.getElementById("EmployeeDepartment")
const EmployeeRoleInput = document.getElementById("EmployeeRole")
const EmployeeSalaryInput = document.getElementById("EmployeeSalary")
const EmployeeExperienceInput = document.getElementById("EmployeeExperience")
const Message = document.getElementById("Message")
const EmptyMessage = document.getElementById("EmptyMessage")
const TotalEmployees = document.getElementById("TotalEmployees")
const TotalSalary = document.getElementById("TotalSalary")
const AverageSalary = document.getElementById("AverageSalary")
const SearchInput = document.getElementById("SearchInput")
const DepartmentFilter = document.getElementById("DepartmentFilter")
const SortFilter = document.getElementById("SortFilter")
const IncrementEmployee = document.getElementById("IncrementEmployee")
const IncrementPercentage = document.getElementById("IncrementPercentage")
const IncrementResult = document.getElementById("IncrementResult")
const DepartmentGroups = document.getElementById("DepartmentGroups")

// 1. Display a message to the user.
function DisplayMessage(Text, Type) {
    Message.textContent = Text
    Message.className = Type
}

// 2. Format salary as Indian currency.
function FormatSalary(Salary) {
    return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0
    }).format(Salary)
}

// 3. Register a new employee.
function AddEmployee(Event) {
    Event.preventDefault()
    // Read and convert form values.
    const EmployeeId = EmployeeIdInput.value.trim()
    const EmployeeName = EmployeeNameInput.value.trim()
    const Department = EmployeeDepartmentInput.value
    const Role = EmployeeRoleInput.value.trim()
    const Salary = Number(EmployeeSalaryInput.value)
    const Experience = Number(EmployeeExperienceInput.value)
    // Validate text fields and numeric fields.
    if (!EmployeeId || !EmployeeName || !Department || !Role) {
        DisplayMessage("Please complete all employee details.", "error")
        return
    }
    if (
        !Number.isFinite(Salary) ||
        Salary <= 0 ||
        !Number.isFinite(Experience) ||
        Experience < 0
    ) {
        DisplayMessage("Enter valid salary and experience values.", "error")
        return
    }
    // Check for duplicate employee IDs.
    const ExistingEmployee = Employees.find(
        ({ EmployeeId: ExistingId }) =>
            ExistingId.toLowerCase() === EmployeeId.toLowerCase()
    )
    if (ExistingEmployee) {
        DisplayMessage("Employee ID already exists.", "error")
        return
    }
    // Create the new employee object.
    const NewEmployee = {
        EmployeeId,
        EmployeeName,
        Department,
        Role,
        Salary,
        Experience
    }
    // Spread operator creates a new array with the new employee.
    Employees = [...Employees, NewEmployee]
    EmployeeForm.reset()
    DisplayMessage("Employee registered successfully.", "success")
    RefreshDashboard()
}

// 4. Display employee records.
function DisplayEmployees(EmployeeList) {
    EmployeeTableBody.innerHTML = ""
    EmptyMessage.style.display =
        EmployeeList.length === 0 ? "block" : "none"
    EmployeeList.forEach(({
        EmployeeId,
        EmployeeName,
        Department,
        Role,
        Salary,
        Experience
    }) => {
        // Create a row and cells using DOM methods.
        const Row = document.createElement("tr")
        const Values = [
            EmployeeId,
            EmployeeName,
            Department,
            Role,
            FormatSalary(Salary),
            Experience + " years"
        ]
        Values.forEach(Value => {
            const Cell = document.createElement("td")
            Cell.textContent = Value
            Row.appendChild(Cell)
        })
        // Create the delete action.
        const ActionCell = document.createElement("td")
        const DeleteButton = document.createElement("button")
        DeleteButton.textContent = "Delete"
        DeleteButton.className = "delete-button"
        DeleteButton.addEventListener("click", () => {
            DeleteEmployee(EmployeeId)
        })
        ActionCell.appendChild(DeleteButton)
        Row.appendChild(ActionCell)
        EmployeeTableBody.appendChild(Row)
    })
}

// 5. Search, filter and sort employee records.
function GetFilteredEmployees() {
    const SearchText = SearchInput.value.trim().toLowerCase()
    const SelectedDepartment = DepartmentFilter.value
    const SelectedSort = SortFilter.value
    // filter() returns employees matching both search and department.
    let Result = Employees.filter(Employee => {
        const MatchesSearch =
            Employee.EmployeeName.toLowerCase().includes(SearchText) ||
            Employee.EmployeeId.toLowerCase().includes(SearchText)
        const MatchesDepartment =
            SelectedDepartment === "All" ||
            Employee.Department === SelectedDepartment
        return MatchesSearch && MatchesDepartment
    })
    // Sort a copied result so the original array order is not changed.
    if (SelectedSort === "lowToHigh") {
        Result = [...Result].sort(
            (First, Second) => First.Salary - Second.Salary
        )
    }
    if (SelectedSort === "highToLow") {
        Result = [...Result].sort(
            (First, Second) => Second.Salary - First.Salary
        )
    }
    return Result
}

// 6. Update employee table based on current controls.
function ApplyFilters() {
    const FilteredEmployees = GetFilteredEmployees()
    DisplayEmployees(FilteredEmployees)
}

// 7. Calculate employee statistics using reduce().
function CalculateSalaryStatistics() {
    const Total = Employees.reduce(
        (Sum, { Salary }) => Sum + Salary,
        0
    )
    const Count = Employees.length
    const Average = Count > 0 ? Total / Count : 0
    TotalEmployees.textContent = Count
    TotalSalary.textContent = FormatSalary(Total)
    AverageSalary.textContent = FormatSalary(Average)
}

// 8. Populate employee dropdown for salary increment.
function PopulateEmployeeDropdown() {
    IncrementEmployee.innerHTML =
        '<option value="">Select employee</option>'
    Employees.forEach(({ EmployeeId, EmployeeName }) => {
        const Option = document.createElement("option")
        Option.value = EmployeeId
        Option.textContent = `${EmployeeId} - ${EmployeeName}`
        IncrementEmployee.appendChild(Option)
    })
}

// 9. Calculate revised salary.
function CalculateSalaryIncrement() {
    const SelectedId = IncrementEmployee.value
    const Percentage = Number(IncrementPercentage.value)
    if (!SelectedId) {
        IncrementResult.textContent = "Please select an employee."
        return
    }
    if (
        IncrementPercentage.value.trim() === "" ||
        !Number.isFinite(Percentage) ||
        Percentage < 0 ||
        Percentage > 100
    ) {
        IncrementResult.textContent =
            "Enter an increment percentage between 0 and 100."
        return
    }
    // Find the selected employee.
    const SelectedEmployee = Employees.find(
        ({ EmployeeId }) => EmployeeId === SelectedId
    )
    if (!SelectedEmployee) {
        IncrementResult.textContent = "Employee not found."
        return
    }
    const IncrementAmount =
        SelectedEmployee.Salary * (Percentage / 100)
    const RevisedSalary =
        SelectedEmployee.Salary + IncrementAmount
    IncrementResult.textContent =
        `${SelectedEmployee.EmployeeName}: Current Salary ${FormatSalary(SelectedEmployee.Salary)} | Increment ${FormatSalary(IncrementAmount)} | Revised Salary ${FormatSalary(RevisedSalary)}`
}

// 10. Group employees by department using reduce().
function GroupEmployeesByDepartment() {
    const Groups = Employees.reduce((DepartmentGroups, Employee) => {
        const { Department } = Employee
        if (!DepartmentGroups[Department]) {
            DepartmentGroups[Department] = []
        }
        DepartmentGroups[Department].push(Employee)
        return DepartmentGroups
    }, {})
    DepartmentGroups.innerHTML = ""
    const DepartmentNames = Object.keys(Groups)
    if (DepartmentNames.length === 0) {
        DepartmentGroups.textContent = "No department data available."
        return
    }
    DepartmentNames.forEach(Department => {
        const Group = Groups[Department]
        const Card = document.createElement("article")
        Card.className = "department-card"
        const Heading = document.createElement("h3")
        Heading.textContent = Department
        const Count = document.createElement("p")
        Count.textContent = `Employees: ${Group.length}`
        const Names = document.createElement("p")
        Names.textContent = Group.map(
            ({ EmployeeName }) => EmployeeName
        ).join(", ")
        const Salary = Group.reduce(
            (Total, { Salary }) => Total + Salary,
            0
        )
        const Total = document.createElement("p")
        Total.textContent = `Total Salary: ${FormatSalary(Salary)}`
        Card.append(Heading, Count, Names, Total)
        DepartmentGroups.appendChild(Card)
    })
}

// 11. Delete an employee.
function DeleteEmployee(EmployeeId) {
    // filter() creates a new array without the selected employee.
    Employees = Employees.filter(
        Employee => Employee.EmployeeId !== EmployeeId
    )
    DisplayMessage("Employee deleted successfully.", "success")
    RefreshDashboard()
}

// 12. Demonstrate some() and every().
function CheckEmployeeRecords() {
    const HasExperiencedEmployee = Employees.some(
        ({ Experience }) => Experience >= 5
    )
    const AllSalariesValid = Employees.every(
        ({ Salary }) => Salary > 0
    )
    console.log("Any employee with 5+ years:", HasExperiencedEmployee)
    console.log("All salaries are positive:", AllSalariesValid)
}

// 13. Refresh all dashboard sections.
function RefreshDashboard() {
    ApplyFilters()
    CalculateSalaryStatistics()
    PopulateEmployeeDropdown()
    GroupEmployeesByDepartment()
    CheckEmployeeRecords()
}

// 14. Register event listeners.
EmployeeForm.addEventListener("submit", AddEmployee)
SearchInput.addEventListener("input", ApplyFilters)
DepartmentFilter.addEventListener("change", ApplyFilters)
SortFilter.addEventListener("change", ApplyFilters)
document.getElementById("ResetFiltersButton").addEventListener("click", () => {
    SearchInput.value = ""
    DepartmentFilter.value = "All"
    SortFilter.value = "default"
    ApplyFilters()
})
document.getElementById("CalculateIncrementButton").addEventListener(
    "click",
    CalculateSalaryIncrement
)

// 15. Initial dashboard display.
RefreshDashboard()