const Output = document.getElementById("Output")
function Print(Title, Value) {
    Output.textContent += Title + "\n" + Value + "\n\n"
}
// OBJECT METHOD: this refers to the object before the dot.
const Employee = {
    EmployeeName: "Rahul",
    Department: "Frontend",
    DisplayDetails: function() {
        return this.EmployeeName + " - " + this.Department
    }
}
// Regular function: this depends on how the function is called.
function DisplayName() {
    return this.EmployeeName
}
// Arrow function: does not create its own this.
// It uses this from its surrounding lexical scope.
const ArrowExample = {
    EmployeeName: "Priya",
    DisplayDetails: function() {
        const ShowName = () => this.EmployeeName
        return ShowName()
    }
}
// Function used for call, apply, and bind.
function IntroduceEmployee(City, Country) {
    return this.EmployeeName + " works in " + City + ", " + Country
}
function RunExamples() {
    Output.textContent = ""
    Print("Object Method this:", Employee.DisplayDetails())
    Print("Arrow Function this:", ArrowExample.DisplayDetails())
    // call(): arguments are passed individually.
    const CallResult = IntroduceEmployee.call(
        Employee,
        "Hyderabad",
        "India"
    )
    Print("call():", CallResult)
    // apply(): arguments are passed as an array.
    const ApplyResult = IntroduceEmployee.apply(
        Employee,
        ["Bengaluru", "India"]
    )
    Print("apply():", ApplyResult)
    // bind(): returns a new function with fixed this.
    const BoundFunction = IntroduceEmployee.bind(
        Employee,
        "Chennai",
        "India"
    )
    Print("bind():", BoundFunction())
    // call() can borrow a method from another object.
    const Manager = {
        EmployeeName: "Kiran"
    }
    Print(
        "Method Borrowing:",
        Employee.DisplayDetails.call(Manager)
    )
}
document.getElementById("RunButton").addEventListener("click", RunExamples)