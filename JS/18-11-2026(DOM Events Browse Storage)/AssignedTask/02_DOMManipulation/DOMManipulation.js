const Message = document.getElementById("Message")
const EmployeeContainer = document.getElementById("EmployeeContainer")
const Output = document.getElementById("Output")
let EmployeeCount = 0
// Change text content dynamically.
document.getElementById("ChangeButton").addEventListener("click", () => {
    Message.textContent = "The content was updated using JavaScript."
})
// Create and append new HTML elements.
document.getElementById("CreateButton").addEventListener("click", () => {
    EmployeeCount++
    const EmployeeCard = document.createElement("div")
    EmployeeCard.className = "employee-card"
    const EmployeeName = document.createElement("p")
    EmployeeName.textContent = `Employee ${EmployeeCount}`
    const EmployeeRole = document.createElement("span")
    EmployeeRole.textContent = "JavaScript Developer"
    EmployeeCard.append(EmployeeName, EmployeeRole)
    EmployeeContainer.appendChild(EmployeeCard)
    Output.textContent = "New employee element created."
})
// Remove the last created element.
document.getElementById("RemoveButton").addEventListener("click", () => {
    const LastEmployee = EmployeeContainer.lastElementChild
    if (LastEmployee) {
        LastEmployee.remove()
        Output.textContent = "Last employee element removed."
    } else {
        Output.textContent = "No employee elements to remove."
    }
})
// Change CSS using classList.
document.getElementById("StyleButton").addEventListener("click", () => {
    Message.classList.toggle("highlight")
})
// Attribute manipulation example.
const Heading = document.getElementById("Heading")
Heading.setAttribute("title", "DOM manipulation demonstration")
console.log("Heading title:", Heading.getAttribute("title"))