// 1. NUMBER METHODS
// ========================================

let Price = 123.4567;

// Convert number to a string with 2 decimal places.
let FixedPrice = Price.toFixed(2);

// Convert string to number.
let ConvertedNumber = Number("250");

// Parse integer from string.
let ParsedInteger = parseInt("25px");

// Parse decimal number from string.
let ParsedFloat = parseFloat("25.75");

// ========================================
// 2. MATH METHODS
// ========================================

let RoundedNumber = Math.round(10.6);

let FloorNumber = Math.floor(10.9);

let CeilNumber = Math.ceil(10.1);

let MaximumNumber = Math.max(10, 20, 30, 40);

let MinimumNumber = Math.min(10, 20, 30, 40);

// ========================================
// 3. NUMBER VALIDATION
// ========================================

let CheckNaN = Number.isNaN(NaN);

let CheckInteger = Number.isInteger(100);

let CheckFinite = Number.isFinite(100);

// ========================================
// 4. RANDOM NUMBER GENERATOR
// Generates a random integer from 1 to 100.
// ========================================

function GenerateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

// ========================================
// 5. SIMPLE PRICE CALCULATION
// ========================================

function CalculateDiscount(Price, DiscountPercentage) {
    let DiscountAmount = Price * DiscountPercentage / 100;

    let FinalPrice = Price - DiscountAmount;

    return FinalPrice.toFixed(2);
}

// ========================================
// 6. DISPLAY OUTPUT
// ========================================

function RunExample() {
    let Output = [
        "Original Price: " + Price,
        "Fixed Price: " + FixedPrice,
        "Converted Number: " + ConvertedNumber,
        "Parsed Integer: " + ParsedInteger,
        "Parsed Float: " + ParsedFloat,
        "Rounded: " + RoundedNumber,
        "Floor: " + FloorNumber,
        "Ceil: " + CeilNumber,
        "Maximum: " + MaximumNumber,
        "Minimum: " + MinimumNumber,
        "Is NaN: " + CheckNaN,
        "Is Integer: " + CheckInteger,
        "Is Finite: " + CheckFinite,
        "Random Number: " + GenerateRandomNumber(),
        "Price After 10% Discount: " + CalculateDiscount(1000, 10)
    ];

    document.getElementById("Output").textContent =
        Output.join("\n");

    console.log(Output);
}

document.getElementById("RunButton").addEventListener("click", RunExample);
