const output = document.getElementById("output")
function log(message) {
    output.textContent += message + "\n"
}
// 1. Callback function
function getUser(callback) {
    setTimeout(() => {
        const user = { id: 1, name: "Rahul" }
        callback(user)
    }, 1000)
}
// 2. Promise
function getProduct() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const product = { id: 101, name: "Laptop" }
            resolve(product)
        }, 1000)
    })
}
// 3. Promise chaining
function getUserDetails() {
    return Promise.resolve(10)
        .then(userId => {
            log("User ID: " + userId)
            return userId * 2
        })
        .then(result => {
            log("Next result: " + result)
            return result + 5
        })
        .then(finalResult => {
            log("Final result: " + finalResult)
        })
        .catch(error => {
            log("Error: " + error.message)
        })
}
// 4. Async/Await
async function displayProduct() {
    try {
        const product = await getProduct()
        log("Product: " + product.name)
    } catch (error) {
        log("Error: " + error.message)
    }
}
document.getElementById("callbackButton").addEventListener("click", () => {
    output.textContent = ""
    getUser(user => {
        log("Callback user: " + user.name)
    })
})
document.getElementById("promiseButton").addEventListener("click", () => {
    output.textContent = ""
    getProduct()
        .then(product => log("Promise product: " + product.name))
        .catch(error => log(error.message))
})
document.getElementById("asyncButton").addEventListener("click", () => {
    output.textContent = ""
    getUserDetails()
    displayProduct()
})