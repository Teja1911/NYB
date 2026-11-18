const Output = document.getElementById("Output")
const Grandparent = document.getElementById("Grandparent")
const Parent = document.getElementById("Parent")
const Child = document.getElementById("Child")
function LogEvent(Message) {
    Output.textContent += Message + "\n"
}
// CAPTURING: event travels from outer element towards the target.
Grandparent.addEventListener("click", () => {
    LogEvent("Grandparent - Capturing")
}, true)
Parent.addEventListener("click", () => {
    LogEvent("Parent - Capturing")
}, true)
Child.addEventListener("click", () => {
    LogEvent("Child - Target")
})
// BUBBLING: event travels from target towards outer elements.
Parent.addEventListener("click", () => {
    LogEvent("Parent - Bubbling")
})
Grandparent.addEventListener("click", () => {
    LogEvent("Grandparent - Bubbling")
})
// Demonstrate stopPropagation separately.
Child.addEventListener("dblclick", Event => {
    Event.stopPropagation()
    LogEvent("Double-click: propagation stopped at Child")
})
document.getElementById("ClearButton").addEventListener("click", () => {
    Output.textContent = ""
})