export class Employee {
    static nextId = 1001;
    static companyName = "NYB Infotech";
    #salary;

    constructor(name, role, salary) {
        this.id = Employee.nextId++;
        this.name = name;
        this.role = role;
        this.salary = salary;
    }

    get salary() {
        return this.#salary;
    }

    set salary(value) {
        if (!Number.isFinite(value) || value < 0) {
            throw new Error("Enter a valid salary.");
        }

        this.#salary = value;
    }

    getDetails() {
        return `${this.id} - ${this.name} - ${this.role} - ₹${this.salary}`;
    }
}