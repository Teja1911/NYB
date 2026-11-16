// 1. VARIABLE DECLARATIONS
// var: Can be reassigned and redeclared
var StudentName = "Rahul"
// let: Can be reassigned but cannot be redeclared
let StudentAge = 22
// const: Cannot be reassigned
const CollegeName = "Malla Reddy University"

// 2. DIFFERENT DATA TYPES
let CourseName = "JavaScript" // String
let StudentMarks = 85         // Number
let IsPassed = true           // Boolean
let StudentAddress            // Undefined
let StudentResult = null      // Null
let UniqueId = Symbol("StudentId") // Symbol
let BigValue = 123456789n          // BigInt

// 3. TYPEOF OPERATOR
console.log("Student Name:", StudentName)
console.log("Student Age:", StudentAge)
console.log("College:", CollegeName)
console.log("String Type:", typeof CourseName)
console.log("Number Type:", typeof StudentMarks)
console.log("Boolean Type:", typeof IsPassed)
console.log("Undefined Type:", typeof StudentAddress)
console.log("Null Type:", typeof StudentResult)
console.log("Symbol Type:", typeof UniqueId)
console.log("BigInt Type:", typeof BigValue)
// Note: typeof null returns "object" due to
// a historical JavaScript behaviour.

// 4. TYPE CONVERSION
let StringNumber = "100"
// Convert string into number
let ConvertedNumber = Number(StringNumber)
// Convert number into string
let ConvertedString = String(200)
// Convert value into boolean
let ConvertedBoolean = Boolean(1)
console.log("Converted Number:", ConvertedNumber)
console.log("Converted String:", ConvertedString)
console.log("Converted Boolean:", ConvertedBoolean)

// 5. VARIABLE REASSIGNMENT
StudentName = "Priya"
StudentAge = 23
console.log("Updated Name:", StudentName)
console.log("Updated Age:", StudentAge)

// 6. DISPLAY OUTPUT ON HTML PAGE
function RunExample() {
    const Output = document.getElementById("Output")
    Output.textContent = `
Student Name: ${StudentName}
Student Age: ${StudentAge}
College: ${CollegeName}
Course Type: ${typeof CourseName}
Marks Type: ${typeof StudentMarks}
Passed Type: ${typeof IsPassed}
Converted Number: ${ConvertedNumber}
Converted String: ${ConvertedString}
Converted Boolean: ${ConvertedBoolean}
`
}
document.getElementById("RunButton").addEventListener("click", RunExample)