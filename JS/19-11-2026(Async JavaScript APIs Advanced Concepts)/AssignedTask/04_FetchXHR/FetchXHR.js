const output = document.getElementById("output")
const API_URL = "https://jsonplaceholder.typicode.com/users"
// Fetch API
async function fetchUsers() {
    output.textContent = "Loading users..."
    try {
        const response = await fetch(API_URL)
        // fetch does not reject automatically for HTTP 404 or 500.
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`)
        }
        const users = await response.json()
        if (!Array.isArray(users)) {
            throw new Error("Invalid API response")
        }
        output.textContent = users
            .map(user => `${user.id}. ${user.name} - ${user.email}`)
            .join("\n")
    } catch (error) {
        output.textContent = "Error: " + error.message
    }
}
// XMLHttpRequest introduction
function loadUsersWithXHR() {
    output.textContent = "Loading users with XMLHttpRequest..."
    const xhr = new XMLHttpRequest()
    xhr.open("GET", API_URL, true)
    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
            try {
                const users = JSON.parse(xhr.responseText)
                output.textContent = users
                    .map(user => `${user.id}. ${user.name}`)
                    .join("\n")
            } catch (error) {
                output.textContent = "Invalid JSON response"
            }
        } else {
            output.textContent = `Request failed: ${xhr.status}`
        }
    }
    xhr.onerror = function () {
        output.textContent = "Network error occurred"
    }
    xhr.send()
}
document.getElementById("fetchButton")
    .addEventListener("click", fetchUsers)
document.getElementById("xhrButton")
    .addEventListener("click", loadUsersWithXHR)