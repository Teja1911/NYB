const Output = document.getElementById("Output")
function Print(Title, Value) {
    Output.textContent += `${Title}\n${Value}\n\n`
}
function RunExamples() {
    Output.textContent = ""
    // document represents the loaded HTML document.
    Print("Document Title:", document.title)
    Print("Document URL:", document.URL)
    // getElementById() selects one element using its ID.
    const PageTitle = document.getElementById("PageTitle")
    Print("getElementById():", PageTitle.textContent)
    // querySelector() returns the first matching element.
    const FirstDescription = document.querySelector(".Description")
    Print("querySelector():", FirstDescription.textContent)
    // querySelectorAll() returns all matching elements.
    const AllDescriptions = document.querySelectorAll(".Description")
    Print("querySelectorAll() Count:", AllDescriptions.length)
    // Loop through the NodeList.
    AllDescriptions.forEach((Element, Index) => {
        Print(`Paragraph ${Index + 1}:`, Element.textContent)
    })
    // Select a child element inside a parent element.
    const EmployeeCard = document.getElementById("EmployeeCard")
    const EmployeeName = EmployeeCard.querySelector(".EmployeeName")
    Print("Nested Selection:", EmployeeName.textContent)
    // DOM relationships.
    Print("Parent Element:", EmployeeName.parentElement.tagName)
    Print("Parent Children Count:", EmployeeCard.children.length)
    Print("First Child:", EmployeeCard.firstElementChild.tagName)
}
document.getElementById("RunButton").addEventListener("click", RunExamples)