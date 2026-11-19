const output = document.getElementById("output")
function printMessage(message) {
    output.textContent += message + "\n"
}
// Synchronous execution: each line waits for the previous line.
function synchronousExample() {
    printMessage("Synchronous: First")
    printMessage("Synchronous: Second")
    printMessage("Synchronous: Third")
}
// Asynchronous execution: setTimeout schedules work for later.
function asynchronousExample() {
    printMessage("Asynchronous: First")
    setTimeout(() => {
        printMessage("Asynchronous: Second (after 2 seconds)")
    }, 2000)
    printMessage("Asynchronous: Third")
}
document.getElementById("runButton").addEventListener("click", () => {
    output.textContent = ""
    synchronousExample();
    printMessage("----------------")
    asynchronousExample()
})