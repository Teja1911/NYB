//Error Handling 
//try{} block contains risky code 
//catch(){} block Handles error
//Finally{} always executes
try{
    let user=null
    console.log(user.name)
}
catch(error){
    console.log(error.message)
}
finally{
    console.log("Program Ended.")
}
//throw Statement
//Here JavaScript doesn't automatically throw an error 
//We create our own
//Here we create our own error according business rule age must be 18+
try{
    let age=16
    if(age<18){
        throw new Error("Age Must be 18+")
    }
    console.log("Eligible")
}
catch(error){
    console.log(error.message)
}
//Banking System
function withdrawMoney(balance,amount){
    try{
        if(amount>balance){
            throw new Error("Insufficient Balance")
        }
        console.log("Cash Dispensed")
    }
    catch(error){
    console.log(error.message)
}
}
withdrawMoney(5000,10000)
