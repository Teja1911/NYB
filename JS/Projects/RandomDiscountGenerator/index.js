//Formula
// Math.floor(
// Math.random() * (max - min + 1)
// ) + min
let customers={}
function generate(){
    let user=document.getElementById("user").value
    let total=Number(document.getElementById("totalAmount").value)
    if(user === "" || total <= 0){
        document.getElementById("errorMessage").textContent=`Please enter user name and valid amount.`
        return
    }
    if(customers[user]){
        document.getElementById("errorMessage").textContent=`User already exists. Please use another user name.`
        return
    }
    document.getElementById("errorMessage").textContent=" "
    // if(customers[user]){
    //     let discount=customers[user]
    //     let discountAmount=total*discount/100
    //     let final=total-discountAmount
    //     document.getElementById("result").textContent=`Hello ${user} you got ${customers[user]}% discount`
    //     document.getElementById("amount").textContent=`Hello ${user} your total amount after  ${discount}% discount is ${final}`
    //     return
    // }
    let discount=Math.floor(Math.random()*50)+1
    customers[user]=discount
    let discountAmount=(total*discount/100)
    let totalAmount=total-discountAmount
    document.getElementById("result").textContent=`Hello ${user} you got ${discount}% discount`
    document.getElementById("amount").textContent=`Hello ${user} your total amount after  ${discount}% discount is ${totalAmount}`
}