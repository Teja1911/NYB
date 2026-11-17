const Output = document.getElementById("Output")
function Print(Title, Value) {
    Output.textContent += Title + "\n" + Value + "\n\n"
}
function RunExamples() {
    Output.textContent = ""
    // ARRAY DESTRUCTURING.
    const Subjects = ["JavaScript", "React", "Node"]
    const [FirstSubject, SecondSubject, ThirdSubject] = Subjects
    Print("First Subject:", FirstSubject)
    Print("Second Subject:", SecondSubject)
    Print("Third Subject:", ThirdSubject)
    // OBJECT DESTRUCTURING.
    const Employee = {
        EmployeeName: "Rahul",
        Salary: 45000,
        Department: "Frontend"
    }
    const {
        EmployeeName,
        Salary,
        Department
    } = Employee
    Print("Employee Name:", EmployeeName)
    Print("Salary:", Salary)
    Print("Department:", Department)
    // SPREAD OPERATOR: expands array elements.
    const FirstArray = [10, 20, 30]
    const SecondArray = [40, 50, 60]
    const CombinedArray = [...FirstArray, ...SecondArray]
    Print("Combined Array:", CombinedArray.join(", "))
    // Spread creates a shallow copy of an object.
    const UpdatedEmployee = {
        ...Employee,
        Salary: 55000
    }
    Print("Original Salary:", Employee.Salary)
    Print("Updated Salary:", UpdatedEmployee.Salary)
    // REST PARAMETER: collects remaining arguments into an array.
    function CalculateTotal(...Numbers) {
        return Numbers.reduce(function(Total, Number) {
            return Total + Number
        }, 0)
    }
    Print("Rest Parameter Total:", CalculateTotal(10, 20, 30, 40))
    // DEFAULT PARAMETERS.
    function WelcomeEmployee(Name = "Guest") {
        return "Welcome " + Name
    }
    Print("Default Parameter:", WelcomeEmployee())
    Print("Provided Parameter:", WelcomeEmployee("Priya"))
    // TEMPLATE LITERALS.
    const Name = "Kiran";
    const Message = `Welcome ${Name}, to Advanced JavaScript!`
    Print("Template Literal:", Message)
}
document.getElementById("RunButton").addEventListener("click", RunExamples)