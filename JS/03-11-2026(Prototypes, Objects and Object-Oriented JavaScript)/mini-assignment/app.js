import { Employee } from "./Employee.js";
import { Manager } from "./Manager.js";
import { EmployeeManager } from "./EmployeeManager.js";

const employeeManager = new EmployeeManager();

const nameInput = document.querySelector("#name");
const roleInput = document.querySelector("#role");
const salaryInput = document.querySelector("#salary");
const typeInput = document.querySelector("#type");
const list = document.querySelector("#employeeList");

function displayEmployees(employees) {
    list.innerHTML = "";

    employees.forEach(employee => {
        const li = document.createElement("li");
        li.textContent = employee.getDetails();

        const button = document.createElement("button");
        button.textContent = "Delete";

        button.addEventListener("click", () => {
            employeeManager.delete(employee.id);
            displayEmployees(employeeManager.getAll());
        });

        li.append(button);
        list.append(li);
    });
}

document.querySelector("#add").addEventListener("click", () => {
    try {
        const name = nameInput.value.trim();
        const role = roleInput.value.trim();
        const salary = Number(salaryInput.value);

        if (!name || !role || salaryInput.value === "") {
            throw new Error("Please fill in all fields.");
        }

        const employee = typeInput.value === "manager"
            ? new Manager(name, role, salary, "Development")
            : new Employee(name, role, salary);

        employeeManager.add(employee);
        displayEmployees(employeeManager.getAll());

        nameInput.value = "";
        roleInput.value = "";
        salaryInput.value = "";
    } catch (error) {
        alert(error.message);
    }
});

document.querySelector("#searchBtn").addEventListener("click", () => {
    displayEmployees(employeeManager.search(
        document.querySelector("#search").value
    ));
});

document.querySelector("#showAll").addEventListener("click", () => {
    displayEmployees(employeeManager.getAll());
});