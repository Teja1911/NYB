//This Keyword refers to the object that is currently executing the function 
//This refers to how function is called 
console.log(this)
//This inside the object 
let student={
    name:"Teja",
    showName:function(){
        console.log(this.name)
    }
}
student.showName()
let car={
    brand:"BMW",
    display(){
        console.log(this.brand)
    }
}
car.display()
//This in Regular Function 
function demo(){
    console.log(this)
}
demo()
//This in Arrow Function
//Because the arrow functions does not bind their own this
let student1={
    name:"Teja",
    showName1:()=>{
        console.log(this.name)
    }
}

student1.showName1()
//This in Constructor Function 
function Student(name){
    this.name=name
}
let s1=new Student("Teja")
console.log(s1.name)

let user={
    name:"Teja",
    show(){
        let self=this
        function inner(){
            console.log(self.name)
        }
        inner()
    }
}
user.show()

//Arrow  function does not have their own this they will inherit from parent scope
//They will inherit this from the surrounding function  
let user1={
    name:"Teja",
    show(){ //This is a Method Shorthand for object Methods this is new ES6 feature 
        let inner=()=>{
            console.log(this.name)
        }
        inner()
    }
}
user1.show()

//Explicity Methods 
//call
//apply
//bind

//Call 
//Immediate Execution 
//When to use the call method -> When you the exact arguments you want to pass to the function . When you want a instant execution 

//Apply 
//Immediate Execution
//When to use the apply method -> When you have array of arguments you want to pass to the function . Useful with Math.min and Math.max functions

//Bind 
//Not Immediate Execution
//When to use bind method -> When you want to store a function for later use . Used in event handling and callback functions and react/async functions

function greet(){
    console.log(this.name)
}
let user3={
    name:"Teja"
}
greet.call(user3)

function introduce(city,role){
    console.log(`${this.name} lives in city ${city} and works has ${role}`)
}
let user4={
    name:"Teja"
}
introduce.call(
    user4,
    "Hyderabad",
    "Frontend Developer"
)

//Apply
let student2={
    name:"Teja"
}
function display(course,age){
    console.log(`${this.name} - ${course} - ${age}`)
}
display.apply(student2,["Frontend Development",22])

let numbers=[10,20,18,19,11,2,12]
console.log(Math.max.apply(null,numbers))

//bind 
let employ={
    name:"Teja"
}
function greet(){
    console.log(`Welcome ${this.name}`)
}
let gr=greet.bind(employ)
gr()

//Borrowing Methods
let employee={
    name:"Teja",
    detail(){
        console.log(this.name)
    }
}
let manager={
    name:"Surya"
}
employee.detail.call(manager)

//Event Handler
let button={
    text:"Submit",
    click(){
        console.log(this.text)
    }
}
button.click()



