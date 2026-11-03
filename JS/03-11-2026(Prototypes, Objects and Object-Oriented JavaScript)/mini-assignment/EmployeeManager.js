export class EmployeeManager {
    #employees = [];

    add(employee) {
        this.#employees.push(employee);
    }

    getAll() {
        return [...this.#employees];
    }

    search(name) {
        return this.#employees.filter(employee =>
            employee.name.toLowerCase().includes(name.toLowerCase())
        );
    }

    delete(id) {
        this.#employees = this.#employees.filter(employee =>
            employee.id !== id
        );
    }
}