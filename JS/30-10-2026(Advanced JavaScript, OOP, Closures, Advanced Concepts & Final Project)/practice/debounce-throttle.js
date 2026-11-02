// FILE: debounce-throttle.js
// TOPIC: Debouncing, Throttling, and Event Performance
(function () {
    console.clear()
    // 1. setTimeout()=
    console.log("========== 1. setTimeout ==========")
    // Executes a callback once after the specified delay.
    const timeoutId = setTimeout(function () {
        console.log("This message appears after 2 seconds.")
    }, 2000)
    console.log("setTimeout scheduled:", timeoutId)
    // 2. clearTimeout()
    console.log("\n========== 2. clearTimeout ==========")
    const cancelledTimeoutId = setTimeout(function () {
        console.log("This message should not appear.")
    }, 3000)
    clearTimeout(cancelledTimeoutId)
    console.log("The scheduled timeout was cancelled.")
    // 3. setInterval() AND clearInterval()
    console.log("\n========== 3. setInterval ==========")
    let intervalCount = 0
    const intervalId = setInterval(function () {
        intervalCount++
        console.log("Interval count:", intervalCount)
        if (intervalCount === 3) {
            clearInterval(intervalId)
            console.log("Interval stopped.")
        }
    }, 1000)
    // 4. NORMAL SEARCH INPUT SIMULATION
    console.log("\n========== 4. NORMAL SEARCH ==========")
    // Imagine a user typing into a search input.
    // Without debouncing, every input event can trigger a search.
    function normalSearch(searchText) {
        console.log("Searching for:", searchText)
    }
    normalSearch("R")
    normalSearch("Re")
    normalSearch("Rea")
    normalSearch("Reac")
    normalSearch("React")
    console.log("Every call executes immediately.")
    // 5. DEBOUNCING
    console.log("\n========== 5. DEBOUNCING ==========")
    // Debouncing waits until calls stop for a specified delay.
    function debounce(callback, delay) {
        let timeoutId
        return function (...args) {
            clearTimeout(timeoutId)
            timeoutId = setTimeout(function () {
                callback.apply(this, args)
            }.bind(this), delay)
        }
    }
    function searchEmployees(searchText) {
        console.log("Debounced employee search:", searchText)
    }
    const debouncedSearch = debounce(searchEmployees, 500)
    // Simulate rapid typing.
    debouncedSearch("R")
    debouncedSearch("Re")
    debouncedSearch("Rea")
    debouncedSearch("Reac")
    debouncedSearch("React")
    // Only the last search should execute after calls stop
    // for at least 500 milliseconds.
    // 6. DEBOUNCING WITH A REAL INPUT
    console.log("\n========== 6. REAL SEARCH INPUT ==========")
    // This example works when an input with id="employeeSearch"
    // and a results container with id="searchResults" exist.
    //
    // If they do not exist, this section safely skips setup.
    const searchInput = document.querySelector("#employeeSearch")
    const searchResults = document.querySelector("#searchResults")
    const employeeNames = [
        "Rahul Sharma",
        "Priya Reddy",
        "Arjun Kumar",
        "Sneha Patel",
        "Ravi Teja",
        "Ananya Rao"
    ]
    if (searchInput && searchResults) {
        const searchEmployeesInDOM = debounce(function (event) {
            const searchText = event.target.value.trim().toLowerCase()
            const matchingEmployees = employeeNames.filter(function (name) {
                return name.toLowerCase().includes(searchText)
            })
            searchResults.replaceChildren()
            matchingEmployees.forEach(function (name) {
                const listItem = document.createElement("li")
                listItem.textContent = name
                searchResults.appendChild(listItem)
            })
            console.log("Matching employees:", matchingEmployees)
        }, 300)
        searchInput.addEventListener("input", searchEmployeesInDOM)
    } else {
        console.log(
            "DOM search skipped. Add #employeeSearch and #searchResults to test it."
        )
    }

    // 7. THROTTLING
    console.log("\n========== 7. THROTTLING ==========")
    // Throttling limits how frequently a callback can execute.
    function throttle(callback, delay) {
        let isWaiting = false
        return function (...args) {
            if (isWaiting) {
                return
            }
            callback.apply(this, args)
            isWaiting = true
            setTimeout(function () {
                isWaiting = false
            }, delay)
        }
    }
    function handleScroll() {
        console.log("Scroll handler executed:", Date.now())
    }
    const throttledScrollHandler = throttle(handleScroll, 1000)
    // Simulate repeated events.
    throttledScrollHandler()
    throttledScrollHandler()
    throttledScrollHandler()
    setTimeout(function () {
        throttledScrollHandler()
    }, 1200)

    // 8. THROTTLING A REAL SCROLL EVENT
    console.log("\n========== 8. REAL SCROLL EVENT ==========")
    const scrollStatus = document.querySelector("#scrollStatus")
    if (scrollStatus) {
        const updateScrollStatus = throttle(function () {
            scrollStatus.textContent =
                "Scroll position: " + Math.round(window.scrollY)

            console.log("Scroll position:", window.scrollY)
        }, 200)
        window.addEventListener("scroll", updateScrollStatus, {
            passive: true
        })
    } else {
        console.log(
            "Scroll status skipped. Add an element with id='scrollStatus' to test it."
        )
    }

    // 9. DEBOUNCING VS THROTTLING
    console.log("\n========== 9. DEBOUNCING VS THROTTLING ==========")
    console.log("Debouncing: execute after calls stop.")
    console.log("Throttling: limit execution frequency during repeated calls.")

    // 10. PRACTICAL SEARCH FILTER
    console.log("\n========== 10. PRACTICAL SEARCH FILTER ==========")
    const employees = [
        { id: 101, name: "Rahul Sharma", role: "Frontend Developer" },
        { id: 102, name: "Priya Reddy", role: "Backend Developer" },
        { id: 103, name: "Arjun Kumar", role: "Full Stack Developer" },
        { id: 104, name: "Sneha Patel", role: "QA Engineer" }
    ]
    function filterEmployees(searchText) {
        const normalizedSearchText = searchText.trim().toLowerCase()
        return employees.filter(function (employee) {
            return (
                employee.name.toLowerCase().includes(normalizedSearchText) ||
                employee.role.toLowerCase().includes(normalizedSearchText)
            )
        })
    }
    const frontendEmployees = filterEmployees("frontend")
    const rahulEmployees = filterEmployees("rahul")
    console.log("Frontend employees:", frontendEmployees)
    console.log("Employees matching Rahul:", rahulEmployees)

    // END OF DEBOUNCE AND THROTTLE PRACTICE
    console.log("\n========== DEBOUNCE AND THROTTLE COMPLETED ==========")
})()