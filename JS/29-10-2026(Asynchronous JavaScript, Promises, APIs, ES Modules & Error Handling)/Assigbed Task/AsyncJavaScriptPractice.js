// 1. SYNCHRONOUS VS ASYNCHRONOUS JAVASCRIPT
console.log("1. Start");
setTimeout(() => {
    console.log("3. Timeout callback");
}, 0);
console.log("2. End");
// Expected order:
// 1. Start
// 2. End
// 3. Timeout callback

// 2. CALLBACK FUNCTIONS
function getUserName(callback) {
    setTimeout(() => {
        const userName = "Tejas";
        callback(userName);
    }, 1000);
}
getUserName((name) => {
    console.log("Callback username:", name);
});

// 3. CALLBACK PROBLEM: NESTED CALLBACKS
function getUser(callback) {
    setTimeout(() => {
        callback({ id: 1, name: "Tejas" });
    }, 500);
}
function getUserOrders(userId, callback) {
    setTimeout(() => {
        callback(["Laptop", "Keyboard"]);
    }, 500);
}
function getOrderDetails(orderName, callback) {
    setTimeout(() => {
        callback(`${orderName} details loaded`);
    }, 500);
}
getUser((user) => {
    console.log("User:", user);
    getUserOrders(user.id, (orders) => {
        console.log("Orders:", orders);
        getOrderDetails(orders[0], (details) => {
            console.log("Order details:", details);
        });
    });
});

// 4. CONVERT A CALLBACK INTO A PROMISE
function getUserNamePromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Promise username: Tejas");
        }, 1000);
    });
}
getUserNamePromise()
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error(error.message);
    })
    .finally(() => {
        console.log("Username operation finished");
    });

// 5. PROMISE STATES
const productPromise = new Promise((resolve, reject) => {
    const productFound = true;
    setTimeout(() => {
        if (productFound) {
            resolve("Product found");
        } else {
            reject(new Error("Product not found"));
        }
    }, 500);
});
productPromise
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error(error.message);
    });

// 6. PROMISE CHAINING
Promise.resolve(10)
    .then((number) => {
        console.log("Initial value:", number);
        return number * 2;
    })
    .then((number) => {
        console.log("Doubled value:", number);
        return number + 5;
    })
    .then((number) => {
        console.log("Final value:", number);
    })
    .catch((error) => {
        console.error("Chain error:", error.message);
    });

// 7. ASYNC / AWAIT
function fetchSampleProduct() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                id: 101,
                title: "Wireless Mouse",
                price: 799
            });
        }, 1000);
    });
}
async function displaySampleProduct() {
    try {
        console.log("Loading sample product...");
        const product = await fetchSampleProduct();
        console.log("Product received:", product);
    } catch (error) {
        console.error("Product error:", error.message);
    } finally {
        console.log("Sample product operation finished");
    }
}
displaySampleProduct();

// 8. THROWING AND CATCHING ERRORS
async function validateProductPrice(price) {
    try {
        if (price <= 0) {
            throw new Error("Price must be greater than zero");
        }
        console.log("Valid product price:", price);
    } catch (error) {
        console.error("Validation error:", error.message);
    } finally {
        console.log("Price validation finished");
    }
}
validateProductPrice(500);
validateProductPrice(-10);

// 9. PROMISE UTILITY METHODS
function createDelayedValue(value, delay, shouldFail = false) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldFail) {
                reject(new Error(`${value} failed`));
            } else {
                resolve(value);
            }
        }, delay);
    });
}
// Promise.all: all must succeed
Promise.all([
    createDelayedValue("Products", 500),
    createDelayedValue("Categories", 700)
])
    .then((results) => {
        console.log("Promise.all:", results);
    })
    .catch((error) => {
        console.error("Promise.all error:", error.message);
    });
// Promise.allSettled: wait for all to settle
Promise.allSettled([
    createDelayedValue("Request A", 300),
    createDelayedValue("Request B", 500, true)
]).then((results) => {
    console.log("Promise.allSettled:", results);
});
// Promise.race: first settled result wins
Promise.race([
    createDelayedValue("Fast request", 300),
    createDelayedValue("Slow request", 1000)
])
    .then((result) => {
        console.log("Promise.race:", result);
    })
    .catch((error) => {
        console.error("Promise.race error:", error.message);
    });
// Promise.any: first successful result wins
Promise.any([
    createDelayedValue("Failed request", 300, true),
    createDelayedValue("Successful request", 700)
])
    .then((result) => {
        console.log("Promise.any:", result);
    })
    .catch((error) => {
        console.error("All requests failed:", error.message);
    });

// 10. FETCH API: GET REQUEST
async function getSampleProducts() {
    try {
        console.log("Fetching products...");
        const response = await fetch("https://fakestoreapi.com/products?limit=5");
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        const products = await response.json();
        console.log("Products received:", products);
    } catch (error) {
        console.error("API request failed:", error.message);
    }
}
document
    .getElementById("runApiButton")
    .addEventListener("click", getSampleProducts);

// 11. POST REQUEST WITH HEADERS AND JSON BODY
async function createSampleProduct() {
    try {
        const response = await fetch("https://fakestoreapi.com/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: "Practice Product",
                price: 299,
                description: "A product created for API practice",
                image: "https://i.pravatar.cc",
                category: "electronics"
            })
        });
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        const createdProduct = await response.json();
        console.log("Created product response:", createdProduct);
    } catch (error) {
        console.error("Create product failed:", error.message);
    }
}

// 12. PUT, PATCH AND DELETE REQUESTS
async function updateSampleProduct() {
    try {
        const response = await fetch("https://fakestoreapi.com/products/1", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: "Updated Practice Product",
                price: 999,
                description: "Updated description",
                image: "https://i.pravatar.cc",
                category: "electronics"
            })
        });
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        console.log("PUT result:", await response.json());
    } catch (error) {
        console.error("PUT failed:", error.message);
    }
}
async function patchSampleProduct() {
    try {
        const response = await fetch("https://fakestoreapi.com/products/1", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                price: 899
            })
        });
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        console.log("PATCH result:", await response.json());
    } catch (error) {
        console.error("PATCH failed:", error.message);
    }
}
async function deleteSampleProduct() {
    try {
        const response = await fetch("https://fakestoreapi.com/products/1", {
            method: "DELETE"
        });
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        console.log("DELETE status:", response.status);
    } catch (error) {
        console.error("DELETE failed:", error.message);
    }
}

// 13. RUN PROMISE EXAMPLE FROM THE BUTTON
document
    .getElementById("runPromiseButton")
    .addEventListener("click", () => {
        getUserNamePromise()
            .then((message) => console.log(message))
            .catch((error) => console.error(error.message));
    });

// 14. MULTIPLE ASYNC OPERATIONS
async function loadDashboardData() {
    try {
        const [products, categories] = await Promise.all([
            fetch("https://fakestoreapi.com/products?limit=3"),
            fetch("https://fakestoreapi.com/products/categories")
        ]);
        if (!products.ok || !categories.ok) {
            throw new Error("One or more dashboard requests failed");
        }
        const productData = await products.json();
        const categoryData = await categories.json();
        console.log("Dashboard products:", productData);
        console.log("Dashboard categories:", categoryData);
    } catch (error) {
        console.error("Dashboard loading failed:", error.message);
    }
}
loadDashboardData();

// 15. MODULE EXAMPLE
// ES modules use import/export.
// They cannot be demonstrated as real module imports
// inside this classic script file.
//
// See the Product Management Assessment files for
// config.js, api.js, productService.js, ui.js and app.js.