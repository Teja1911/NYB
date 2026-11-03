const person={
    greet(){
        console.log(`Hello, ${this.name}`)
    }
}
const employee=Object.create(person)
employee.name="Teja"
employee.role="Developer"
employee.greet()
console.log(Object.getPrototypeOf(employee)===person)