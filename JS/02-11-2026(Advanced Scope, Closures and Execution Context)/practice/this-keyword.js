const user={
    name:"Teja",
    showName(){
        console.log(this.name)
    }
}
user.showName()
function showThis(){
    console.log(this)
}
showThis()

const arrowUser={
    name:"Developer",
    showName:()=>{
        console.log(this.name)
    }
}
arrowUser.showName()