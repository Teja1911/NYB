const BASE_URL = "https://jsonplaceholder.typicode.com/users";


// GET
export async function getEmployees() {

    const response = await fetch(BASE_URL);

    if (!response.ok) {
        throw new Error("Failed to fetch employees");
    }

    return await response.json();
}


// POST
export async function createEmployee(employee) {

    const response = await fetch(BASE_URL, {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(employee)
    });

    if (!response.ok) {
        throw new Error("Failed to create employee");
    }

    return await response.json();
}


// PUT
export async function updateEmployee(employeeId, employee) {

    const response = await fetch(
        `${BASE_URL}/${employeeId}`,
        {
            method: "PUT",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(employee)
        }
    );

    if (!response.ok) {
        throw new Error("Failed to update employee");
    }

    return await response.json();
}


// PATCH
export async function updateEmployeeEmail(
    employeeId,
    email
) {

    const response = await fetch(
        `${BASE_URL}/${employeeId}`,
        {
            method: "PATCH",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                email: email
            })
        }
    );

    if (!response.ok) {
        throw new Error("Failed to update employee email");
    }

    return await response.json();
}


// DELETE
export async function deleteEmployee(employeeId) {

    const response = await fetch(
        `${BASE_URL}/${employeeId}`,
        {
            method: "DELETE"
        }
    );

    if (!response.ok) {
        throw new Error("Failed to delete employee");
    }

    return true;
}