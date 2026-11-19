// Debounce: execute only after the user stops triggering the event.
function debounce(callback, delay) {
    let timerId
    return function (...args) {
        clearTimeout(timerId)
        timerId = setTimeout(() => {
            callback.apply(this, args)
        }, delay)
    }
}
// Throttle: execute at most once during the specified interval.
function throttle(callback, delay) {
    let shouldWait = false
    return function (...args) {
        if (shouldWait) return
        callback.apply(this, args)
        shouldWait = true
        setTimeout(() => {
            shouldWait = false
        }, delay)
    }
}
const searchInput = document.getElementById("searchInput")
const searchOutput = document.getElementById("searchOutput")
const handleSearch = debounce((event) => {
    searchOutput.textContent = "Searching for: " + event.target.value
}, 500)
searchInput.addEventListener("input", handleSearch)
const scrollBox = document.getElementById("scrollBox")
const scrollOutput = document.getElementById("scrollOutput")
const handleScroll = throttle(() => {
    scrollOutput.textContent =
        "Scroll position: " + scrollBox.scrollTop
}, 500)
scrollBox.addEventListener("scroll", handleScroll)