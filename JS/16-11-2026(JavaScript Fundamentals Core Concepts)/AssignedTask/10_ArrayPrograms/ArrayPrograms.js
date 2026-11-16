// Sample array
let Numbers = [10, 50, 20, 80, 30, 10, 20];

// ========================================
// 1. FIND LARGEST NUMBER
// ========================================

function FindLargest(ArrayValues) {
    let Largest = ArrayValues[0];

    for (let NumberValue of ArrayValues) {
        if (NumberValue > Largest) {
            Largest = NumberValue;
        }
    }

    return Largest;
}

// ========================================
// 2. FIND SMALLEST NUMBER
// ========================================

function FindSmallest(ArrayValues) {
    let Smallest = ArrayValues[0];

    for (let NumberValue of ArrayValues) {
        if (NumberValue < Smallest) {
            Smallest = NumberValue;
        }
    }

    return Smallest;
}

// ========================================
// 3. CALCULATE SUM AND AVERAGE
// ========================================

function CalculateSumAverage(ArrayValues) {
    if (ArrayValues.length === 0) {
        return { Sum: 0, Average: 0 };
    }

    let Sum = ArrayValues.reduce((Total, NumberValue) => {
        return Total + NumberValue;
    }, 0);

    let Average = Sum / ArrayValues.length;

    return {
        Sum: Sum,
        Average: Average
    };
}

// ========================================
// 4. REMOVE DUPLICATES
// ========================================

function RemoveDuplicates(ArrayValues) {
    // Set stores only unique values.
    return [...new Set(ArrayValues)];
}

// ========================================
// 5. GET EVEN NUMBERS
// ========================================

function GetEvenNumbers(ArrayValues) {
    return ArrayValues.filter(NumberValue => {
        return NumberValue % 2 === 0;
    });
}

// ========================================
// 6. GET ODD NUMBERS
// ========================================

function GetOddNumbers(ArrayValues) {
    return ArrayValues.filter(NumberValue => {
        return NumberValue % 2 !== 0;
    });
}

// ========================================
// 7. COUNT POSITIVE, NEGATIVE AND ZERO
// ========================================

function CountNumbers(ArrayValues) {
    let PositiveCount = 0;
    let NegativeCount = 0;
    let ZeroCount = 0;

    for (let NumberValue of ArrayValues) {
        if (NumberValue > 0) {
            PositiveCount++;
        } else if (NumberValue < 0) {
            NegativeCount++;
        } else {
            ZeroCount++;
        }
    }

    return {
        Positive: PositiveCount,
        Negative: NegativeCount,
        Zero: ZeroCount
    };
}

// ========================================
// 8. SORT IN ASCENDING ORDER
// ========================================

function SortAscending(ArrayValues) {
    return [...ArrayValues].sort((A, B) => A - B);
}

// ========================================
// 9. SORT IN DESCENDING ORDER
// ========================================

function SortDescending(ArrayValues) {
    return [...ArrayValues].sort((A, B) => B - A);
}

// ========================================
// 10. DISPLAY ALL RESULTS
// ========================================

function RunExample() {
    let Result = CalculateSumAverage(Numbers);

    let Output = [
        "Original Array: " + Numbers,
        "Largest Number: " + FindLargest(Numbers),
        "Smallest Number: " + FindSmallest(Numbers),
        "Sum: " + Result.Sum,
        "Average: " + Result.Average,
        "Unique Values: " + RemoveDuplicates(Numbers),
        "Even Numbers: " + GetEvenNumbers(Numbers),
        "Odd Numbers: " + GetOddNumbers(Numbers),
        "Number Counts: " + JSON.stringify(CountNumbers(Numbers)),
        "Ascending Order: " + SortAscending(Numbers),
        "Descending Order: " + SortDescending(Numbers)
    ];

    document.getElementById("Output").textContent =
        Output.join("\n");

    console.log(Output);
}

document.getElementById("RunButton").addEventListener("click", RunExample)