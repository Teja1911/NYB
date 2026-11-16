// 1. STRING CREATION
// ========================================
let Message = "  JavaScript Fundamentals  ";

// ========================================
// 2. BASIC STRING METHODS
// ========================================

let StringLength = Message.length;

let UppercaseMessage = Message.toUpperCase();

let LowercaseMessage = Message.toLowerCase();

let TrimmedMessage = Message.trim();

// ========================================
// 3. SEARCH STRING
// ========================================

let IncludesJavaScript = Message.includes("JavaScript");

let StartsWithJavaScript = Message.trim().startsWith("JavaScript");

let EndsWithFundamentals = Message.trim().endsWith("Fundamentals");

// ========================================
// 4. EXTRACT STRING
// ========================================

let SlicedMessage = Message.trim().slice(0, 10);

let SubstringMessage = Message.trim().substring(0, 10);

// ========================================
// 5. REPLACE STRING
// ========================================

let ReplacedMessage = Message.replace(
    "Fundamentals",
    "Basics"
);

// ========================================
// 6. SPLIT STRING
// Converts a string into an array.
// ========================================

let TechnologyList = "HTML,CSS,JavaScript,React";

let TechnologyArray = TechnologyList.split(",");

// ========================================
// 7. REVERSE A STRING
// ========================================

function ReverseString(Value) {
    let ReversedValue = "";

    // Start from the last character and move backwards.
    for (let Index = Value.length - 1; Index >= 0; Index--) {
        ReversedValue += Value[Index];
    }

    return ReversedValue;
}

// ========================================
// 8. PALINDROME CHECK
// A palindrome reads the same forwards and backwards.
// ========================================

function CheckPalindrome(Value) {
    let CleanedValue = Value.toLowerCase().replace(/\s/g, "");

    let ReversedValue = CleanedValue.split("").reverse().join("");

    return CleanedValue === ReversedValue;
}

// ========================================
// 9. COUNT VOWELS
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
// 10. DISPLAY OUTPUT
// ========================================

function RunExample() {
    let Output = [
        "Original String: [" + Message + "]",
        "Length: " + StringLength,
        "Uppercase: " + UppercaseMessage,
        "Lowercase: " + LowercaseMessage,
        "Trim: " + TrimmedMessage,
        "Includes JavaScript: " + IncludesJavaScript,
        "Starts With JavaScript: " + StartsWithJavaScript,
        "Ends With Fundamentals: " + EndsWithFundamentals,
        "Slice: " + SlicedMessage,
        "Substring: " + SubstringMessage,
        "Replace: " + ReplacedMessage,
        "Split: " + TechnologyArray,
        "Reverse: " + ReverseString("JavaScript"),
        "Madam Is Palindrome: " + CheckPalindrome("Madam"),
        "Vowel Count: " + CountVowels("JavaScript")
    ];

    document.getElementById("Output").textContent =
        Output.join("\n");

    console.log(Output);
}

document.getElementById("RunButton").addEventListener("click", RunExample);