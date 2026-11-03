class Employee {
    #salary;

    constructor(name, salary) {
        this.name = name;
        this.#salary = salary;
    }

    get salary() {
        return this.#salary;
    }

    set salary(value) {
        if (value < 0) throw new Error("Invalid salary");
        this.#salary = value;
    }

    static company() {
        return "NYB Infotech";
    }
}

const employee = new Employee("Teja", 45000);

console.log(employee.salary);

employee.salary = 50000;
console.log(employee.salary);

// Static method: call using class name
console.log(Employee.company());