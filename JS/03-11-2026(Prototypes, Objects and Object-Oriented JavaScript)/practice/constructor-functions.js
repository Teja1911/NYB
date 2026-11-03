function Employee(name,role){
    this.name=name
    this.role=role
}
Employee.prototype.introduce=function(){
    console.log(`${this.name} is a ${this.role}`)
}
const employee1=new Employee("Teja","Developer")
const employee2=new Employee("Surya","Tester")
employee1.introduce()
employee2.introduce()