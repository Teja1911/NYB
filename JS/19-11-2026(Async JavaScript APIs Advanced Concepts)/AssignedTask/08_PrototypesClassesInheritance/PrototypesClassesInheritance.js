const output = document.getElementById("output")
function log(message) {
    output.textContent += message + "\n"
}
// 1. Constructor function and prototype
function Employee(name, salary) {
    this.name = name
    this.salary = salary
}
Employee.prototype.getDetails = function () {
    return `${this.name} earns ${this.salary}`
}
// 2. Class
class Person {
    constructor(name) {
        this.name = name
    }
    introduce() {
        return `My name is ${this.name}`
    }
}
// 3. Inheritance
class Developer extends Person {
    constructor(name, language) {
        super(name)
        this.language = language
    }
    writeCode() {
        return `${this.name} develops using ${this.language}`
    }
}
document.getElementById("runButton").addEventListener("click", () => {
    output.textContent = ""
    const employee = new Employee("Arun", 45000)
    log(employee.getDetails())
    const person = new Person("Priya")
    log(person.introduce())
    const developer = new Developer("Rahul", "JavaScript")
    log(developer.introduce())
    log(developer.writeCode())
    log(
        "Developer inherits Person: " +
        (developer instanceof Person)
    )
})