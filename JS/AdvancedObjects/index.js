// Object Destructuring 
// Object Destructuring allows to extract properties from object into the variable 
// Syntax





// const {property}=object
const user={
    name:"Teja",
    role:"Trainee",
    age:23
}
// Object Destructuring
const {name,role,age}=user
console.log(name)
console.log(role)
console.log(age)
// If we want to change the key name
const{name:userName}=user
console.log(userName)
// We want add the default value. It will be used when the property is undefined
const {city="Hyderabad"}=user
console.log(city)
// Nested Object Destructuring
const attendee={
    person:"Teja",
    ticket:{
        type:"Premium",
        price:1500
    }
}
const{
    person,
    ticket:{
        type,
        price
    }
}=attendee
console.log(type)
console.log(price)

// Object Methods
// Object can contain the function 
// Syntax:
// const sample={
//     greet(){
//         console.log("hello")
//     }
// }

const employee={
    name:"Teja",
    greet:function(){
        return `Hello ${this.name}`
    }
}
console.log(employee.greet())

// Object.keys
// syntax 
// Object.keys(object)
const keys=Object.keys(user)
console.log(keys)

// Object.values
// Syntax 
// Object.values(object)
console.log(Object.values(user))

// Object.entires
// Syntax
// Object.entires(object)
console.log(Object.entries(user))

// Object.assign
// Syntax
// Object.assign(
// target,
// source1,
// source2
// )
console.log(Object.assign({},user,attendee))

// Optional Chaining
// console.log(user.address.city)
console.log(user.address?.city)

const response = {
    user: {
        profile: {
            name: "Tej"
        }
    }
}
console.log(response?.user?.profile?.name)


// Nullish Coalescing
const member=user.name ?? "Guest" // If the left side is null or undefined, use the right side.
console.log(member)

// Spread Operator 
const updatedUser={
    ...user,
    City:"Hyderabad"
}
console.log(updatedUser)

const otherDetails={
    state:"Telangana",
    pinCode:500037
}

const {name:extractedName,...restOfData}=user
console.log(restOfData)

