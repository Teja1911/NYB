//ES6 DataTypes
//Purpose ES6 Data Types it will help developers :
//Write Cleaner Code
//Manage Complex Data Easily 
//Avoid bugs 
//Improve Readability

// String
// Number
// Boolean
// Undefined
// Null
// Symbol (introduced in ES6)
// Object
// Array
// Function

//String
let name="Teja"
console.log("Variable data:",name,"Type of data:",typeof(name))
//Number
let num=19
console.log("Variable data:",num,"Type of data:",typeof(num))
//Boolean
let isStudent=true
console.log("Variable data:",isStudent,"Type of data:",typeof(isStudent))
//Null
let marks=null
console.log("Variable data:",marks,"Type of data:",typeof(marks))//It is object Type it is a Historical JavaScript Bug
//Undefined
let a
console.log("Variable data:",a,"Type of data:",typeof(a))
//Symbol
let sur=Symbol("class")
console.log("Variable data:",sur,"Type of data:",typeof(sur))
//Bigint
let big=1234567890123456789n
console.log("Variable data:",big,"Type of data:",typeof(big))
//Object
let obj={
    empid:920,
    role:"Associate Software Engineer",
    location:"Hyderabad"
}
console.log("Variable data:",obj.empid,"Type of data:",typeof(obj))
//Array
let colors=["White","Grey","Black","Blue"]
console.log("Variable data:",colors,"Type of data:",typeof(colors))
//Functions
function add(a,b){
    return a+b
}
console.log("Variable data:",add(19,12),"Type of data:",typeof(add))

//ES6 Object Destructing 
let student={
    name1:"Teja",
    course:"Web Development"
}
//Normal object
console.log(student)
console.log(student.course)
//Object Destructing
let {name1,course}=student
console.log(name1)
console.log(course)

//Array 
let fruits=["Apple","Banana","Cherry"]
console.log(fruits)
//Spread Operator
let ad=[...fruits,"Mango"]
console.log(ad)


//These are advanced ES6 Collection Objects
// 1.Set
// 2.Map
// 3.Weak Set
// 4.Weak Map

// 1.Set 
// The main purpose of the set is to have the Unique values and removes duplicates automatically
let numbers=new Set()
numbers.add(10)
numbers.add(19)
numbers.add(12)
numbers.add(10)//It is the duplicate value so the set will automatically removes it from set 
console.log(numbers)

let studentNo=[10,12,19,11,10]
console.log("Normal Array:",studentNo)
let setStudent=new Set(studentNo)
console.log("Set Array:",setStudent)
setStudent.add("Hello")//It will add the element to the array 
console.log(setStudent)
setStudent.delete(10)//It will delete the value from the array
console.log(setStudent) 
console.log(setStudent.has(12))//It will check whether the value is present in the array or not it will return the boolean value true if the value is available in the array or else it will return the false if the value is not present in the array 
console.log(setStudent)//Here we used the Set so it will remove the duplicates automatically 

//Weak Set stores:
// Unique Object References only 
// Weakly referenced objects
// Weak Set Only accepts the Objects 
let Employee = new WeakSet()
let obj1={
    name:"Teja",
    age:22
}
Employee.add(obj1)
console.log(Employee)
console.log(Employee.has(obj1))
Employee.delete(obj1)
console.log(Employee.has(obj1))

//Map
//purpose of Map:
//In Object converts keys to  strings datatype 
//In Map it will keep the original datatype as key
let data=new Map()
data.set(1,10)//To add the value to the map we will use the set method
data.set(true,"Boolean")
data.set("id",620)
console.log(data)
console.log("get to access the value:",data.get(1))//To access the particular value we use the get method
console.log("Has will check the value:",data.has("id"))//To check whether the value is available or not we use has method 
data.delete(true)//To delete the value from the map we use the delete method
console.log(data)