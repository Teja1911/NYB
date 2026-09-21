// ES6 Features
// let,const,arrow function,template literals,default parameter,rest parameter,spread,destructuring,classes,modules,map,set,optional chaining,nullish ??,for of,generators

// Destructuring
// Destructuring allows you to extract values from arrays or objects into separate variables.
const employeeInfo = {
    name: "Tej",
    role: "Developer",
    salary: 50000
}
const {name: employeeName,role: employeeRole} = employeeInfo
console.log(employeeName)
console.log(employeeRole)
// Object Destructuring
const bookDetails = {
    title: "JavaScript",
    author: "John"
}
const { title, author } = bookDetails
console.log(title)
console.log(author)
// Renam
const productRecord = {
    name: "Laptop",
    price: 60000
}
// You don't want a variable called name.
const {name: productName,price: productPrice} = productRecord
console.log(productName)
console.log(productPrice)
// Default Value During Destructuring
const movieDetails = {
    title: "Avatar"
}
const {title: movieTitle,genre: movieGenre = "Unknown"} = movieDetails
console.log(movieTitle)
console.log(movieGenre)

// Spread and Rest
const frontendSkills = [
    "HTML",
    "CSS"
]
const backendSkills = [
    "Node",
    "Express"
]
const fullStackSkills = [
    ...frontendSkills,
    ...backendSkills
]
console.log(fullStackSkills)
// Spread to Copy an Array
const originalScores = [70, 80, 90]
const copiedScores = [...originalScores]
console.log(copiedScores)
// Spread with Objects
const basicEmployee = {
    name: "Tej",
    role: "Developer"
}
const detailedEmployee = {
    ...basicEmployee,
    experience: "6 months"
}
console.log(detailedEmployee)
// Updating employee using spread
const currentUser = {
    name: "Tej",
    age: 25,
    role: "Developer"
}
const updatedUser = {
    ...currentUser,
    age: 26
}
console.log(updatedUser)

// Rest Parameter
// Rest in Function Parameters
function calculateAverage(...scoreValues) {
    const totalScore = scoreValues.reduce(
        (runningTotal, currentScore) =>
            runningTotal + currentScore,
        0
    )
    return totalScore / scoreValues.length
}
console.log(calculateAverage(80, 90, 70))
// Rest in Object Destructuring
const accountDetails = {
    username: "Tej",
    role: "Developer",
    location: "Hyderabad",
    experience: "6 months"
}
const {username: accountUsername,...remainingAccountDetails} = accountDetails
console.log(accountUsername)
console.log(remainingAccountDetails)
// Rest in Array Destructuring
const numberSeries = [
    10,
    20,
    30,
    40
]
const [firstNumber,...remainingNumbers] = numberSeries
console.log(firstNumber)
console.log(remainingNumbers)

// Template Literals
// used for dynamic strings 
// Instead of:
const greetingText = "Hello " + "Tej"
// use:
const visitorName = "Tej"
const welcomeText = `Hello ${visitorName}`
console.log(welcomeText)

// Optional Chaining
// Problem:
const customerInfo = {
    name: "Tej"
}
// console.log(customerInfo.address.city);
// This throws because address is undefined.
// Use:
console.log(customerInfo.address?.city)

// Nullish Coalescing
// ?? provides a fallback only when the left side is:
// null
// undefined
// || → falsy fallback
// ?? → null/undefined fallback
const savedLanguage = null
const selectedLanguage = savedLanguage ?? "English"
console.log(selectedLanguage)

// Map
// Map stores key-value pairs.
const employeeMap = new Map()
employeeMap.set(101, "Tej")
employeeMap.set(102, "Maya")
console.log(employeeMap.get(101))
// check
console.log(employeeMap.has(102))
// delete
employeeMap.delete(102)

// Set
// Stores unique values.
const uniqueCities = new Set([
    "Hyderabad",
    "Delhi",
    "Hyderabad",
    "Mumbai"
])
console.log(uniqueCities)
// Convert to array:
const cityArray = [...uniqueCities]
console.log(cityArray)

// WeakMap
// WeakMap stores key-value pairs where keys must be objects.
const privateStore = new WeakMap();
const employeeObject = {
    name: "Tej"
}
privateStore.set(employeeObject, {salary: 50000})
console.log(privateStore.get(employeeObject))

// WeakSet
// WeakSet stores objects as weakly held members.
const processedObjects = new WeakSet()
const requestObject = {
    id: 101
}
processedObjects.add(requestObject)
console.log(processedObjects.has(requestObject))