// FILE: object-oriented-javascript.js
// TOPIC: Object-Oriented JavaScript (OOP)
// IIFE prevents variable conflicts with other practice files.
(function () {
    console.clear()
    console.log("========== 1. OBJECTS ==========")
    // An object stores related data and functions together.
    const employee = {
        id: 101,
        name: "Rahul",
        role: "Frontend Developer",
        salary: 35000,
        displayDetails: function () {
            console.log(
                `ID: ${this.id}, Name: ${this.name}, Role: ${this.role}`
            )
        }
    }
    console.log(employee.name)
    employee.displayDetails()

    // 2. CONSTRUCTOR FUNCTIONS
    console.log("\n========== 2. CONSTRUCTOR FUNCTIONS ==========")
    // A constructor function creates multiple similar objects.
    function Employee(id, name, salary) {
        this.id = id
        this.name = name
        this.salary = salary
    }
    Employee.prototype.displayDetails = function () {
        console.log(
            `ID: ${this.id}, Name: ${this.name}, Salary: ${this.salary}`
        )
    }
    const employeeOne = new Employee(101, "Rahul", 35000)
    const employeeTwo = new Employee(102, "Priya", 42000)
    employeeOne.displayDetails()
    employeeTwo.displayDetails()

    // 3. CLASSES AND CONSTRUCTORS
    console.log("\n========== 3. CLASSES AND CONSTRUCTORS ==========")
    class Student {
        constructor(name, course) {
            this.name = name
            this.course = course
        }
        displayDetails() {
            console.log(`${this.name} is learning ${this.course}.`)
        }
    }
    const studentOne = new Student("Arjun", "JavaScript")
    const studentTwo = new Student("Sneha", "React")
    studentOne.displayDetails()
    studentTwo.displayDetails()
    // 4. INSTANCE METHODS AND STATIC METHODS
    console.log("\n========== 4. INSTANCE AND STATIC METHODS ==========")
    class Calculator {
        constructor(number) {
            this.number = number
        }
        // Instance method: called using an object.
        double() {
            return this.number * 2
        }
        // Static method: called using the class itself.
        static add(firstNumber, secondNumber) {
            return firstNumber + secondNumber
        }
    }
    const calculator = new Calculator(10)
    console.log("Double:", calculator.double())
    console.log("Addition:", Calculator.add(10, 20))

    // 5. GETTERS AND SETTERS
    console.log("\n========== 5. GETTERS AND SETTERS ==========")
    class BankAccount {
        constructor(owner, initialBalance) {
            this.owner = owner
            this._balance = initialBalance
        }
        // Getter allows balance to be read like a property.
        get balance() {
            return this._balance
        }
        // Setter validates a new balance before updating it.
        set balance(newBalance) {
            if (typeof newBalance !== "number" || newBalance < 0) {
                console.log("Invalid balance. Enter a non-negative number.")
                return
            }
            this._balance = newBalance
        }
    }
    const account = new BankAccount("Rahul", 5000)
    console.log("Initial balance:", account.balance)
    account.balance = 8000
    console.log("Updated balance:", account.balance)
    account.balance = -1000
    console.log("Balance after invalid update:", account.balance)

    // 6. INHERITANCE, EXTENDS AND SUPER
    console.log("\n========== 6. INHERITANCE ==========")
    class Person {
        constructor(name, age) {
            this.name = name
            this.age = age
        }
        introduce() {
            console.log(`My name is ${this.name}. I am ${this.age} years old.`)
        }
    }
    class Developer extends Person {
        constructor(name, age, technology) {
            // super() calls the parent class constructor.
            super(name, age)
            this.technology = technology
        }
        writeCode() {
            console.log(`${this.name} writes code using ${this.technology}.`)
        }
    }
    const developer = new Developer("Priya", 25, "React")
    developer.introduce()
    developer.writeCode()

    // 7. ENCAPSULATION USING PRIVATE FIELDS
    console.log("\n========== 7. ENCAPSULATION ==========")
    class EmployeeSalary {
        #salary
        constructor(name, salary) {
            this.name = name
            if (typeof salary !== "number" || salary < 0) {
                throw new Error("Salary must be a non-negative number.")
            }

            this.#salary = salary
        }
        getSalary() {
            return this.#salary
        }
        increaseSalary(amount) {
            if (typeof amount !== "number" || amount <= 0) {
                console.log("Increase amount must be greater than zero.")
                return
            }
            this.#salary += amount
        }
    }
    const salaryDetails = new EmployeeSalary("Arjun", 30000)
    console.log("Original salary:", salaryDetails.getSalary())
    salaryDetails.increaseSalary(5000)
    console.log("Updated salary:", salaryDetails.getSalary())
    // Private fields cannot be accessed directly.
    // console.log(salaryDetails.#salary); // SyntaxError

    // 8. POLYMORPHISM
    console.log("\n========== 8. POLYMORPHISM ==========")
    class FullStackDeveloper extends Person {
        work() {
            console.log(`${this.name} develops frontend and backend applications.`)
        }
    }
    class UIUXDesigner extends Person {
        work() {
            console.log(`${this.name} designs user interfaces and experiences.`)
        }
    }
    const teamMembers = [
        new FullStackDeveloper("Rahul", 26),
        new UIUXDesigner("Sneha", 24)
    ]
    // Same method name, different behavior.
    teamMembers.forEach(function (member) {
        member.work()
    })

    // 9. PROTOTYPES AND THE PROTOTYPE CHAIN
    console.log("\n========== 9. PROTOTYPES ==========")
    function Product(name, price) {
        this.name = name
        this.price = price
    }
    Product.prototype.displayProduct = function () {
        console.log(`${this.name} costs ₹${this.price}.`)
    }
    const laptop = new Product("Laptop", 55000)
    const mobile = new Product("Mobile", 20000)
    laptop.displayProduct()
    mobile.displayProduct()
    console.log(
        "Shared prototype method:",
        Object.getPrototypeOf(laptop).displayProduct ===
        Object.getPrototypeOf(mobile).displayProduct
    )
    console.log(
        "Product prototype found:",
        Product.prototype.isPrototypeOf(laptop)
    )

    // 10. OBJECT KEYS, VALUES AND ENTRIES
    console.log("\n========== 10. OBJECT METHODS ==========")
    const project = {
        projectName: "Employee Management System",
        technology: "JavaScript",
        status: "In Progress"
    }
    console.log("Keys:", Object.keys(project))
    console.log("Values:", Object.values(project))
    console.log("Entries:", Object.entries(project))

    // 11. OBJECT ASSIGN AND SPREAD SYNTAX
    console.log("\n========== 11. COPYING OBJECTS ==========")
    const originalEmployee = {
        name: "Rahul",
        role: "Frontend Developer"
    }
    // Object spread creates a shallow copy.
    const copiedEmployee = { ...originalEmployee }
    copiedEmployee.role = "Full Stack Developer"
    console.log("Original:", originalEmployee)
    console.log("Copied:", copiedEmployee)
    // Object.assign() can also create a shallow copy.
    const anotherCopy = Object.assign({}, originalEmployee)
    console.log("Another copy:", anotherCopy)

    // 12. PRACTICAL EMPLOYEE MANAGEMENT EXAMPLE
    console.log("\n========== 12. PRACTICAL EXAMPLE ==========")
    class CompanyEmployee {
        constructor(id, name, role, salary) {
            this.id = id
            this.name = name
            this.role = role
            this.salary = salary
        }
        getAnnualSalary() {
            return this.salary * 12
        }
        displayEmployee() {
            console.log(
                `Employee: ${this.name} | Role: ${this.role} | ` +
                `Monthly Salary: ₹${this.salary} | ` +
                `Annual Salary: ₹${this.getAnnualSalary()}`
            )
        }
    }
    const companyEmployees = [
        new CompanyEmployee(1, "Rahul", "Frontend Developer", 35000),
        new CompanyEmployee(2, "Priya", "Backend Developer", 45000),
        new CompanyEmployee(3, "Arjun", "Full Stack Developer", 60000)
    ]
    companyEmployees.forEach(function (companyEmployee) {
        companyEmployee.displayEmployee()
    })
    const highSalaryEmployees = companyEmployees.filter(function (companyEmployee) {
        return companyEmployee.salary >= 45000
    })
    console.log(
        "Employees earning ₹45,000 or more:",
        highSalaryEmployees.map(function (companyEmployee) {
            return companyEmployee.name;
        })
    )

    // END OF OOP PRACTICE
    console.log("\n========== OOP PRACTICE COMPLETED ==========")
})()