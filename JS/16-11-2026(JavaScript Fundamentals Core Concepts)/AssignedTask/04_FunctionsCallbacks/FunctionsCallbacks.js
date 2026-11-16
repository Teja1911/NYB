
"use strict";

// ========================================
// 1. FUNCTION DECLARATION
// ========================================

function AddNumbers(FirstNumber, SecondNumber) {
    return FirstNumber + SecondNumber;
}

// ========================================
// 2. FUNCTION EXPRESSION
// ========================================

const SubtractNumbers = function (FirstNumber, SecondNumber) {
    return FirstNumber - SecondNumber;
};

// ========================================
// 3. ARROW FUNCTION
// ========================================

const MultiplyNumbers = (FirstNumber, SecondNumber) => {
    return FirstNumber * SecondNumber;
};

// Short arrow function
const SquareNumber = NumberValue => NumberValue * NumberValue;

// ========================================
// 4. FUNCTION WITH RETURN VALUE
// ========================================

function CalculateArea(Length, Width) {
    let Area = Length * Width;

    return Area;
}

// ========================================
// 5. CALLBACK FUNCTION
// A callback is passed into another function.
// ========================================

function Calculate(FirstNumber, SecondNumber, CallbackFunction) {
    return CallbackFunction(FirstNumber, SecondNumber);
}

// Callback function: Addition
function Addition(FirstNumber, SecondNumber) {
    return FirstNumber + SecondNumber;
}

// Callback function: Multiplication
function Multiplication(FirstNumber, SecondNumber) {
    return FirstNumber * SecondNumber;
}

// ========================================
// 6. DISPLAY OUTPUT
// ========================================

function RunExample() {
    let Output = [];

    Output.push("Function Declaration: " + AddNumbers(10, 20));
    Output.push("Function Expression: " + SubtractNumbers(20, 10));
    Output.push("Arrow Function: " + MultiplyNumbers(5, 4));
    Output.push("Square Number: " + SquareNumber(5));
    Output.push("Rectangle Area: " + CalculateArea(10, 5));

    Output.push(
        "Callback Addition: " +
        Calculate(10, 5, Addition)
    );

    Output.push(
        "Callback Multiplication: " +
        Calculate(10, 5, Multiplication)
    );

    document.getElementById("Output").textContent =
        Output.join("\n");

    console.log(Output);
}

document.getElementById("RunButton").addEventListener("click", RunExample)