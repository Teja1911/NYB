// Objects
// Objects stores data using key-value pairs
// Syntax
// obj={key:value}
// Creation of array
const user={
    name:"Teja",
    age:22
}
// Accessing Values

// Access using Dot Notation
// Syntax : object.property
// Used in know property
console.log("Access using dot notation:",user.name)
console.log("Access using dot notation:",user.age)

// Access using Bracket Notation
// Syntax: object["property"]
// Used in dynamic property
console.log("Access using bracket notation:",user["name"])
console.log("Access using bracket notation:",user["age"])

// Adding Value
console.log("Adding Value:")
user.city="Hyderabad"
console.log(user)

// updating Object
console.log("Updating Value:")
user.age=26
console.log(user)

// Delete Object
console.log("Deleting Value:")
delete user.city
console.log(user)

// Nested Object
const user1={
    name:"Surya",
    age:22,
    address:{
        city:"Hyderabad",
        state:"Telagana"
    }
}
console.log(user1)
console.log(user1.address.city)

// Object Destructuring
// Syntax: const{property1,property2}=object
console.log("Object Destructuring:")
const{name,age}=user
console.log(name)
console.log(age)
// Rename during destructuring
// Syntax: const{property1:newProperty1Name}=object
console.log("Rename Object Destructuring")
const{name:userName,age:userAge}=user
console.log(userName)
console.log(userAge)
// Default value
const{name:UserName,city="Hyderabad"}=user
console.log(UserName)
console.log(city)
// Nested Destructuring
console.log("Nested Destructuring:")
const{name:employeeName,age:employeeAge,address:{city:employeeCity,state}}=user1
console.log(employeeName)
console.log(employeeAge)
console.log(employeeCity)
console.log(state)

// Spread
// It will expands
console.log("Spread:")
const newUser={...user}
console.log(newUser)
// Adding properties using spread
const updatedUser={
    ...user,
    city:"Chennai"
}
console.log(updatedUser)
// Updating properties using spread
const updatedUser1={
    ...user,
    age:22
}
console.log(updatedUser1)
// Merging Objects
const personal={
    name:"Teja",
    age:22
}
const professional={
    role:"Developer",
    experience:1
}
const profile={
    ...personal,
    ...professional
}
console.log(profile)
// Spread Conflict
// In these last property wins 
const first={
    name:"Teja"
}
const second={
    name:"Surya"
}
const result={
    ...second,...first
    
}
console.log(result)

// Rest Operator
// Collects the remaining details
// Syntax: const{name,...otherDetails}=user
console.log("Rest Operator:")
const{name:username,...details}=user1
console.log(username)
console.log(details)

// Object.keys
// Returns an array of an object's own enumerable property names.
// Syntax: Object.keys(objectname)
console.log(Object.keys(user1))

// Object.values()
// Returns the property values.
// Syntax: Object.values(objectname)
console.log(Object.values(user))

// Object.entries()
// Returns key-value pairs.
// Syntax: Object.entries(objectname)
console.log(Object.entries(user))

// Optional Chaining
// console.log(user.address.city)
console.log(user.address?.city)

// Nullish Coalescing
// ?? in these it will change when the values are null and undefined 
const user2=null
const displayName=user2 ?? "Guest"
console.log(displayName)

const user3=undefined
const displayUser=user3 ?? "Guest"
console.log(displayUser)

// || in these it will change when the values are falsy 
// 0 "" false null undefined NaN
const count=0
console.log(count || 10)

const foodCount=10
console.log(foodCount || 5)
