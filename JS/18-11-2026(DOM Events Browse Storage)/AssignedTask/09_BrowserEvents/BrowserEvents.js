const Output = document.getElementById("Output")
const WindowSize = document.getElementById("WindowSize")
const ScrollPosition = document.getElementById("ScrollPosition")
const NetworkStatus = document.getElementById("NetworkStatus")
const VisibilityStatus = document.getElementById("VisibilityStatus")
function LogEvent(Message) {
    Output.textContent = Message + "\n" + Output.textContent
}
// WINDOW LOAD EVENT.
window.addEventListener("load", () => {
    LogEvent("Page load event completed.")
})
// RESIZE EVENT.
window.addEventListener("resize", () => {
    WindowSize.textContent =
        `Width: ${window.innerWidth}px | Height: ${window.innerHeight}px`
    LogEvent("Browser window resized.")
})
// SCROLL EVENT.
window.addEventListener("scroll", () => {
    ScrollPosition.textContent =
        `Scroll Position: ${window.scrollY}px`
})
// ONLINE AND OFFLINE EVENTS.
function UpdateNetworkStatus() {
    NetworkStatus.textContent = navigator.onLine
        ? "Network Status: Online"
        : "Network Status: Offline"
}
window.addEventListener("online", () => {
    UpdateNetworkStatus()
    LogEvent("Browser is online.")
})
window.addEventListener("offline", () => {
    UpdateNetworkStatus()
    LogEvent("Browser is offline.")
})
// VISIBILITY CHANGE EVENT.
document.addEventListener("visibilitychange", () => {
    VisibilityStatus.textContent =
        document.hidden ? "Tab is hidden" : "Tab is visible"
    LogEvent(VisibilityStatus.textContent)
})
// KEYBOARD EVENT.
document.addEventListener("keydown", Event => {
    LogEvent(`Key pressed: ${Event.key}`)
})
// Initial values.
WindowSize.textContent =
    `Width: ${window.innerWidth}px | Height: ${window.innerHeight}px`
UpdateNetworkStatus()