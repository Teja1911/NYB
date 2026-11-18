const Output = document.getElementById("Output")
function ShowEvent(EventName, Details) {
    Output.textContent = `${EventName}\n${Details}`
}
// Click event.
document.getElementById("ClickButton").addEventListener("click", () => {
    ShowEvent("Click Event", "The button was clicked.")
})
// Input event: runs whenever the input value changes.
document.getElementById("NameInput").addEventListener("input", Event => {
    ShowEvent("Input Event", Event.target.value)
})
// Change event: runs when the selected value changes.
document.getElementById("DepartmentSelect").addEventListener("change", Event => {
    ShowEvent("Change Event", Event.target.value)
})
// Submit event.
document.getElementById("DemoForm").addEventListener("submit", Event => {
    Event.preventDefault()
    const Name = document.getElementById("FormName").value.trim()
    ShowEvent("Submit Event", `Welcome ${Name}`)
})
// Mouse events.
const MouseArea = document.getElementById("MouseArea")
MouseArea.addEventListener("mouseenter", () => {
    ShowEvent("Mouse Enter", "Pointer entered the area.")
})
MouseArea.addEventListener("mouseleave", () => {
    ShowEvent("Mouse Leave", "Pointer left the area.")
})
// Keyboard events.
document.addEventListener("keydown", Event => {
    ShowEvent("Key Down", `You pressed: ${Event.key}`)
})