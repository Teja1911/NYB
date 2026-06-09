//Arrays in JavaScript
//Array is used to store multiple values in a single variable 
//Array is a collection of values 
//Syntax let arrayName=[value1,value2,value3]
//Without Array
let student1="Teja"
let student2="Surya"
let student3="Lucky"
//With Array
let student=["Teja","Surya","Lucky"]
//Multidimensional Array
//Purpose is Array inside another array
let arr=[[1,2],[3,4]]
console.log(arr)
//Adding Element at the Begging
//unshift()
let colors=["White","Red","Blue"]
console.log("Before adding the Element:",colors)
colors.unshift("Black")
console.log("After adding the Element",colors)
//Adding Element at the End 
console.log("Before adding the element at the end",colors)
colors.push("Orange")
console.log("After adding the element at the end",colors)
//Adding Element at any position 
console.log("Before adding the element at any position",colors)
colors.splice(2,0,"Brown")
console.log("After adding the element at any position",colors)
//Accessing the elements from the array 
//By using the index values we can access the elements in the array 
console.log("The value of the index 1 is:",colors[1])
//Accessing the last element in the array 
console.log("The value of the last index is:",colors[colors.length-1])
//Removing the Elements from the array 
//Removing the first element in the array
//shift
console.log("Before Removing the first element in the array",colors)
colors.shift()
console.log("AFter Removing the first element in the array",colors)
//Removing the last element in the array 
//pop
console.log("Before Removing the last element in the array",colors)
colors.pop()
console.log("After Removing the last elements in the array",colors)
//Remove the element from any position
//splice
console.log("Before Removing the elements in the array",colors)
colors.splice(1,1)
console.log("After Removing the elements in any position",colors)
//Finding the length of array
console.log("The length of the array",colors.length)
//Search Element
//indexOf
console.log(colors.indexOf("Red"))
//lastindexOf
//Returns last occurrence of index
console.log(colors.lastIndexOf("Blue"))
//Includes
//It will check whether the value exists are not 
//returns boolean values
console.log(colors.includes("Red"))
//Making the array empty
//Method 1:Making the length of the array is equal to zero
let fruits=["Apple","Banana"]
console.log("The length of the array:",fruits)
fruits.length=0
console.log("The length of the array:",fruits)
//Method 2:writing the array with empty 
fruits=["Apple","Banana"]
console.log("The length of the array:",fruits)
fruits=[]
console.log("The length of the array:",fruits)
//Concat
let arr1=[12,3]
let arr2=[19,11]
let result=arr1.concat(arr2)
console.log(result)
//Spread Operator
let result1=[...arr1,...arr2]
console.log(result1)
//For Loop
fruits=["Apple","Banana","Cherry","Mango"]
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i])
}
//For of Loop 
for(let fruit of fruits){
    console.log(fruit)
}
//For Each
fruits.forEach(
    function(fruit){
        console.log(fruit)
    }
)

let students=["Teja","Surya"]
console.log(students)
let marks=[90,80,[90,80]]
console.log(marks)
students.push("Lucky")
console.log(students)
students.pop()
console.log(students)
let comb=students.concat(marks)
console.log(comb)
for(let i=0;i<students.length;i++){
    console.log(students[i])
}