//Copy Methods 
//1.Normal Copy
//2.Shallow Copy
//3.Deep Copy

//In Normal copy if we add the new key value pair in the copy variable and it will update in the original variable also 
let obj={
    name:"Teja",
    age:22,
    address:{
    city:"Hyderabad",
    location:"Hyderabad"
    }
}
console.log(obj)
let copyObj=obj
console.log(copyObj)
copyObj.role="Associate Software Engineer"
console.log("Original Object:",obj)
console.log("Copy Object:",copyObj)
obj.name="Surya"
console.log("Original Object:",obj)
console.log("Copy Object:",copyObj)

//Shallow Object with the help of spread operator we can use shallow copy 
//If we update in the shallow copy it will not update in the original object
//If we update the nested object in the shallow copy it will update in the original object also.
let obj2={
    name:"Surya",
    age:22,
    role:"Associate Software Engineer",
    address:{
        city:"Hyderabad",
        location:"Chennai"
    }
}
console.log(obj2)
let obj3={...obj2}
console.log("Shallow Copy:",obj3)
console.log("Original Object:",obj2)
obj3.address.location="Hyderabad"
console.log("Shallow Copy:",obj3)
console.log("Original Object:",obj2)

//Shallow Object using assign

let obj4=Object.assign({},obj2)
console.log("Shallow copy using assign:",obj4)
console.log("Original Object:",obj2)
obj4.address.location="Chennai"
console.log("Shallow copy using assign:",obj4)
console.log("Original Object:",obj2)


//Deep Copy
// Deep Copy used by JSON Parse and JSON stringify
//Original and copy are two independent objects in the deep copy 
//It will create a new memory address for the copy object and original object
//Limitation for JSON Parse
//Date
//Function
//Undefined
//Symbol

let obj5={
    name:"Chinnu",
    age:22,
    address:"Hyderabad"
}
console.log(obj5)
let obj6=JSON.parse(JSON.stringify(obj5))
console.log("Deep Copy using JSON parse and JSON Stringify:",obj6)
console.log("Original Object:",obj5)
obj6.address="Chennai"
console.log("Deep Copy using JSON parse and JSON Stringify:",obj6)
console.log("Original Object:",obj5)

//Deep Copy Using structuredClone()

let obj7=structuredClone(obj5)
console.log("Deep Copy using structuredClone():",obj7)
console.log("Original Copy:",obj5)
obj7.address="Bangalore"
console.log("Deep Copy using structuredClone():",obj7)
console.log("Original Copy:",obj5)






