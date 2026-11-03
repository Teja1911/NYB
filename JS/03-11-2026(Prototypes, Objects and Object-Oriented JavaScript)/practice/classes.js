class Employee{
    constructor(name,role){
        this.name=name
        this.role=role
    }
    introduce(){
        console.log(`${this.name} works as ${this.role}`)
    }
}
const employee=new Employee("Teja","Frontend Developer")
employee.introduce()