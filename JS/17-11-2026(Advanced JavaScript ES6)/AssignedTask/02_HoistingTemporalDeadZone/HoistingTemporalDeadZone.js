const Output = document.getElementById("Output")
function Print(Title, Value) {
    Output.textContent += Title + "\n" + Value + "\n\n"
}
// Function declaration can be called before its definition.
function HoistedFunction() {
    return "Function declaration is available before its definition."
}
// var is hoisted and initialized with undefined.
var HoistedVariable = "Assigned after declaration"
// let and const are hoisted but remain in the Temporal Dead Zone
// until their declarations are evaluated.
// This function demonstrates hoisting safely.
function RunExamples() {
    Output.textContent = ""
    Print("Function Hoisting:", HoistedFunction())
    Print("var Variable:", HoistedVariable)
    // Demonstrate TDZ without stopping the entire program.
    try {
        // Accessing let before its declaration causes ReferenceError.
        console.log(BlockVariable)
        let BlockVariable = "Available after declaration"
    } catch (Error) {
        Print("let Temporal Dead Zone:", Error.name)
    }
    try {
        console.log(ConstantValue)
        const ConstantValue = 100
    } catch (Error) {
        Print("const Temporal Dead Zone:", Error.name)
    }
    Print("Important:", "let and const cannot be accessed before initialization.")
}
document.getElementById("RunButton").addEventListener("click", RunExamples)