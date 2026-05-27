//Typeof Operator is used to check what type of data variable is stored 
//Primitive Data Types
let name="Teja"
console.log("Variable data:",name,"Type of data:",typeof(name))
let num=19
console.log("Variable data:",num,"Type of data:",typeof(num))
let isStudent=true
console.log("Variable data:",isStudent,"Type of data:",typeof(isStudent))
let marks=null
console.log("Variable data:",marks,"Type of data:",typeof(marks))//It is object Type it is a Historical JavaScript Bug
let a
console.log("Variable data:",a,"Type of data:",typeof(a))
let sur=Symbol("class")
console.log("Variable data:",sur,"Type of data:",typeof(sur))
let big=1234567890123456789n
console.log("Variable data:",big,"Type of data:",typeof(big))

//Non-Primitive Data Types
let obj={
    empid:920,
    role:"Associate Software Engineer",
    location:"Hyderabad"
}
console.log("Variable data:",obj.empid,"Type of data:",typeof(obj))
let colors=["White","Grey","Black","Blue"]
console.log("Variable data:",colors,"Type of data:",typeof(colors))
function add(a,b){
    return a+b
}
console.log("Variable data:",add(19,12),"Type of data:",typeof(add))
