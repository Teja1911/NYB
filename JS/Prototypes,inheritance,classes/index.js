// setPrototypeOf
const user={
    name:"Teja"
}

const userMethods={
    greet(){
        console.log(`Hello ${this.name}`)
    }
}

Object.setPrototypeOf(user,userMethods)
user.greet()

// __proto__
function Person(name){
    this.name=name
}
Person.prototype.greet=function(){
    console.log(`Hello ${this.name}`)
}
const person=new Person("Teja")
console.log(person.__proto__===Person.prototype)

// Construction Function 
function employee(name,role){
    this.name=name
    this.role=role
}
const employee1=new employee("Teja","Developer")
const employee2=new employee("Lucky","Tester")
console.log(employee1.name)
console.log(employee2.name)

//Classes
class users{
    constructor(name,role){
        this.name=name
        this.role=role
    }
    greet(){
        console.log(`Hello ${this.name}`)
    }
}
const user1=new users("Teja","Development")
user1.greet()

// Constructor
// Syntax
// class name{
//  constructor(parameters){
// initialize parameters
// }
// }

class cars{
    constructor(model,price){
        this.model=model
        this.price=price
    }
    car(){
        return `The ${this.model} is ₹${this.price}`
    }
}
const car1=new cars("BMW",10500000)
const car2=new cars("Audi",20000000)
console.log(car1.car())
console.log(car2.car())

//Methods 
class Car{
    constructor(brand){
        this.brand=brand
    }
    start(){
        console.log(`The ${this.brand} started`)
    }
    stop(){
        console.log(`The ${this.brand} stopped`)
    }
}
const vehicle=new Car("Toyota")
vehicle.start()
vehicle.stop()

// Inheritance
// It will take the methods from the parent class and used in the child class
class Employee{
    constructor(name,department){
        this.name=name
        this.department=department
    }
    login(){
        return `${this.name} Logged in`
    }
}
class Developer extends Employee{
    constructor(name,language){
        super(name,"Engineering")
        this.language=language
    }
    code(){
        return `${this.name} writes ${this.language}`
    }
}
const developer=new Developer("Teja","JavaScript")
console.log(developer.login())
console.log(developer.code())

// Encapsulation
// Encapsulation means building data and behaviour together while controlling the access to internal state
class BankAccount{
    #balance=0
    deposit(amount){
        this.#balance+=amount
    }
    getBalance(){
        return this.#balance
    }
} 
const account=new BankAccount()
account.deposit(10000)
console.log(account.getBalance())