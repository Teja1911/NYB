const output = document.getElementById("output")
document.getElementById("runButton").addEventListener("click", () => {
    output.textContent = ""
    function log(message) {
        output.textContent += message + "\n"
    }
    log("1. Synchronous code starts")
    setTimeout(() => {
        log("5. setTimeout callback - Task Queue")
    }, 0)
    Promise.resolve().then(() => {
        log("3. Promise callback - Microtask Queue")
    })
    log("2. Synchronous code ends")
    queueMicrotask(() => {
        log("4. queueMicrotask callback")
    })
    log("6. More synchronous code")
})