// 1. CHECK EVEN OR ODD
// ========================================

function CheckEvenOdd(NumberValue) {
    if (NumberValue % 2 === 0) {
        return "Even";
    }

    return "Odd";
}

// ========================================
// 2. FIND LARGEST OF THREE NUMBERS
// ========================================

function FindLargest(First, Second, Third) {
    if (First >= Second && First >= Third) {
        return First;
    } else if (Second >= First && Second >= Third) {
        return Second;
    }

    return Third;
}

// ========================================
// 3. FACTORIAL
// Example: 5! = 5 * 4 * 3 * 2 * 1 = 120
// ========================================

function CalculateFactorial(NumberValue) {
    if (!Number.isInteger(NumberValue) || NumberValue < 0) {
        return "Enter a non-negative integer";
    }

    let Result = 1;

    for (let Index = 1; Index <= NumberValue; Index++) {
        Result *= Index;
    }

    return Result;
}

// ========================================
// 4. REVERSE A STRING
// ========================================

function ReverseString(Value) {
    let ReversedValue = "";

    for (let Index = Value.length - 1; Index >= 0; Index--) {
        ReversedValue += Value[Index];
    }

    return ReversedValue;
}

// ========================================
// 5. PALINDROME
// ========================================

function CheckPalindrome(Value) {
    let CleanedValue = Value.toLowerCase().replace(/\s/g, "");

    let ReversedValue = CleanedValue.split("").reverse().join("");

    return CleanedValue === ReversedValue;
}

// ========================================
// 6. COUNT VOWELS
// ========================================

function CountVowels(Value) {
    let Count = 0;
    let Vowels = "aeiou";

    for (let Character of Value.toLowerCase()) {
        if (Vowels.includes(Character)) {
            Count++;
        }
    }

    return Count;
}

// ========================================
// 7. SUM OF DIGITS
// Example: 1234 = 1 + 2 + 3 + 4 = 10
// ========================================

function SumOfDigits(NumberValue) {
    let Digits = String(Math.abs(NumberValue));
    let Sum = 0;

    for (let Digit of Digits) {
        Sum += Number(Digit);
    }

    return Sum;
}

// ========================================
// 8. CHECK POSITIVE, NEGATIVE OR ZERO
// ========================================

function CheckNumberType(NumberValue) {
    if (NumberValue > 0) {
        return "Positive";
    } else if (NumberValue < 0) {
        return "Negative";
    }

    return "Zero";
}

// ========================================
// 9. DISPLAY ALL PROGRAM OUTPUTS
// ========================================

function RunExample() {
    let Output = [
        "1. Even or Odd: " + CheckEvenOdd(15),
        "2. Largest Number: " + FindLargest(10, 50, 30),
        "3. Factorial: " + CalculateFactorial(5),
        "4. Reverse String: " + ReverseString("JavaScript"),
        "5. Is Palindrome: " + CheckPalindrome("Madam"),
        "6. Vowel Count: " + CountVowels("JavaScript"),
        "7. Sum Of Digits: " + SumOfDigits(1234),
        "8. Number Type: " + CheckNumberType(-10)
    ];

    document.getElementById("Output").textContent =
        Output.join("\n");

    console.log(Output);
}

document.getElementById("RunButton").addEventListener("click", RunExample);
