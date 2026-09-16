// Array
// When need store the multiple values in single variable 
// Syntax: const arrayName=["value1","value2","value3"]
const fruits=["Apple","Orange","Watermelon"]
// Accessing the values
console.log(fruits[0])
console.log(fruits[1])
// Last element
console.log(fruits[fruits.length-1])

// Adding and Removing Elements in array
// push add at the end
console.log("Push():")
fruits.push("Mango")
console.log(fruits)
// Pop remove element at the last of array
console.log("pop():")
fruits.pop()
console.log(fruits)
// unshift add the element at the first 
console.log("unshift():")
fruits.unshift("Mango")
console.log(fruits)
// shift it will remove the element at the first 
console.log("shift():")
fruits.shift()
console.log(fruits)

// Searching Array
// indexOf() if value exists it will give its index value or else -1
console.log("indexOf():")
const numbers=[10,20,30,40]
console.log(numbers.indexOf(40))
// includes() it will boolean value true if the value exists in the array
console.log(numbers.includes(20))
// lastIndexOf()
console.log(numbers.lastIndexOf(10,1))

// Array Iteration
// for
// for of 
// forEach
console.log("for():")
for(let i=0;i<numbers.length;i++){
    console.log(numbers[i])
}
console.log("for of():")
for(const number of numbers){
    console.log(number)
}
// forEach() does not create a new array it will give the undefined value 
console.log("forEach():")
numbers.forEach((number)=>{
    console.log(number)
})

// map() 
// Transform every element and create a new array
// Syntax:
// const result = array.map((element) => {
//     return newValue
// })
console.log("map():")
const doubled=numbers.map((number)=>{
    return number*2
})
console.log(doubled)

// filter()
console.log("filter():")
const result1=numbers.filter((number)=>number>20)
console.log(result1)

// reduce()
// Convert many values into one final value.
// const result = array.reduce((accumulator, currentValue) => {
    // return accumulator + currentValue
// }, initialValue)
console.log("reduce():")
const total=numbers.reduce((sum,num)=>{
    return sum+num
},0)
console.log(total)
const highest=numbers.reduce((max,num)=>{
    return num>max?num:max
},numbers[0])
console.log(highest)

// find()
// find first matching element 
const users = [
    { id: 1, name: "Tej" },
    { id: 2, name: "Maya" },
    { id: 3, name: "Arun" }
]
const user = users.find(user => user.id === 2)
console.log(user)

// findIndex()
// Returns the index of the first matching element.
console.log("findIndex():")
const index = users.findIndex(user => user.id === 102)
console.log(index)

// some()
// Does at least one element satisfy this condition
console.log("some():")
const result2 = numbers.some(number => number > 20)
console.log(result2)

// every()
// Do all elements satisfy the condition
console.log("every():")
const marks = [80, 90, 75, 85]
const result = marks.every(mark => mark >= 40)
console.log(result)

// sort()
// sort elements
console.log("sort():")
const names = ["Tej", "Arun", "Maya"]
names.sort()
console.log(names)
console.log("Ascending Order:")
const numbers1 = [40, 10, 100, 20]
numbers1.sort((a, b) => a - b)
console.log(numbers1)
console.log("Descending Order:")
numbers1.sort((a,b)=>b-a)
console.log(numbers1)

const numbers3 = [40, 10, 30, 20]
for (let i = 0; i < numbers3.length; i++) {
    for (let j = 0; j < numbers3.length - 1 - i; j++) {
        if (numbers3[j] > numbers3[j + 1]) {
            const temp = numbers3[j]
            numbers3[j] = numbers3[j + 1]
            numbers3[j + 1] = temp
        }
    }
}
console.log(numbers3)

// join()
// It will convert arrays into string
console.log("Join():")
console.log(names.join(", "))

// flat()
// used when arrays are nested
console.log("flat():")
const numbers4 = [1, 2, [3, 4], [5, 6]]
console.log(numbers4.flat())

// nested deeper
const numbers5 = [1, [2, [3, [4]]]]
console.log(numbers5.flat(Infinity))

// Remove Duplicates
const numbers6 = [10, 20, 10, 30, 20, 40]
const uniqueNumbers = [...new Set(numbers6)]
console.log(uniqueNumbers)

const numbers7 = [10, 20, 10, 30, 20]
const unique = []
numbers7.forEach(number => {
    if (!unique.includes(number)) {
        unique.push(number);
    }
})
console.log(unique)

// Object Creation
// Objects store data as:
// key → value
const employee = {
    id: 101,
    name: "Tej",
    role: "Frontend Developer",
    salary: 50000
}
console.log(employee.name)
console.log(employee["salary"])
console.log(employee)
// Updating
employee.salary = 60000
console.log(employee)
// Adding
employee.location = "Hyderabad"
console.log(employee)
// Deleting
delete employee.location
console.log(employee)

// Nested Objects
// Objects can contain objects.
const employee1 = {
    id: 101,
    name: "Tej",
    address: {
        city: "Hyderabad",
        state: "Telangana"
    }
}
// Access:
console.log(employee1)
console.log(employee1.address.city)

// Object Methods
// A function inside an object is commonly called a method.
const user1 = {
    name: "Tej",
    greet() {
        console.log("Hello " + this.name);
    }
}
user1.greet()

// Object.keys()
// Returns an array containing property names.
const user2 = {
    name: "Tej",
    age: 25,
    role: "Developer"
};
console.log(Object.keys(user2))

// Object.values()
// Returns property values.
console.log(Object.values(user2))

// Object.entries()
// Returns key-value pairs as arrays.
console.log(Object.entries(user2))

// Object Destructuring
const {name,role}=employee
console.log(name)
console.log(role)
// rename
const { name: employeeName } = employee
console.log(employeeName)
// default value
const { department = "IT" } = employee
console.log(department)
// Nested Destructuring
const employee2 = {
    name: "Tej",
    address: {
        city: "Hyderabad",
        state: "Telangana"
    }
}
const {address: { city, state }} = employee2
console.log(city)
console.log(state)

// Spread Operator
// Spread means:
// Expand/copy elements or properties
Array
const numbers9 = [10, 20, 30]
const numbers8 = [...numbers9]
console.log(numbers8)
// Combine arrays
const a = [1, 2];
const b = [3, 4];
const combined = [...a, ...b];
console.log(combined)

// Object
const user4 = {
    name: "Tej",
    age: 25
}
console.log(user4)
const copy = {
    ...user4
}
console.log(copy)

// Rest Operator
// Same syntax:
// ...
// but different purpose.
// Spread
// Expand
// Rest
// Collect
function calculateTotal(...prices) {
    console.log(prices);
}
calculateTotal(100, 200, 300)

// Object rest
const user5 = {
    name: "Tej",
    age: 25,
    role: "Developer"
}
const { name:userName, ...otherDetails } = user5
console.log(userName)
console.log(otherDetails)

// Shallow Copy
const user6 = {
    name: "Tej",
    address: {
        city: "Hyderabad"
    }
}
console.log(user6)
const copy1 = { ...user6 }
console.log(copy1)
copy1.address.city = "Delhi"
console.log(user6.address.city)

// Deep Copy
// A deep copy creates independent nested structures.
// Modern JavaScript
const copy3 = structuredClone(user6)
console.log(copy3)
copy3.address.city = "Hyderabad"
console.log(user6.address.city)
// common/old apporach
const copy4 = JSON.parse(JSON.stringify(user6))
console.log(copy4)

// Problem-1
// Arrays
// 1. Find the sum:
const arr1=[10, 20, 30, 40, 50]
const sum=arr1.reduce((sum,arr)=>{
    return sum+arr
},0)
console.log(sum)

// Problem-2
// 2. Find all numbers greater than 50:
const arr2=[20, 75, 40, 90, 30, 100]
const highestNumber=arr2.filter((arr)=>arr>50)
console.log(highestNumber)

// Problem-3
// 3. Convert:
// [2, 4, 6, 8]
const arr3=[2, 4, 6, 8]
const transform=arr3.map((arr)=>arr*2)
console.log(transform)

// Problem-4
// Find the first number divisible by 7:
// [10, 15, 21, 28, 35]
const arr4=[10, 15, 21, 28, 35]
const div=arr4.find((arr)=>arr%7===0)
console.log(div)

// Problem-5
// Find the index of 40:
// [10, 20, 30, 40, 50]
const arr5=[10,20,30,40,50]
const finIn=arr5.findIndex((arr)=>arr===40)
console.log(finIn)

// problem-6
const employees = [
  { id: 1, name: "Rahul", salary: 45000 },
  { id: 2, name: "Priya", salary: 85000 },
  { id: 3, name: "Amit", salary: 120000 }, // Earns above 100,000
  { id: 4, name: "Sneha", salary: 95000 }
]
const higestSalary=employees.some((emp)=>emp.salary>100000)
console.log(higestSalary)

// Problem-7
// Check whether every student passed:
// [65, 70, 80, 55, 90]
const marks1=[65, 70, 80, 55, 90]
const pass=marks1.every((mark)=>mark>40)
console.log(pass)

// Problem-8
// Find the highest number without using Math.max()
const highestNum = marks1.reduce((max, current) => {
  return current > max ? current : max;
}, marks1[0]); // Start by assuming the first number is the highest

console.log(highestNum);

// Problem-9
// Find the lowest number without using Math.min()
const lowest = marks1.reduce((min, current) => {
  return current < min ? current : min;
}, marks1[0]); // Start by assuming the first number is the lowest
console.log(lowest);

// Problem-10
// Remove duplicates:
const duplicate=[10, 20, 10, 30, 20, 40, 30]
const original=[...new Set(duplicate)]
console.log(original)

// Problem-11
// Get only IT employees
const employees1 = [
    { name: "Tej", salary: 50000, department: "IT" },
    { name: "Maya", salary: 70000, department: "HR" },
    { name: "Arun", salary: 60000, department: "IT" }
]
const itemp=employees1.filter((emp)=>emp.department==="IT")
console.log(itemp)

// Problem-12
// Get all employee names.
const empNames=employees1.map((emp)=>emp.name)
console.log(empNames)

// Problem-13
// Calculate total salary.
const totalSalary=employees1.reduce((sum,emp)=>{
    return sum+emp.salary
},0)
console.log(totalSalary)

// Problem-14
// Find the employee with the highest salary.
const highestPaidEmployee = employees1.reduce((highest, current) => {
    return current.salary > highest.salary ? current : highest
})
console.log(highestPaidEmployee)

// Problem-15
// Get unique departments.
const uniqueDepartments = [...new Set(employees1.map(emp => emp.department))]
console.log(uniqueDepartments)