// ======================================================
// JAVASCRIPT FUNDAMENTALS, VARIABLES, DATA TYPES,
// OPERATORS AND CONTROL FLOW
// ======================================================


// 1. INTRODUCTION TO JAVASCRIPT
console.log("JavaScript Fundamentals Practice");


// 2. VARIABLES: var, let, const

var studentName = "Rahul";
let studentAge = 21;
const maximumMarks = 100;

console.log(studentName, studentAge, maximumMarks);

// var can be redeclared and reassigned.
var studentName = "Arjun";

// let can be reassigned.
studentAge = 22;

// const cannot be reassigned.
console.log(studentName, studentAge);


// 3. SCOPE

// Global scope
let collegeName = "ABC Engineering College";

function displayCollegeDetails() {
    // Function scope
    var departmentName = "Computer Science";

    console.log("College:", collegeName);
    console.log("Department:", departmentName);

    if (true) {
        // Block scope
        let semesterNumber = 6;
        const sectionName = "A";

        console.log("Semester:", semesterNumber);
        console.log("Section:", sectionName);
    }

    // semesterNumber and sectionName are not accessible here.
}

displayCollegeDetails();


// 4. HOISTING

// var is hoisted and initialized with undefined.
console.log(hoistedValue);
var hoistedValue = 50;

// let and const cannot be accessed before initialization.
// Doing so causes a ReferenceError.


// 5. PRIMITIVE DATA TYPES

const studentFullName = "Rahul Kumar";  // String
const studentRollNumber = 101;          // Number
const isStudentPassed = true;           // Boolean
let optionalSubject;                    // Undefined
const absentMarks = null;               // Null
const largeNumber = 12345678901234567890n; // BigInt
const uniqueStudentId = Symbol("studentId"); // Symbol

console.log(studentFullName);
console.log(studentRollNumber);
console.log(isStudentPassed);
console.log(optionalSubject);
console.log(absentMarks);
console.log(largeNumber);
console.log(uniqueStudentId);


// 6. REFERENCE DATA TYPES

const studentProfile = {
    name: "Priya",
    age: 20,
    department: "CSE"
};

const subjectMarks = [85, 90, 78, 88];

console.log(studentProfile);
console.log(subjectMarks);


// 7. TYPEOF OPERATOR

console.log(typeof studentFullName); // string
console.log(typeof studentRollNumber); // number
console.log(typeof isStudentPassed); // boolean
console.log(typeof optionalSubject); // undefined
console.log(typeof absentMarks); // object (JavaScript behavior)
console.log(typeof largeNumber); // bigint
console.log(typeof uniqueStudentId); // symbol
console.log(typeof studentProfile); // object
console.log(typeof subjectMarks); // object


// 8. TYPE CONVERSION

const marksAsText = "85";
const convertedMarks = Number(marksAsText);

console.log(convertedMarks); // 85
console.log(typeof convertedMarks); // number

const attendancePercentage = 90;
const attendanceAsText = String(attendancePercentage);

console.log(attendanceAsText); // "90"
console.log(typeof attendanceAsText); // string

const userInput = "0";
const convertedBoolean = Boolean(userInput);

console.log(convertedBoolean); // true


// 9. TYPE COERCION

console.log("10" + 5); // "105"
console.log("10" - 5); // 5
console.log("10" * 2); // 20
console.log(10 == "10"); // true
console.log(10 === "10"); // false

// Prefer strict equality (===) in normal application code.


// 10. ARITHMETIC OPERATORS

const firstNumber = 20;
const secondNumber = 6;

console.log(firstNumber + secondNumber);
console.log(firstNumber - secondNumber);
console.log(firstNumber * secondNumber);
console.log(firstNumber / secondNumber);
console.log(firstNumber % secondNumber);
console.log(firstNumber ** 2);


// 11. ASSIGNMENT OPERATORS

let calculatedScore = 10;

calculatedScore += 5;
console.log(calculatedScore); // 15

calculatedScore -= 3;
console.log(calculatedScore); // 12

calculatedScore *= 2;
console.log(calculatedScore); // 24

calculatedScore /= 4;
console.log(calculatedScore); // 6


// 12. COMPARISON OPERATORS

const firstScore = 75;
const secondScore = 60;

console.log(firstScore > secondScore);
console.log(firstScore < secondScore);
console.log(firstScore >= secondScore);
console.log(firstScore <= secondScore);
console.log(firstScore === secondScore);
console.log(firstScore !== secondScore);


// 13. LOGICAL OPERATORS

const hasCompletedAssignment = true;
const hasSubmittedProject = false;

console.log(hasCompletedAssignment && hasSubmittedProject);
console.log(hasCompletedAssignment || hasSubmittedProject);
console.log(!hasCompletedAssignment);


// 14. TERNARY OPERATOR

const examMarks = 65;

const examResult = examMarks >= 35 ? "Pass" : "Fail";

console.log(examResult);


// 15. NULLISH COALESCING

const providedCity = null;
const defaultCity = providedCity ?? "Hyderabad";

console.log(defaultCity);


// 16. OPTIONAL CHAINING

const employeeDetails = {
    name: "Kiran",
    address: {
        city: "Hyderabad"
    }
};

console.log(employeeDetails.address?.city);
console.log(employeeDetails.contact?.phone);


// 17. IF, ELSE IF AND ELSE

const finalMarks = 82;

if (finalMarks >= 90) {
    console.log("Grade A");
} else if (finalMarks >= 75) {
    console.log("Grade B");
} else if (finalMarks >= 60) {
    console.log("Grade C");
} else if (finalMarks >= 35) {
    console.log("Grade D");
} else {
    console.log("Fail");
}


// 18. SWITCH STATEMENT

const selectedDay = 3;

switch (selectedDay) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    default:
        console.log("Weekend or invalid day");
}


// 19. FOR LOOP

for (let currentNumber = 1; currentNumber <= 5; currentNumber++) {
    console.log("For loop:", currentNumber);
}


// 20. WHILE LOOP

let whileCounter = 1;

while (whileCounter <= 3) {
    console.log("While loop:", whileCounter);
    whileCounter++;
}


// 21. DO...WHILE LOOP

let doWhileCounter = 1;

do {
    console.log("Do-while loop:", doWhileCounter);
    doWhileCounter++;
} while (doWhileCounter <= 3);


// 22. BREAK

for (let breakCounter = 1; breakCounter <= 10; breakCounter++) {
    if (breakCounter === 5) {
        break;
    }

    console.log("Break example:", breakCounter);
}


// 23. CONTINUE

for (let continueCounter = 1; continueCounter <= 5; continueCounter++) {
    if (continueCounter === 3) {
        continue;
    }

    console.log("Continue example:", continueCounter);
}


// 24. BASIC LOGICAL PROGRAMS

// Check whether a number is even or odd.
const numberToCheck = 14;

if (numberToCheck % 2 === 0) {
    console.log(numberToCheck, "is even");
} else {
    console.log(numberToCheck, "is odd");
}


// Find the largest of three numbers.
const firstValue = 25;
const secondValue = 45;
const thirdValue = 30;

if (firstValue >= secondValue && firstValue >= thirdValue) {
    console.log("Largest:", firstValue);
} else if (secondValue >= firstValue && secondValue >= thirdValue) {
    console.log("Largest:", secondValue);
} else {
    console.log("Largest:", thirdValue);
}


// Calculate the sum from 1 to 10.
let totalSum = 0;

for (let sumCounter = 1; sumCounter <= 10; sumCounter++) {
    totalSum += sumCounter;
}

console.log("Sum from 1 to 10:", totalSum);


// Filter even numbers from an array.
const numberCollection = [10, 15, 20, 25, 30];
const evenNumbers = [];

for (let arrayIndex = 0; arrayIndex < numberCollection.length; arrayIndex++) {
    if (numberCollection[arrayIndex] % 2 === 0) {
        evenNumbers.push(numberCollection[arrayIndex]);
    }
}

console.log("Even numbers:", evenNumbers);