const Output = document.getElementById("Output")
function Print(Title, Value) {
    Output.textContent += Title + "\n" + Value + "\n\n"
}
function RunExamples() {
    Output.textContent = ""
    // GLOBAL SCOPE: accessible throughout this script.
    const CompanyName = "NYB Infotech"
    function DisplayCompany() {
        Print("Global Scope:", CompanyName)
    }
    DisplayCompany()
    // FUNCTION SCOPE: this variable exists inside the function.
    function CheckFunctionScope() {
        var EmployeeName = "Rahul"
        Print("Function Scope:", EmployeeName)
    }
    CheckFunctionScope()
    // BLOCK SCOPE: let and const are restricted to the block.
    if (true) {
        let EmployeeAge = 25
        const Department = "Frontend"
        Print("Block Scope - Age:", EmployeeAge)
        Print("Block Scope - Department:", Department)
    }
    // The following would cause ReferenceError outside the block:
    // console.log(EmployeeAge);
    // EXECUTION CONTEXT AND CALL STACK.
    function FirstFunction() {
        Print("Call Stack:", "FirstFunction started")
        SecondFunction()
        Print("Call Stack:", "FirstFunction completed")
    }
    function SecondFunction() {
        Print("Call Stack:", "SecondFunction started")
        ThirdFunction()
        Print("Call Stack:", "SecondFunction completed")
    }
    function ThirdFunction() {
        Print("Call Stack:", "ThirdFunction executed")
    }
    FirstFunction()
}
document.getElementById("RunButton").addEventListener("click", RunExamples)