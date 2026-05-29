//Conditional Statements in JavaScript
//Purpose of the Conditional Statements
//Make Decisions 
//Control the program flow 
//Execute different code based on the condition 

//Types of Condition Statements
//if statement it will execute the code when the condition is true
//else otherwise else statement code will be executed
//else-if checks the multiple conditions 
//switch checks the multiple choices
//ternary is short if-else

//if statement
let age=15
if(age>=18){
    console.log("Eligible to Work")
} 

//else statement
else{
    console.log("Not Eligible to Work")
}

//Else-if statement
let marks=80
if(marks>=90){
    console.log("O")
}
else if(marks>=80 && marks<=90){
    console.log("A+")
}
else if(marks>=70 && marks<=80){
    console.log("A")
}
else if(marks>=60 && marks<=70){
    console.log("B")
}
else if(marks>=50 && marks<=60){
    console.log("C")
} 
else {
    console.log("F")
}

//Nested if
let years=18
let licensed=true
if(years>=18){
    if(licensed){
        console.log("Eligible to Ride")
    }
}

//Switch statement
let month=3
switch(month){
    case 1:
        console.log("January")
        break
    
    case 2:
        console.log("February")
        break

    case 3:
        console.log("March")
        break

    case 4:
        console.log("April")
        break

    case 5:
        console.log("May")
        break

    case 6:
        console.log("June")
        break
      
    case 7:
        console.log("July")
        break
        
    case 8:
        console.log("August")
        break
     
    case 9:
        console.log("September")
        break

    case 10:
        console.log("October")
        break

    case 11:
        console.log("November")
        break

    case 12:
        console.log("December")
        break
    
    default:
        console.log("Invalid Input")

}

//Ternary short if else
let assessment="Pass"
let result=assessment==="Pass"?"Passed":"Failed"
console.log(result)