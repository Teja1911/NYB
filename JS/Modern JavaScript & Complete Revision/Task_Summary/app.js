// ========================================
// TEAM TASK MANAGER
// ========================================

// ----------------------------------------
// 1. FUNCTIONS
// ----------------------------------------

function greetTeam(name) {
    return `Welcome ${name}!`;
}

console.log(greetTeam("Development Team"));


// ----------------------------------------
// 2. HIGHER ORDER FUNCTION
// ----------------------------------------

const tasks = [
    {
        id: 1,
        title: "Build Login Page",
        status: "completed",
        priority: "high"
    },
    {
        id: 2,
        title: "Create Dashboard",
        status: "pending",
        priority: "medium"
    },
    {
        id: 3,
        title: "Fix API Issue",
        status: "completed",
        priority: "high"
    }
];


// Function passed to another function
function processTasks(taskList, callback) {
    return taskList.map(callback);
}

const taskTitles = processTasks(
    tasks,
    task => task.title
);

console.log("Task Titles:", taskTitles);


// ----------------------------------------
// 3. OBJECT MANIPULATION
// ----------------------------------------

const task = tasks[0];

// Destructuring
const {
    title,
    status,
    priority
} = task;

console.log("Task:", title);
console.log("Status:", status);
console.log("Priority:", priority);


// Optional chaining + Nullish coalescing
const assignedUser =
    task.assignee?.name ?? "Not Assigned";

console.log("Assigned To:", assignedUser);


// Spread operator
const updatedTask = {
    ...task,
    status: "completed"
};

console.log("Updated Task:", updatedTask);


// ----------------------------------------
// 4. CLASSES
// ----------------------------------------

class Employee {

    constructor(name, role) {
        this.name = name;
        this.role = role;
    }

    login() {
        return `${this.name} logged in.`;
    }

    getDetails() {
        return `${this.name} - ${this.role}`;
    }
}


// ----------------------------------------
// 5. INHERITANCE
// ----------------------------------------

class Developer extends Employee {

    constructor(name, role, language) {

        super(name, role);

        this.language = language;
    }

    writeCode() {
        return `${this.name} is writing ${this.language} code.`;
    }
}


const developer =
    new Developer(
        "Tej",
        "Frontend Developer",
        "JavaScript"
    );

console.log(developer.getDetails());
console.log(developer.login());
console.log(developer.writeCode());


// ----------------------------------------
// 6. PROMISE
// ----------------------------------------

function fetchTasks() {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve(tasks);

        }, 1000);

    });
}


// ----------------------------------------
// 7. ASYNC / AWAIT
// ----------------------------------------

async function loadTasks() {

    console.log("Loading tasks...");

    try {

        const data = await fetchTasks();

        console.log("Tasks Loaded:", data);

        const completedTasks =
            data.filter(
                task => task.status === "completed"
            );

        console.log(
            "Completed Tasks:",
            completedTasks
        );

    } catch (error) {

        console.log(
            "Error:",
            error
        );

    }
}

loadTasks();


// ----------------------------------------
// 8. EVENT LOOP DEMONSTRATION
// ----------------------------------------

console.log("Start");

setTimeout(() => {
    console.log("Timer Callback");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise Callback");
});

console.log("End");