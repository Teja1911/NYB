const output = document.getElementById("output")
document.getElementById("runButton").addEventListener("click", () => {
    output.textContent = ""
    const original = {
        name: "Rahul",
        address: {
            city: "Hyderabad"
        }
    }
    // Shallow copy: nested objects are still shared.
    const shallowCopy = { ...original }
    shallowCopy.name = "Arun"
    shallowCopy.address.city = "Bangalore"
    output.textContent += "Original after shallow copy:\n"
    output.textContent += JSON.stringify(original, null, 2) + "\n\n"
    const originalDeep = {
        name: "Priya",
        address: {
            city: "Chennai"
        }
    }
    // Deep copy for structured-clone-supported data.
    const deepCopy = structuredClone(originalDeep)
    deepCopy.name = "Sneha"
    deepCopy.address.city = "Mumbai"
    output.textContent += "Original after deep copy:\n"
    output.textContent += JSON.stringify(originalDeep, null, 2)
})