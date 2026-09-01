// Array 
// An array stores multiple values in an ordered collections
const fruits=["Apple","Mango","Cherry","Banana"]
console.log(fruits[0])
console.log(fruits[1])
console.log(fruits[2])

// Creation of Empty Array
const arr=[]
console.log(arr)

// Push 
// It will push/insert the data into array at the end 
arr.push(10)
arr.push(20)
console.log(arr)

// Accessing Elements By Index
console.log(arr[0])
console.log(arr[1])

// Last Element
// Traditional Way
console.log(arr[arr.length-1])
// Modern Approach
console.log(arr.at(-1))

// Array Methods
// push()
// pop()
// shift()
// unshift()
// slice()
// splice()
// includes()
// indexOf()
// join()

const numbers=[10,20,30]
console.log(`Normal Array: ${numbers}`)
// push() It will add the elements at the end of the array.
numbers.push(40)
console.log(`After using push(): ${numbers}`)
// pop() It will remove the last element of the array.
numbers.pop()
console.log(`After using pop(): ${numbers}`)
// shift() remove the beginning element of array.
numbers.shift()
console.log(`After using shift(): ${numbers}`)
// unshift() adding the element at beginning of array.
numbers.unshift(10)
console.log(`After using unshift(): ${numbers}`)
// slice
console.log(`After using slice(): ${numbers.slice(0,2)}`)
// splice
// Inserting
numbers.splice(2,0,30,40,50)
console.log(`Inserting: After using splice(): ${numbers}`)
// Deleting
numbers.splice(5,1)
console.log(`Deleting: After using splice: ${numbers}`)
// Updating 
numbers.splice(1,2,2,3)
console.log(`Updating: After using splice(): ${numbers}`)
numbers.splice(1,2,20,30)
console.log(`Updating: After using splice(): ${numbers}`)
// includes() it checks whether the element exists
console.log(`After using inlcudes(): ${numbers.includes(30)}`)
// indexOf() it will gives the index value 
console.log(`After using indexOf(): ${numbers.indexOf(30)}`) 
// join() convert array into string 
const elements = ['Fire', 'Air', 'Water']
console.log(`Before using the join(): ${elements}`)
console.log(`After using join(): ${elements.join(" ")}`)
console.log(`After using join(): ${elements.join(" - ")}`)

// map creates new array by transforming every element 
// Syntax
// array.map((element, index, array) => {
//     return newValue;
// })
const doubled=numbers.map(element=>element*2)
console.log(`After using map(): ${doubled}`)

// fiter() creates a new array containing only elements that satisfy a condition
// Syntax
// array.filter(element => condition);
const evenNumbers=numbers.filter(num=>num>=30)
console.log(`After using filter(): ${evenNumbers}`)

// reduce() processes an array and accumulates it into a single result
// Syntax
// array.reduce(
//     (accumulator, currentValue) => {
//         return updatedAccumulator;
//     },
//     initialValue
// );
const total=numbers.reduce((sum,num)=>sum+num,0)
console.log(`After using reduce(): ${total}`)

// find() returns first element that staisfies the condition
const users=[
    {id:1,name:"Teja",age:22},
    {id:2,name:"Surya",age:22},
    {id:3,name:"Lucky",age:23}
]
const user=users.find((user)=>user.id===2)
console.log("After using find():",user)

// findIndex() returns index of first matching element 
const index=users.findIndex((user)=>user.id===3)
console.log("After using findIndex():",index)

// some() checks at least one element will satisfies the condition 
const even=numbers.some((num)=>num%2===0)
console.log("After using some():",even)

// every() checks whether all elements will satisfy the condition
const num=[1,3,5,6,7,8]
const eve=num.every((num)=>num%2===0)
console.log("After using every():",eve)

// sort() sort the elements in the array
const sortnum=[5,4,8,3,9,2]
console.log("Before using sort():",sortnum)
// console.log(sortnum.sort())
// Ascending order
const ascending=[...sortnum].sort((a,b)=>a-b)
console.log("After using sort():",ascending)
// Descending order
const descending=[...sortnum].sort((a,b)=>b-a)
console.log("After using sort():",descending)

// Removing the duplicate numbers
// we use Set() 
const duplicate=[1,3,5,6,7,5,5,6,8,9,3,4]
const original=[...new Set(duplicate)]
console.log("Before using Set():",duplicate)
console.log("After using Set():",original)

const products = [
    {
        name: "Laptop",
        price: 50000,
        inStock: true
    },
    {
        name: "Mouse",
        price: 1000,
        inStock: false
    },
    {
        name: "Keyboard",
        price: 2000,
        inStock: true
    }
]

const available=products
.filter((product)=>product.inStock)
.map((product)=>product.name)
console.log(available)

const totalPrice=products
.filter((product)=>product.inStock)
.reduce((sum,product)=>sum+product.price,0)
console.log(totalPrice)

