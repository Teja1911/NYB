const API_URL = "https://dummyjson.com/products"
const output = document.getElementById("output")
async function apiRequest(url, method = "GET", data = null) {
    const options = {
        method,
        headers: {
            "Content-Type": "application/json"
        }
    }
    if (data !== null) {
        options.body = JSON.stringify(data)
    }
    const response = await fetch(url, options)
    if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`)
    }
    return response.json()
}
async function runRequest(callback) {
    output.textContent = "Processing..."
    try {
        const result = await callback()
        output.textContent = JSON.stringify(result, null, 2)
    } catch (error) {
        output.textContent = "Error: " + error.message
    }
}
// GET: Retrieve products
document.getElementById("getButton").addEventListener("click", () => {
    runRequest(() => apiRequest(API_URL))
})
// POST: Create a product
document.getElementById("postButton").addEventListener("click", () => {
    runRequest(() => apiRequest(`${API_URL}/add`, "POST", {
        title: "New Practice Product",
        price: 250,
        description: "Created using POST"
    }))
})
// PUT: Replace/update a product
document.getElementById("putButton").addEventListener("click", () => {
    runRequest(() => apiRequest(`${API_URL}/1`, "PUT", {
        title: "Updated Product",
        price: 500,
        description: "Updated using PUT"
    }))
})
// PATCH: Update selected fields
document.getElementById("patchButton").addEventListener("click", () => {
    runRequest(() => apiRequest(`${API_URL}/1`, "PATCH", {
        price: 650
    }))
})
// DELETE: Delete a product
document.getElementById("deleteButton").addEventListener("click", () => {
    runRequest(() => apiRequest(`${API_URL}/1`, "DELETE"))
})