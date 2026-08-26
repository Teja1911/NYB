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

