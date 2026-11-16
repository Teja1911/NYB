// 1. ARRAY CREATION
let Numbers = [10, 20, 30, 40, 50]

// 2. ACCESS ARRAY ELEMENTS
console.log("First Element:", Numbers[0])
console.log("Last Element:", Numbers[Numbers.length - 1])

// 3. ADD ELEMENTS
Numbers.push(60)     // Add to the end
Numbers.unshift(5)   // Add to the beginning

// 4. REMOVE ELEMENTS
Numbers.pop()        // Remove last element
Numbers.shift()      // Remove first element

// 5. SEARCH ARRAY ELEMENTS
let HasThirty = Numbers.includes(30)
let Position = Numbers.indexOf(40)

// 6. MAP METHOD
// Creates a new array by transforming elements.
let DoubledNumbers = Numbers.map(function (NumberValue) {
    return NumberValue * 2
})

// 7. FILTER METHOD
// Returns elements that satisfy a condition.
let FilteredNumbers = Numbers.filter(NumberValue => {
    return NumberValue > 20
})

// 8. REDUCE METHOD
// Calculates the total of all array elements.
let Total = Numbers.reduce((Sum, NumberValue) => {
    return Sum + NumberValue
}, 0)

// 9. FIND METHOD
// Returns the first matching element.
let FoundNumber = Numbers.find(NumberValue => NumberValue > 30)

// 10. FINDINDEX METHOD
// Returns the index of the first matching element.
let FoundIndex = Numbers.findIndex(NumberValue => NumberValue === 30)

// 11. SOME METHOD
// Checks whether at least one element satisfies a condition.
let HasLargeNumber = Numbers.some(NumberValue => NumberValue > 40)

// 12. EVERY METHOD
// Checks whether every element satisfies a condition.
let AllPositive = Numbers.every(NumberValue => NumberValue > 0)

// 13. SORT METHOD
// Use a numeric comparison for number sorting.
let AscendingOrder = [...Numbers].sort((A, B) => A - B)
let DescendingOrder = [...Numbers].sort((A, B) => B - A)

// 14. DISPLAY OUTPUT
function RunExample() {
    let Output = [
        "Original Array: " + Numbers,
        "Array Length: " + Numbers.length,
        "Has 30: " + HasThirty,
        "Position of 40: " + Position,
        "Map Result: " + DoubledNumbers,
        "Filter Result: " + FilteredNumbers,
        "Reduce Total: " + Total,
        "Find Result: " + FoundNumber,
        "Find Index: " + FoundIndex,
        "Some Result: " + HasLargeNumber,
        "Every Result: " + AllPositive,
        "Ascending: " + AscendingOrder,
        "Descending: " + DescendingOrder
    ]
    document.getElementById("Output").textContent = Output.join("\n")
    console.log(Output)
}
document.getElementById("RunButton").addEventListener("click", RunExample)