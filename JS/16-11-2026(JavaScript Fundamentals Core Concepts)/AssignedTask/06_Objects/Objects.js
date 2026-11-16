// 1. CREATE AN OBJECT
let Employee = {
    EmployeeId: 101,
    EmployeeName: "Rahul",
    EmployeeAge: 25,
    EmployeeRole: "Frontend Developer",
    EmployeeSalary: 30000
}

// 2. ACCESS OBJECT PROPERTIES
// Dot notation
let EmployeeName = Employee.EmployeeName
// Bracket notation
let EmployeeSalary = Employee["EmployeeSalary"]

// 3. UPDATE OBJECT PROPERTY
Employee.EmployeeSalary = 40000

// 4. ADD NEW PROPERTY
Employee.Department = "IT"

// 5. DELETE PROPERTY
delete Employee.EmployeeAge

// 6. OBJECT KEYS
// Returns all property names.
let EmployeeKeys = Object.keys(Employee)

// 7. OBJECT VALUES
// Returns all property values.
let EmployeeValues = Object.values(Employee)

// 8. OBJECT ENTRIES
// Returns property names and values.
let EmployeeEntries = Object.entries(Employee)

// 9. FOR-IN LOOP
// Iterates through object properties.
function DisplayEmployeeDetails() {
    let Details = []
    for (let Key in Employee) {
        Details.push(`${Key}: ${Employee[Key]}`)
    }
    return Details
}

// 10. UPDATE USING A FUNCTION
function UpdateSalary(EmployeeObject, NewSalary) {
    EmployeeObject.EmployeeSalary = NewSalary
    return EmployeeObject
}

// 11. DISPLAY OUTPUT
function RunExample() {
    let Output = [
        "Employee Name: " + EmployeeName,
        "Original Salary: " + EmployeeSalary,
        "Updated Salary: " + Employee.EmployeeSalary,
        "Department: " + Employee.Department,
        "Object Keys: " + EmployeeKeys,
        "Object Values: " + EmployeeValues,
        "Object Entries: " + JSON.stringify(EmployeeEntries),
        "\nEmployee Details:",
        ...DisplayEmployeeDetails()
    ]
    document.getElementById("Output").textContent = Output.join("\n")
    console.log(Employee)
}
document.getElementById("RunButton").addEventListener("click", RunExample)