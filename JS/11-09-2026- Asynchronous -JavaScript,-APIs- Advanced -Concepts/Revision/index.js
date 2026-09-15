// 1. Sync + Async + Timers

console.log("Start");

const timer = setTimeout(() => {
    console.log("Timeout");
}, 1000);

console.log("End");


// 2. Callback

function greetUser(name) {
    console.log("Hello " + name);
}

function loginUser(callback) {
    callback("Tej");
}

loginUser(greetUser);


// 3. Promise + then + catch + finally

function checkOrder() {
    return new Promise((resolve, reject) => {

        const success = true;

        if (success) {
            resolve("Order confirmed");
        } else {
            reject("Order failed");
        }
    });
}

checkOrder()
    .then(result => console.log(result))
    .catch(error => console.log(error))
    .finally(() => console.log("Order process finished"));


// 4. Promise.all

Promise.all([
    Promise.resolve("User loaded"),
    Promise.resolve("Orders loaded")
])
.then(data => console.log("All:", data));


// 5. Promise.race

Promise.race([
    new Promise(resolve =>
        setTimeout(() => resolve("Fast"), 500)
    ),
    new Promise(resolve =>
        setTimeout(() => resolve("Slow"), 1500)
    )
])
.then(result => console.log("Race:", result));


// 6. Promise.allSettled

Promise.allSettled([
    Promise.resolve("Success"),
    Promise.reject("Failed")
])
.then(result => console.log("Settled:", result));


// 7. Promise.any

Promise.any([
    Promise.reject("Server 1 failed"),
    Promise.resolve("Server 2 success")
])
.then(result => console.log("Any:", result));


// 8. Async/Await + Fetch + Error Handling

async function loadUser() {

    try {

        console.log("Loading user...");

        const response =
            await fetch(
                "https://jsonplaceholder.typicode.com/users/1"
            );

        if (!response.ok) {
            throw new Error("Request failed");
        }

        const user =
            await response.json();

        console.log("User:", user);

    } catch (error) {

        console.log("Error:", error.message);

    } finally {

        console.log("API finished");
    }
}

loadUser();


// 9. POST

async function createPost() {

    const response =
        await fetch(
            "https://jsonplaceholder.typicode.com/posts",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    title: "Learn JavaScript",
                    body: "Practice APIs",
                    userId: 1
                })
            }
        );

    const data = await response.json();

    console.log("POST:", data);
}

createPost();


// 10. PUT

fetch(
    "https://jsonplaceholder.typicode.com/posts/1",
    {
        method: "PUT",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            title: "Updated title",
            body: "Updated body",
            userId: 1
        })
    }
)
.then(response => response.json())
.then(data => console.log("PUT:", data));


// 11. PATCH

fetch(
    "https://jsonplaceholder.typicode.com/posts/1",
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
.then(response => response.json())
.then(data => console.log("PATCH:", data));


// 12. DELETE

fetch(
    "https://jsonplaceholder.typicode.com/posts/1",
    {
        method: "DELETE"
    }
)
.then(response => {

    if (response.ok) {
        console.log("DELETE: Success");
    }

});


// 13. Interval + clearInterval

let count = 0;

const interval = setInterval(() => {

    count++;

    console.log("Count:", count);

    if (count === 3) {
        clearInterval(interval);
    }

}, 1000);


// 14. clearTimeout

const cancelTimer = setTimeout(() => {
    console.log("This will not execute");
}, 3000);

clearTimeout(cancelTimer);


// 15. Module / Class / Prototype concepts
// Keep these in separate files when practicing modules.

// Class
class Employee {

    constructor(name) {
        this.name = name;
    }

    showName() {
        console.log("Employee:", this.name);
    }
}

const employee = new Employee("Tej");

employee.showName();


// Generator

function* numbers() {

    yield 10;
    yield 20;
}

const generator = numbers();

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());