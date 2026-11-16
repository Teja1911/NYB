// Store all results in an array
let Results = [];

// 1. FOR LOOP: PRINT 1 TO 5
Results.push("FOR LOOP");
for (let Index = 1; Index <= 5; Index++) {
    Results.push(Index);
}

// 2. WHILE LOOP: PRINT 1 TO 5
Results.push("\nWHILE LOOP")
let WhileNumber = 1
while (WhileNumber <= 5) {
    Results.push(WhileNumber)
    WhileNumber++
}

// 3. DO-WHILE LOOP
Results.push("\nDO-WHILE LOOP")
let DoWhileNumber = 1
do {
    Results.push(DoWhileNumber)
    DoWhileNumber++
} while (DoWhileNumber <= 5)

// 4. MULTIPLICATION TABLE
Results.push("\nMULTIPLICATION TABLE")
let TableNumber = 5
for (let Index = 1; Index <= 10; Index++) {
    Results.push(`${TableNumber} x ${Index} = ${TableNumber * Index}`)
}

// 5. SUM OF NUMBERS
let Total = 0
for (let Index = 1; Index <= 10; Index++) {
    Total += Index
}
Results.push("\nSum of numbers from 1 to 10: " + Total)

// 6. FACTORIAL
function CalculateFactorial(NumberValue) {
    let Factorial = 1
    for (let Index = 1; Index <= NumberValue; Index++) {
        Factorial *= Index
    }
    return Factorial
}
Results.push("Factorial of 5: " + CalculateFactorial(5))

// 7. BREAK EXAMPLE
// Stop the loop when number reaches 4
Results.push("\nBREAK EXAMPLE")
for (let Index = 1; Index <= 10; Index++) {
    if (Index === 4) {
        break
    }
    Results.push(Index)
}

// 8. CONTINUE EXAMPLE
// Skip number 3
Results.push("\nCONTINUE EXAMPLE");
for (let Index = 1; Index <= 5; Index++) {
    if (Index === 3) {
        continue
    }
    Results.push(Index)
}

// 9. FOR-OF LOOP
Results.push("\nFOR-OF LOOP")
let Fruits = ["Apple", "Mango", "Orange"]
for (let Fruit of Fruits) {
    Results.push(Fruit)
}

// 10. DISPLAY OUTPUT
function RunExample() {
    document.getElementById("Output").textContent =
        Results.join("\n")
    console.log(Results)
}
document.getElementById("RunButton").addEventListener("click", RunExample)
