const Output = document.getElementById("Output");
// SESSION STORAGE
// Data generally remains available for the current tab's page session.
document.getElementById("SaveSessionButton").addEventListener("click", () => {
    const Value = document.getElementById("SessionInput").value.trim()
    if (!Value) {
        Output.textContent = "Enter a session value."
        return
    }
    sessionStorage.setItem("PracticeSession", Value)
    Output.textContent = "Session value saved."
})
document.getElementById("ReadSessionButton").addEventListener("click", () => {
    const Value = sessionStorage.getItem("PracticeSession")
    Output.textContent = Value
        ? `Session Value: ${Value}`
        : "No session value found."
})
document.getElementById("DeleteSessionButton").addEventListener("click", () => {
    sessionStorage.removeItem("PracticeSession")
    Output.textContent = "Session value deleted."
})
// COOKIE OPERATIONS
// Cookies are small pieces of data stored by the browser.
// This example creates a non-sensitive practice cookie.
document.getElementById("SaveCookieButton").addEventListener("click", () => {
    const Value = document.getElementById("CookieInput").value.trim()
    if (!Value) {
        Output.textContent = "Enter a cookie value."
        return
    }
    // Encode the value so special characters are handled safely.
    document.cookie =
        `PracticeCookie=${encodeURIComponent(Value)}; max-age=3600; path=/; SameSite=Lax`
    Output.textContent = "Practice cookie saved for one hour."
})
document.getElementById("ReadCookieButton").addEventListener("click", () => {
    const Cookie = document.cookie
        .split("; ")
        .find(Item => Item.startsWith("PracticeCookie="))
    if (Cookie) {
        const Value = decodeURIComponent(Cookie.split("=").slice(1).join("="))
        Output.textContent = `Cookie Value: ${Value}`
    } else {
        Output.textContent = "Practice cookie not found."
    }
})
document.getElementById("DeleteCookieButton").addEventListener("click", () => {
    document.cookie =
        "PracticeCookie=; max-age=0; path=/; SameSite=Lax"
    Output.textContent = "Practice cookie deleted."
})
