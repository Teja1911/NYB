//Shopping Discount programs
let bill=5000
let discount=bill*10/100
let total=bill-discount
console.log(total)

//Salary Bonus Calculations
let salary=30000
let bonus=salary*20/100
let totalSalary=salary+bonus
console.log(totalSalary)

//Even or Odd Checker
let number=10
if(number%2==0){
    console.log("Even Number")
}
else{
    console.log("Odd Number")
}

//Voting Eligibility
let age=18
if(age>=18){
    console.log("Eligible for Vote")
}
else{
    console.log("Not Eligible for Vote")
}

//Login Validation
let username="Admin"
let password="1234"
if(username==="Admin" && password==="1234"){
    console.log("Login Successful")
}
else{
    console.log("Invalid Credentials")
}

//Pass or Fail
let totalMarks=80
if(totalMarks>=35){
    console.log("Pass")
}
else{
    console.log("Fail")
}

//Temperature Converter 
let celsius=30
let fahrenheit=(celsius*9/5)+32
console.log(fahrenheit)

//BMI Calculator 
let weight=80
let height=1.55
let bmi=weight/(height*height)
console.log(bmi)

//Simple Interest program
let amount=10000
let time=2
let rate=5
let simpleInterest=(amount*time*rate)/100
console.log(simpleInterest)
