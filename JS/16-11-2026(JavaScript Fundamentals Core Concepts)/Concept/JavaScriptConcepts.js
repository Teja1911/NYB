
/*
    JAVASCRIPT FUNDAMENTALS - PRACTICAL CONCEPTS

    Topics covered:
    1. Variables
    2. Data types
    3. Type conversion
    4. Operators
    5. Conditional statements
    6. Loops
    7. Functions
    8. Arrays
    9. Objects
    10. String methods
    11. Number methods
*/


// Select HTML elements.
const RunConceptsButton = document.getElementById("RunConceptsButton");
const ClearOutputButton = document.getElementById("ClearOutputButton");
const ConceptOutput = document.getElementById("ConceptOutput");


// Display output on the webpage.
function PrintOutput(Title, Value) {

    ConceptOutput.textContent +=
        Title + "\n" + String(Value) + "\n\n";
}


// Main function to execute all demonstrations.
function RunJavaScriptConcepts() {

    // Clear previous output.
    ConceptOutput.textContent = "";

    // ------------------------------------
    // 1. VARIABLES
    // ------------------------------------

    PrintOutput("1. VARIABLES", "var, let and const");

    var StudentName = "Rahul";

    let StudentAge = 22;

    const CollegeName = "ABC College";

    PrintOutput("Student Name:", StudentName);
    PrintOutput("Student Age:", StudentAge);
    PrintOutput("College:", CollegeName);


    // ------------------------------------
    // 2. DATA TYPES
    // ------------------------------------

    PrintOutput("2. DATA TYPES", "Different JavaScript data types");

    let Name = "Priya";
    let Age = 23;
    let IsSelected = true;
    let Address;
    let Marks = null;

    PrintOutput("String:", typeof Name);
    PrintOutput("Number:", typeof Age);
    PrintOutput("Boolean:", typeof IsSelected);
    PrintOutput("Undefined:", typeof Address);
    PrintOutput("Null:", typeof Marks);


    // ------------------------------------
    // 3. TYPE CONVERSION
    // ------------------------------------

    PrintOutput("3. TYPE CONVERSION", "Converting one type into another");

    let NumberValue = "100";

    let ConvertedNumber = Number(NumberValue);

    PrintOutput("Original Value:", NumberValue);
    PrintOutput("Converted Value:", ConvertedNumber);
    PrintOutput("Converted Type:", typeof ConvertedNumber);


    // ------------------------------------
    // 4. OPERATORS
    // ------------------------------------

    PrintOutput("4. OPERATORS", "Arithmetic and comparison operations");

    let FirstNumber = 20;
    let SecondNumber = 10;

    PrintOutput("Addition:", FirstNumber + SecondNumber);
    PrintOutput("Subtraction:", FirstNumber - SecondNumber);
    PrintOutput("Multiplication:", FirstNumber * SecondNumber);
    PrintOutput("Division:", FirstNumber / SecondNumber);
    PrintOutput("Remainder:", FirstNumber % SecondNumber);
    PrintOutput("Greater Than:", FirstNumber > SecondNumber);
    PrintOutput("Strict Equality:", FirstNumber === SecondNumber);


    // ------------------------------------
    // 5. CONDITIONAL STATEMENTS
    // ------------------------------------

    PrintOutput("5. CONDITIONAL STATEMENTS", "Grade calculation");

    let StudentMarks = 85;
    let Grade;

    if (StudentMarks >= 90) {
        Grade = "A+";
    }
    else if (StudentMarks >= 80) {
        Grade = "A";
    }
    else if (StudentMarks >= 70) {
        Grade = "B";
    }
    else {
        Grade = "C or below";
    }

    PrintOutput("Student Marks:", StudentMarks);
    PrintOutput("Student Grade:", Grade);


    // ------------------------------------
    // 6. LOOPS
    // ------------------------------------

    PrintOutput("6. LOOPS", "Printing numbers from 1 to 5");

    let LoopResult = "";

    for (let Number = 1; Number <= 5; Number++) {
        LoopResult += Number + " ";
    }

    PrintOutput("For Loop Output:", LoopResult);


    // ------------------------------------
    // 7. FUNCTIONS
    // ------------------------------------

    PrintOutput("7. FUNCTIONS", "Function examples");

    function AddNumbers(A, B) {
        return A + B;
    }

    const MultiplyNumbers = function(A, B) {
        return A * B;
    };

    const SquareNumber = (Number) => Number * Number;

    PrintOutput("Function Declaration:", AddNumbers(10, 20));

    PrintOutput("Function Expression:", MultiplyNumbers(5, 4));

    PrintOutput("Arrow Function:", SquareNumber(6));


    // ------------------------------------
    // 8. ARRAYS
    // ------------------------------------

    PrintOutput("8. ARRAYS", "Working with arrays");

    const Students = ["Rahul", "Priya", "Kiran"];

    PrintOutput("Original Array:", Students.join(", "));

    Students.push("Anil");

    PrintOutput("After push():", Students.join(", "));

    const UppercaseStudents = Students.map(function(Student) {
        return Student.toUpperCase();
    });

    PrintOutput("Using map():", UppercaseStudents.join(", "));

    const FilteredStudents = Students.filter(function(Student) {
        return Student.length > 4;
    });

    PrintOutput("Using filter():", FilteredStudents.join(", "));


    // ------------------------------------
    // 9. OBJECTS
    // ------------------------------------

    PrintOutput("9. OBJECTS", "Working with object properties");

    const Employee = {
        EmployeeName: "Arun",
        EmployeeAge: 25,
        Designation: "Frontend Developer"
    };

    PrintOutput("Employee Name:", Employee.EmployeeName);

    PrintOutput("Employee Age:", Employee.EmployeeAge);

    PrintOutput("Designation:", Employee.Designation);


    // ------------------------------------
    // 10. STRING METHODS
    // ------------------------------------

    PrintOutput("10. STRING METHODS", "Working with strings");

    const Message = "  Hello JavaScript  ";

    PrintOutput("Original String:", Message);

    PrintOutput("Length:", Message.length);

    PrintOutput("Trim:", Message.trim());

    PrintOutput("Uppercase:", Message.toUpperCase());

    PrintOutput("Includes JavaScript:", Message.includes("JavaScript"));


    // ------------------------------------
    // 11. NUMBER METHODS
    // ------------------------------------

    PrintOutput("11. NUMBER METHODS", "Working with numbers");

    const Price = 99.567;

    PrintOutput("Original Price:", Price);

    PrintOutput("toFixed(2):", Price.toFixed(2));

    PrintOutput("Math.round():", Math.round(Price));

    PrintOutput("Math.floor():", Math.floor(Price));

    PrintOutput("Math.ceil():", Math.ceil(Price));


    // ------------------------------------
    // COMPLETION MESSAGE
    // ------------------------------------

    PrintOutput(
        "COMPLETED",
        "All JavaScript concept demonstrations executed successfully!"
    );

}


// Event listener to run the demonstrations.
RunConceptsButton.addEventListener("click", RunJavaScriptConcepts);


// Event listener to clear output.
ClearOutputButton.addEventListener("click", function() {

    ConceptOutput.textContent = "Your output will appear here...";

});
