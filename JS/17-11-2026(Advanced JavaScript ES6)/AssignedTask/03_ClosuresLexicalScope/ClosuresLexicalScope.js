const Output = document.getElementById("Output")
const CounterDisplay = document.getElementById("CounterDisplay")
function Print(Title, Value) {
    Output.textContent += Title + "\n" + Value + "\n\n"
}
// LEXICAL SCOPE: inner functions can access outer function variables.
function OuterFunction() {
    const Message = "Accessed from the outer function"
    function InnerFunction() {
        return Message
    }
    return InnerFunction()
}
// CLOSURE: inner function remembers its outer variable
// even after the outer function has finished executing.
function CreateCounter() {
    let Count = 0
    return function() {
        Count++
        return Count
    }
}
// The returned function retains access to Count.
const Counter = CreateCounter()
document.getElementById("CounterButton").addEventListener("click", function() {
    CounterDisplay.textContent = "Counter: " + Counter()
})
document.getElementById("ResetButton").addEventListener("click", function() {
    // Creating a new closure resets the counter.
    CurrentCounter = CreateCounter()
    CounterDisplay.textContent = "Counter: 0"
})
// Keep the current counter function replaceable.
let CurrentCounter = Counter
document.getElementById("CounterButton").onclick = function() {
    CounterDisplay.textContent = "Counter: " + CurrentCounter()
}
document.getElementById("ResetButton").onclick = function() {
    CurrentCounter = CreateCounter()
    CounterDisplay.textContent = "Counter: 0"
}
function RunExamples() {
    Output.textContent = ""
    Print("Lexical Scope:", OuterFunction())
    // Each call to CreateCounter creates an independent closure.
    const FirstCounter = CreateCounter()
    const SecondCounter = CreateCounter()
    Print("First Counter:", FirstCounter())
    Print("First Counter Again:", FirstCounter())
    Print("Second Counter:", SecondCounter())
    Print("Closure Use Case:", "Private data and independent counters.")
}
document.getElementById("RunButton").addEventListener("click", RunExamples)