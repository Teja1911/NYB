// Import named exports from MathOperations.js.
import { AddNumbers, SubtractNumbers, MultiplyNumbers } from "./MathOperations.js"
// Import both named and default exports.
import DisplayEmployee, { Employee } from "./EmployeeDetails.js"
const Output = document.getElementById("Output")
function Print(Title, Value) {
    Output.textContent += Title + "\n" + Value + "\n\n"
}
function RunExamples() {
    Output.textContent = ""
    Print("Addition:", AddNumbers(20, 10))
    Print("Subtraction:", SubtractNumbers(20, 10))
    Print("Multiplication:", MultiplyNumbers(20, 10))
    Print("Employee Object:", JSON.stringify(Employee, null, 2))
    Print("Default Export:", DisplayEmployee(Employee))
}
RunExamples()