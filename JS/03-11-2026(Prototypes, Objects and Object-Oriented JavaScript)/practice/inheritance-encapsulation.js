class Employee{
    constructor(name){
        this.name=name
    }
    work(){
        console.log(`${this.name} is working`)
    }
}
class Manager extends Employee{
    constructor(name,team){
        super(name)
        this.team=team
    }
    manage(){
        console.log(`${this.name} manages ${this.team}`)
    }
}
const manager=new Manager("Teja","Frontend Team")
manager.work()
manager.manage()