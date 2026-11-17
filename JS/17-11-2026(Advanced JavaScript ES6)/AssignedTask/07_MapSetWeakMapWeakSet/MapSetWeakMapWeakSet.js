const Output = document.getElementById("Output")
function Print(Title, Value) {
    Output.textContent += Title + "\n" + Value + "\n\n"
}
function RunExamples() {
    Output.textContent = ""
    // MAP: stores key-value pairs. Keys can be any data type.
    const EmployeeMap = new Map()
    EmployeeMap.set(101, "Rahul")
    EmployeeMap.set(102, "Priya")
    EmployeeMap.set(103, "Kiran")
    Print("Map - Employee 101:", EmployeeMap.get(101))
    Print("Map - Size:", EmployeeMap.size)
    Print("Map - Has Employee 102:", EmployeeMap.has(102))
    EmployeeMap.delete(103)
    Print("Map - After Delete:", EmployeeMap.size)
    // SET: stores unique values.
    const EmployeeSkills = new Set()
    EmployeeSkills.add("JavaScript")
    EmployeeSkills.add("React")
    EmployeeSkills.add("Node")
    EmployeeSkills.add("React")
    Print("Set - Unique Skills:", [...EmployeeSkills].join(", "))
    Print("Set - Size:", EmployeeSkills.size)
    Print("Set - Has React:", EmployeeSkills.has("React"))
    // WEAKMAP: keys must be objects and are weakly referenced.
    const EmployeeDetails = new WeakMap()
    let EmployeeObject = {
        EmployeeId: 101
    }
    EmployeeDetails.set(EmployeeObject, {
        Salary: 50000,
        Department: "Frontend"
    })
    Print(
        "WeakMap - Employee Details:",
        JSON.stringify(EmployeeDetails.get(EmployeeObject))
    )
    Print("WeakMap - Has Employee:", EmployeeDetails.has(EmployeeObject))
    // WEAKSET: stores object references only.
    const ActiveEmployees = new WeakSet()
    const EmployeeOne = { Name: "Rahul" }
    const EmployeeTwo = { Name: "Priya" }
    ActiveEmployees.add(EmployeeOne)
    ActiveEmployees.add(EmployeeTwo)
    Print("WeakSet - Rahul Active:", ActiveEmployees.has(EmployeeOne))
    Print("WeakSet - Priya Active:", ActiveEmployees.has(EmployeeTwo))
    Print(
        "Important:",
        "WeakMap and WeakSet are not iterable and do not expose size."
    )
}
document.getElementById("RunButton").addEventListener("click", RunExamples)