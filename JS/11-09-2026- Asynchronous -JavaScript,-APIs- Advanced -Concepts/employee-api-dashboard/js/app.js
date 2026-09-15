import {
    getEmployees,
    createEmployee,
    updateEmployee,
    updateEmployeeEmail,
    deleteEmployee
} from "./api.js";

import { Employee } from "./employee.js";


const employeeForm =
    document.querySelector("#employeeForm");

const nameInput =
    document.querySelector("#nameInput");

const emailInput =
    document.querySelector("#emailInput");

const employeeList =
    document.querySelector("#employeeList");

const loadingMessage =
    document.querySelector("#loadingMessage");

const errorMessage =
    document.querySelector("#errorMessage");

const successMessage =
    document.querySelector("#successMessage");


let employees = [];


// -----------------------------
// GET EMPLOYEES
// -----------------------------

async function loadEmployees() {

    try {

        loadingMessage.textContent =
            "Loading employees...";

        errorMessage.textContent = "";

        employees = await getEmployees();

        displayEmployees();

    } catch (error) {

        errorMessage.textContent =
            error.message;

    } finally {

        loadingMessage.textContent = "";
    }
}


// -----------------------------
// DISPLAY EMPLOYEES
// -----------------------------

function displayEmployees() {

    employeeList.innerHTML = "";

    employees.forEach(function(employeeData) {

        const employee =
            new Employee(
                employeeData.id,
                employeeData.name,
                employeeData.email
            );


        const card =
            document.createElement("div");

        card.classList.add("employee-card");


        card.innerHTML = `
            <h3>${employee.name}</h3>

            <p>${employee.email}</p>

            <button
                class="put-button"
                data-id="${employee.id}">
                PUT Update
            </button>

            <button
                class="patch-button"
                data-id="${employee.id}">
                PATCH Email
            </button>

            <button
                class="delete-button"
                data-id="${employee.id}">
                Delete
            </button>
        `;


        employeeList.append(card);
    });
}


// -----------------------------
// POST EMPLOYEE
// -----------------------------

employeeForm.addEventListener(
    "submit",
    async function(event) {

        event.preventDefault();

        const name =
            nameInput.value.trim();

        const email =
            emailInput.value.trim();


        if (!name || !email) {

            errorMessage.textContent =
                "Name and email are required.";

            return;
        }


        try {

            successMessage.textContent =
                "Creating employee...";

            errorMessage.textContent = "";


            const newEmployee = {

                name: name,

                email: email,

                username: name.toLowerCase()
            };


            const createdEmployee =
                await createEmployee(newEmployee);


            employees.push(createdEmployee);

            displayEmployees();


            successMessage.textContent =
                "Employee created successfully.";


            employeeForm.reset();

        } catch (error) {

            errorMessage.textContent =
                error.message;

        } finally {

            setTimeout(function() {

                successMessage.textContent = "";

            }, 2000);
        }
    }
);


// -----------------------------
// EVENT DELEGATION
// -----------------------------

employeeList.addEventListener(
    "click",
    async function(event) {

        const employeeId =
            Number(event.target.dataset.id);


        if (!employeeId) {
            return;
        }


        // PUT

        if (
            event.target.classList.contains(
                "put-button"
            )
        ) {

            await handlePut(employeeId);
        }


        // PATCH

        if (
            event.target.classList.contains(
                "patch-button"
            )
        ) {

            await handlePatch(employeeId);
        }


        // DELETE

        if (
            event.target.classList.contains(
                "delete-button"
            )
        ) {

            await handleDelete(employeeId);
        }
    }
);


// -----------------------------
// PUT
// -----------------------------

async function handlePut(employeeId) {

    try {

        const updatedEmployee = {

            name: "Updated Employee",

            email: "updated@example.com",

            username: "updatedemployee"
        };


        const response =
            await updateEmployee(
                employeeId,
                updatedEmployee
            );


        const index =
            employees.findIndex(
                function(employee) {
                    return employee.id === employeeId;
                }
            );


        if (index !== -1) {

            employees[index] = {
                ...employees[index],
                ...response
            };
        }


        displayEmployees();

        successMessage.textContent =
            "Employee updated using PUT.";

    } catch (error) {

        errorMessage.textContent =
            error.message;
    }
}


// -----------------------------
// PATCH
// -----------------------------

async function handlePatch(employeeId) {

    try {

        const response =
            await updateEmployeeEmail(
                employeeId,
                "newemail@example.com"
            );


        const employee =
            employees.find(
                function(employee) {
                    return employee.id === employeeId;
                }
            );


        if (employee) {

            employee.email =
                response.email;
        }


        displayEmployees();

        successMessage.textContent =
            "Email updated using PATCH.";

    } catch (error) {

        errorMessage.textContent =
            error.message;
    }
}


// -----------------------------
// DELETE
// -----------------------------

async function handleDelete(employeeId) {

    try {

        await deleteEmployee(employeeId);


        employees =
            employees.filter(
                function(employee) {
                    return employee.id !== employeeId;
                }
            );


        displayEmployees();

        successMessage.textContent =
            "Employee deleted successfully.";

    } catch (error) {

        errorMessage.textContent =
            error.message;
    }
}


// -----------------------------
// PROMISE.ALL EXAMPLE
// -----------------------------

async function loadInitialData() {

    try {

        const results =
            await Promise.all([
                getEmployees(),
                getEmployees()
            ]);


        console.log("Parallel API calls:", results);

    } catch (error) {

        console.log(
            "One of the requests failed:",
            error.message
        );
    }
}


// -----------------------------
// START APPLICATION
// -----------------------------

loadEmployees();

loadInitialData();