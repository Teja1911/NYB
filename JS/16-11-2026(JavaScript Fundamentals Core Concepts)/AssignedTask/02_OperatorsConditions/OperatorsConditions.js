// 1. ARITHMETIC OPERATORS
let FirstNumber = 20
let SecondNumber = 10
let Addition = FirstNumber + SecondNumber
let Subtraction = FirstNumber - SecondNumber
let Multiplication = FirstNumber * SecondNumber
let Division = FirstNumber / SecondNumber
let Remainder = FirstNumber % SecondNumber

// 2. COMPARISON OPERATORS
let IsGreater = FirstNumber > SecondNumber
let IsEqual = FirstNumber === SecondNumber
let IsNotEqual = FirstNumber !== SecondNumber

// 3. LOGICAL OPERATORS
let IsEligible = FirstNumber > 10 && SecondNumber < 20
let IsAvailable = FirstNumber > 30 || SecondNumber < 20
let IsNotEligible = !(FirstNumber > 10)

// 4. IF-ELSE CONDITION
function CheckEvenOdd(NumberValue) {
    if (NumberValue % 2 === 0) {
        return "Even Number"
    } else {
        return "Odd Number"
    }
}

// 5. LARGEST OF THREE NUMBERS
function FindLargest(First, Second, Third) {
    if (First >= Second && First >= Third) {
        return First
    } else if (Second >= First && Second >= Third) {
        return Second
    } else {
        return Third
    }
}

// 6. SWITCH STATEMENT
function GetDayName(DayNumber) {
    switch (DayNumber) {
        case 1:
            return "Monday"
        case 2:
            return "Tuesday"
        case 3:
            return "Wednesday"
        case 4:
            return "Thursday"
        case 5:
            return "Friday"
        default:
            return "Invalid Day"
    }
}

// 7. TERNARY OPERATOR
function CheckEligibility(Age) {
    return Age >= 18 ? "Eligible" : "Not Eligible"
}

// 8. DISPLAY OUTPUT
function RunExample() {
    const Output = document.getElementById("Output")
    Output.textContent = `
Addition: ${Addition}
Subtraction: ${Subtraction}
Multiplication: ${Multiplication}
Division: ${Division}
Remainder: ${Remainder}
Is Greater: ${IsGreater}
Is Equal: ${IsEqual}
Is Not Equal: ${IsNotEqual}
Logical AND: ${IsEligible}
Logical OR: ${IsAvailable}
Logical NOT: ${IsNotEligible}
15 is: ${CheckEvenOdd(15)}
Largest Number: ${FindLargest(10, 50, 30)}
Day: ${GetDayName(3)}
Age 22: ${CheckEligibility(22)}
`
    console.log(Output.textContent)
}
document.getElementById("RunButton").addEventListener("click", RunExample)
