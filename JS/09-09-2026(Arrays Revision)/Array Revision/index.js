// Array 
// An array is an ordered collection of values.
// Creating Array
// Empty Array
console.log("Empty Array:")
const users=[]
console.log(users)
// Array with values
console.log("Array with values:")
const numbers=[10,20,30]
console.log(numbers)
// Array with mixed values
console.log("Array mixed values:")
const data=["Teja",25,true]
console.log(data)
// Accessing array elements
console.log("Accessing Elements:") 
const skills=["HTML","CSS","JS","React"]
console.log(skills[2])
// Last Element 
console.log("Last Element:")
console.log(skills[skills.length-1])
// Updating Array Elements
console.log("Updating array:")
skills[1]="Tailwind CSS"
console.log(skills)
// Adding Elements
// push : add at end
console.log("push:")
users.push("Teja")
users.push("Surya")
console.log(users)
// unshift : add at beginning
console.log("unshift:")
skills.unshift("Git")
console.log(skills)
// Remove Elements
// pop : remove at end
console.log("pop():")
skills.pop()
console.log(skills)
// shift : remove at beginning
console.log("shift():")
skills.shift()
console.log(skills)
// splice
// Used to add/remove/replace elements at specific positions.
console.log("splice():")
// remove
skills.splice(1,1)
console.log(skills)
// add
skills.splice(1,0,"CSS")
console.log(skills)
// slice
// slice() extracts part of an array without modifying the original array.
console.log("slice():")
const frontendSkills=skills.slice(0,2)
console.log(frontendSkills)  
// Searching Elements
// includes
// return boolean value if value exists or else -1
console.log(skills.includes("JS"))
// indexOf
// Returns the index value
console.log(skills.indexOf("CSS"))
// find
// find() returns the first element that matches a condition or else undefined
const employees = [
    {
        id: 1,
        name: "Tej",
        role: "Frontend"
    },
    {
        id: 2,
        name: "David",
        role: "Backend"
    }
]
console.log("find():")
const employee=employees.find(employee=>employee.id===2)
console.log(employee)
// findIndex()
// returns the index of the first matching element or else -1 
console.log("findIndex():")
const index=employees.findIndex(employee=>employee.id===2)
console.log(index)
// filter()
// filters return all matching elements 
console.log("filter():")
const role=employees.filter(employee=>employee.role==="Backend")
console.log(role)
// map()
// map() creates a  new array by transforming every element
console.log("map():")
const double=numbers.map(num=>num*2)
console.log(double)
const names=employees.map(employee=>employee.name)
console.log(names)
// reduce
console.log("reduce():")
const sum=numbers.reduce((sum,num)=>{return sum+num},0)
console.log(sum)
// some()
// checks Does at least one item satisfy the condition?
console.log("some():")
const marks = [35,55,70]
const hasFailed=marks.some(mark=>mark<40)
console.log(hasFailed)
// every()
// checks Does all items satisfy the condition?
console.log("every():")
const passed=marks.every(mark=>mark>=40)
console.log(passed)
// forEach() 
// Executes a function for every elements 
console.log("forEach():")
skills.forEach(skill=>console.log(skill))
// sort()
// sorts array
console.log("sort():")
console.log(skills.sort())
// for sorting numbers we use the sort((a,b)=>b-a) for descending order and for ascending order a-b
console.log(numbers.sort((a,b)=>b-a))
// join 
// converts the element into string 
console.log("join():")
console.log(skills.join(", "))
// flat()
console.log("flat():")
const num = [
    [1, 2],
    [3, 4],
    [5, 6]
]
console.log(num.flat())
const number=[
    [1,[2,3]],
    [4,5]
]
// for the deeper or nested array we use array.flat(Infinity)
console.log(number.flat(Infinity))
// Set()
// Removes the duplicate numbers 
const duplicate=[1,3,4,5,2,4,5,6,2,5,7,8]
const original=[...new Set(duplicate)]
console.log(duplicate)
console.log(original.sort((a,b)=>a-b))

// Object:
console.log("Object:")
// creating object
console.log("Empty Object:")
const obj={}
console.log(obj)
console.log("Object with keys and values:")
const obj1={
    name:"Teja",
    age:22
}
console.log(obj1)
// Accessing Object
console.log("Accessing Object:")
// dot notation
console.log(obj1.name)
// bracket notation
console.log(obj1["age"])
// Updating Object
obj1.name="Surya"
console.log(obj1)
// Adding new property
console.log("Adding Property")
obj1.role="Frontend Developer"
console.log(obj1)
// delete property
console.log("Delete Property:")
delete obj1.role
console.log(obj1)
// Nested Object
console.log("Nested Object:")
const employee1={
    name:"Teja",
    address:{
        city:"Hyderabad",
        country:"India"
    }
}
console.log(employee1)
console.log(employee1.address.country)
// Object Methods
// Function stored as an object property is commonly calles as method
console.log("Object Method:")
const user={
    name:"Surya",
    greet(){
        console.log(`Hello ${this.name}`)
    }
}
user.greet()
// Object.keys()
// Returns an array of an object's own enumerable property names.
console.log("Object.keys():")
console.log(Object.keys(obj1))
// Object.values()
console.log("Object.values():")
console.log(Object.values(obj1))
// Object.entries()
// Returns key-value pairs in array
console.log("Object.entries():")
console.log(Object.entries(obj1))
// Object Copy
console.log("Shallow Copy:")
const copy1={...employee1}
console.log(copy1)
copy1.name="Surya" //It will does not change the value in original when we update in the object 
copy1.address.city="Chennai" // If we update the nested property value then it will update in the original object also
console.log(copy1)
console.log(employee1)
// Deep Copy
// A deep copy creates independent nested structures.
console.log("Deep Copy:")
const copy2=structuredClone(employee1)
copy2.name="Surya"
copy2.address.city="Hyderabad"
console.log(copy2)
console.log(employee1)
// cannot work for these type when we use json parse and stringify
// undefined
// functions
// Symbol
// certain special object types
const copy3=JSON.parse(JSON.stringify(employee1))
console.log(copy3)

// Modern Javascript:
// Destructuring
// Destructuring extracts values from arrays or properties from objects into variables.
console.log("Object Destructuring:")
const{name:username,age,position="developer"}=obj1
console.log(username)
console.log(age)
console.log(position)
console.log("Array Destructuring:")
const colors = ["Red","Blue","Green"]
const [first,,third] = colors
console.log(first)
console.log(third)

// Spread Operator
// It expands an iterable/object's contents in an appropriate context
console.log("Array Spread Operator:")
const allskills=[...skills,"git"]
console.log(allskills)
// Combining Arrays
const frontend=["HTML","CSS"]
const backend=["Node.js","Express"]
const fullStack=[...frontend,...backend]
console.log(fullStack)
console.log("Object Spread Operator:")
const updatedUser={
    ...employee1,
    experience:1
}
console.log(updatedUser)

// Rest
const{name,...otherDetails}=employee1
console.log(name)
console.log(otherDetails)

// Optional Chaining
// ?. means Continue only if the value before it is not null/undefined.
console.log("Nested Optional Chaining:")
console.log(obj1.address?.city)
const user3 = {
    profile: {
        address: {
            city: "Hyderabad"
        }
    }
}
console.log(user3.profile?.address?.city)
console.log("Optional Chaning with arrays:")
const users1 = [];
console.log(users1[0]?.name)

// Nullish Coalescing ??
console.log("Nullish Coalescing:")
const username1 = null
const displayName = username1 ?? "Guest"
console.log(displayName)