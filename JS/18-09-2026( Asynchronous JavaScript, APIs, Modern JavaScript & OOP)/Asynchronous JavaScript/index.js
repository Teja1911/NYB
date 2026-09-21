// Synchronous JavaScript:
// Synchronous code executes one statement at a time, in order.
console.log("A")
console.log("B")
console.log("C")

// Asynchronous JavaScript
// Asynchronous operations allow JavaScript to start an operation and continue executing other code instead of waiting synchronously for the operation to finish.
console.log("Start")
setTimeout(() => {
    console.log("Timer finished")
}, 2000)
console.log("End")

// Call Stack
// The Call Stack keeps track of currently executing JavaScript functions.
function greetPerson() {
    console.log("Hello")
}
function startProcess() {
    greetPerson()
}
startProcess()

// Web APIs are capabilities provided by the browser environment rather than the core JavaScript language itself.
console.log("Begin")
setTimeout(() => {
    console.log("Web API timer completed")
}, 1000)
console.log("Finish")

// Callback Queue / Task Queue
// When certain asynchronous callbacks become ready, they wait in a task queue until JavaScript can execute them.
console.log("First")
setTimeout(() => {
    console.log("Timer callback")
}, 0)
console.log("Second")

// Microtask Queue
// Promises use the microtask queue for their reactions such as .then(), .catch(), and .finally().
console.log("One")
Promise.resolve().then(() => {
    console.log("Promise callback")
})
console.log("Two")

// The Event Loop coordinates when queued asynchronous callbacks can run after the call stack becomes empty.
// When the current synchronous code finishes and the stack is empty, microtasks are processed before the next task/callback from the task queue.
console.log("A")
setTimeout(() => {
    console.log("B")
}, 0)
Promise.resolve().then(() => {
    console.log("C")
})
console.log("D")

// setTimeout()
// Schedules a callback to run after at least the specified delay, subject to the event loop and other work.
// Syntax
// setTimeout(callback, delay)
console.log("Opening")
setTimeout(() => {
    console.log("After one second")
}, 1000)
console.log("Closing")

// setInterval()
// Executes a callback repeatedly at approximately the specified interval.
let heartbeatCount = 0;
const heartbeatTimer = setInterval(() => {
    heartbeatCount++;
    console.log("Heartbeat:", heartbeatCount)
    if (heartbeatCount === 3) {
        clearInterval(heartbeatTimer)
    }
}, 1000)

// Promise
// A Promise represents the eventual result of an asynchronous operation.
// It has three states:
// Pending
//    ↓
// Fulfilled
// or
// Pending
//    ↓
// Rejected
// Syntax
// const resultPromise = new Promise((resolve, reject) => {
    // operation
    // resolve(value)
    // or
    // reject(error)
// })
const paymentPromise = new Promise((resolve, reject) => {
    const paymentSuccessful = true
    if (paymentSuccessful) {
        resolve("Payment completed")
    } else {
        reject("Payment failed")
    }
})
paymentPromise.then(message => {
    console.log(message)
})

// .then()
// Used when a Promise is fulfilled.
const deliveryPromise = Promise.resolve("Package delivered")
deliveryPromise.then(statusMessage => {
    console.log(statusMessage)
})

// .catch()
// Handles rejection/errors.
const loginPromise = Promise.reject("Invalid credentials")
loginPromise
    .then(loginResult => {
        console.log(loginResult)
    })
    .catch(loginError => {
        console.log("Error:", loginError)
    })

// .finally()
// Runs after the Promise settles, whether fulfilled or rejected.
const uploadPromise = Promise.resolve("Upload successful")
uploadPromise
    .then(uploadMessage => {
        console.log(uploadMessage)
    })
    .catch(uploadProblem => {
        console.log(uploadProblem)
    })
    .finally(() => {
        console.log("Upload process finished")
    })

// Promise Chaining
// One Promise's result can be passed to the next operation.
Promise.resolve(10)
    .then(firstNumber => {
        return firstNumber * 2
    })
    .then(secondNumber => {
        return secondNumber + 5
    })
    .then(finalNumber => {
        console.log(finalNumber)
    })
    .catch(chainError => {
        console.log(chainError)
    })

// Promise.all()
// Use when:
// Multiple operations are independent and you need all results.
const profileRequest = Promise.resolve("Profile")
const orderRequest = Promise.resolve("Orders")
const settingRequest = Promise.resolve("Settings")
Promise.all([
    profileRequest,
    orderRequest,
    settingRequest
])
.then(allResults => {
    console.log(allResults)
})
.catch(allError => {
    console.log(allError)
})

// Promise.race()
// Returns the result of the first Promise to settle — fulfilled or rejected.
const fastResponse = new Promise(resolve => {
    setTimeout(() => resolve("Fast"), 500)
})
const slowResponse = new Promise(resolve => {
    setTimeout(() => resolve("Slow"), 1500)
})
Promise.race([
    fastResponse,
    slowResponse
])
.then(raceResult => {
    console.log(raceResult)
})

// Promise.allSettled()
// Waits for all promises to settle, regardless of success or failure.
const firstJob = Promise.resolve("Job 1 completed")
const secondJob = Promise.reject("Job 2 failed")
const thirdJob = Promise.resolve("Job 3 completed")
Promise.allSettled([
    firstJob,
    secondJob,
    thirdJob
])
.then(jobResults => {
    console.log(jobResults)
})

// Promise.any()
// Returns the first fulfilled Promise.
// Rejected promises are ignored unless all of them reject.
const serverAlpha = Promise.reject("Alpha failed")
const serverBeta = new Promise(resolve => {
    setTimeout(() => resolve("Beta responded"), 700);
})
const serverGamma = new Promise(resolve => {
    setTimeout(() => resolve("Gamma responded"), 1200);
})
Promise.any([
    serverAlpha,
    serverBeta,
    serverGamma
])
.then(firstSuccess => {
    console.log(firstSuccess)
})
.catch(noSuccess => {
    console.log(noSuccess)
})

// Async/Await
// async/await provides syntax for working with Promises in a more sequential-looking style.
// Syntax
// async function loadData() {
    // try {
        // const response = await somePromise;
        // console.log(response);
    // } catch (error) {
        // console.log(error);
    // }
// }

function getEmployeeRecord() {
    return Promise.resolve({
        id: 101,
        name: "Tej"
    })
}
async function displayEmployee() {
    try {
        const employeeRecord = await getEmployeeRecord()
        console.log(employeeRecord)
    } catch (employeeError) {
        console.log(employeeError)
    }
}
displayEmployee()

// Error Handling 
try {
    console.log("Trying")
} catch (operationFailure) {
    console.log("Failed")
} finally {
    console.log("Finished")
}

// fetch() used to make the HTTP Request
async function loadUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        if (!response.ok) {
            throw new Error("Request failed: " + response.status)
        }
        const userList = await response.json()
        console.log(userList)
    } catch (networkProblem) {
        console.log("Error:", networkProblem.message)
    }
}
loadUsers()

// GET
// Retrieve data.
async function requestProducts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    if (!response.ok) {
        throw new Error("GET failed")
    }
    const productData = await response.json()
    console.log(productData)
}
requestProducts()

// POST
// Create data.
async function createRecord() {
    const response = await fetch( "https://jsonplaceholder.typicode.com/posts",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: "New Post",
                body: "Hello",
                userId: 1
            })
        }
    )
    if (!response.ok) {
        throw new Error("POST failed")
    }
    const createdRecord = await response.json()
    console.log(createdRecord)
}
createRecord()

// PUT
// PUT generally represents replacing/updating the resource representation.
async function replaceRecord() {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/1",
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: 1,
                title: "Updated title",
                body: "Updated body",
                userId: 1
            })
        }
    )
    if (!response.ok) {
        throw new Error("PUT failed")
    }
    const replacedRecord = await response.json()
    console.log(replacedRecord)
}
replaceRecord()

// PATCH
// PATCH generally means a partial modification.
async function updateOnlyTitle() {
    const response = await fetch( "https://jsonplaceholder.typicode.com/posts/1",
        {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: "Only title changed"
            })
        }
    )
    if (!response.ok) {
        throw new Error("PATCH failed")
    }
    const patchedRecord = await response.json()
    console.log(patchedRecord)
}
updateOnlyTitle()

// DELETE
async function removeRecord() {
    const response = await fetch( "https://jsonplaceholder.typicode.com/posts/1",
        {
            method: "DELETE"
        }
    )
    if (!response.ok) {
        throw new Error("DELETE failed")
    }
    console.log("Record deleted")
}
removeRecord()