let timer=document.getElementById("timer")
let startBtn=document.getElementById("startBtn")
let stopBtn=document.getElementById("stopBtn")
let resetBtn=document.getElementById("resetBtn")
let count=10
let intervalId=null
startBtn.addEventListener("click",startTimer)
stopBtn.addEventListener("click",stopTimer)
resetBtn.addEventListener("click",resetTimer)
function startTimer(){
    if(intervalId !== null){
        return
    }
    intervalId=setInterval(function(){
        count--
        timer.textContent=count
        if(count<=0){
            clearInterval(intervalId)
            intervalId=null
            timer.textContent="Time Up"
        }

    },1000)
}
function stopTimer(){
    clearInterval(intervalId)
    intervalId=null
}
function resetTimer(){
    clearInterval(intervalId)
    intervalId=null
    count=10
    timer.textContent=count
}