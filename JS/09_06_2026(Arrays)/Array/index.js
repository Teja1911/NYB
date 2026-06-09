//Array.some()
//Here it will check whether at least one element will satisfies a condition 
let marks=[50,40,60,70,90]
let result=marks.some(marks => marks>=80)
console.log(result)
let ages=[12,17,14]
let results=ages.some(ages => ages>=18)//Here neither one of the element in the array satisfied the condition 
console.log(results)
//Array.every()
//Checks whether all the elements satisfy condition 
let result1=marks.every(marks => marks>=35)
console.log(result1)
let result2=ages.every(ages => ages>=13)
console.log(result2)
//Looping Through Array
//For Loop
for(let i=0;i<marks.length;i++){
    console.log(marks[i])
}
//For of Loop
for(let age of ages){
    console.log(age)
}
//For Each
marks.forEach(item=>{
    console.log(item)
})
//Map
ages.map(item=>{
    console.log(item)
})
//Join 
//Converting the array in to the string
let skills=["HTML","CSS","JS"]
console.log("Before using the Join():",skills)
console.log("After using the Join():",skills.join(" , "))
let words=["I","Love","JavaScript"]
console.log("Before using the Join():",words)
console.log("After using the Join():",words.join(" "))
//Sort()
//Sort the array elements 
//String Sort
let fruits=["Orange","Apple","Mango"]
console.log("Before sorting the array:", fruits)
console.log("After sorting the array:", fruits.sort())
//Number Sort
let num=[100,3,5,1]
console.log("Before sorting the array",num)
num.sort()
console.log("After sorting the array",num)//Wrong Because sorting is alphabetical
num.sort((a,b)=>a-b)//for ascending order
//a-b  becomes a comes before b  small -> larger
console.log(num)
num.sort((a,b)=>b-a)//for descending order
//b-a becomes b comes before a  small -> larger
console.log(num)
//Flatten Array
let number=[10,20,[30,40,[50,60]]]
console.log(number.flat(2))
let numS=[10,[20,30,[40,50,[60,[70]]]]]
console.log(numS.flat(Infinity))
//Reduce Method
let arr=[[1,2],[3,4]]
let result3=arr.reduce((acc,curr)=>
    acc.concat(curr)
)
console.log(result3)
//Removing the Duplicates
let arr1=[12,3,3,19,11,11,10]
//Set Method
let unique=[...new Set(arr1)]
console.log(unique)
arr2=[12,3,3,19,11,11,10]
let unique1=arr2.filter((item,index)=>
arr2.indexOf(item)===index)
console.log(unique1)
//Search Elements
//indexOf() it will return the first occurrence index value
console.log(arr2.indexOf(11))
//lastIndexof() it will find the last occurrence index value
console.log(arr2.lastIndexOf(11))
//Map 
//Creating a new array by transforming elements 
let nuM=[1,2,3]
console.log(nuM)
let result4=nuM.map(nuM => nuM*2)
console.log(result4)
//Filter
//Creating a new array with matching elements 
let result5=nuM.filter(nuM => nuM>=2)
console.log(result5)
//Reduce
//Reduce  array into a single value 
let total=nuM.reduce((acc,curr) => acc+curr,0)//Here 0 is the initial value for acc it will make the code safer with initial value 
console.log(total)

let students=[
    {name:"Teja",marks:90},
    {name:"Surya",marks:80},
    {name:"Lucky",marks:75}
]
//Using map we created the new array with names of the students 
let names=students.map(student => student.name)
console.log(names)
//Using the filter we create the new array with matching condition 
let topper=students.filter(student=>student.marks>75)
console.log(topper)
//Using Reduce we can reduce array into single value like total marks
let totalMarks=students.reduce((acc,student) => acc+student.marks,0)
console.log(totalMarks)



