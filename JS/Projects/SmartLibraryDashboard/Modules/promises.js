// ======================================
// promises.js
// Demonstrating Promise Methods
// ======================================

// Fake Books API
function booksAPI() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(["JavaScript","React","Node.js"])
        }, 2000)
    })
}

// Fake Authors API
function authorsAPI() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(["Kyle Simpson","Dan Abramov","Ryan Dahl"])
        }, 1500)
    })
}

// Fake Categories API
function categoriesAPI() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(["Programming","Frontend","Backend"])
        }, 1000)
    })
}
// Failed API
function failedAPI() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            reject("Publisher Server Failed")
        }, 1200)
    })
}

// ======================================
// Promise.all()
// ======================================

export async function loadLibraryData() {
    return Promise.all([booksAPI(),authorsAPI(),categoriesAPI()])
}

// ======================================
// Promise.race()
// ======================================

export async function fastestServer() {
    return Promise.race([booksAPI(),authorsAPI(),categoriesAPI()])
}

// ======================================
// Promise.any()
// ======================================

export async function firstSuccessfulServer() {
    return Promise.any([failedAPI(),booksAPI(),failedAPI()])
}

// ======================================
// Promise.allSettled()
// ======================================
export async function libraryReport() {
    return Promise.allSettled([booksAPI(),failedAPI(),authorsAPI(),categoriesAPI()
    ])
}