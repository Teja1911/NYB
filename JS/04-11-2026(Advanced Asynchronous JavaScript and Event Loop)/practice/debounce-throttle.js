function debounce(callback,delay){
    let timer
    return (...args)=>{
        clearTimeout(timer)
        timer=setTimeout(()=>callback(...args),delay)
    }
}
function throttle(callback,delay){
    let waiting=false
    return(...args)=>{
        if(waiting) return true
        callback(...args)
        waiting=true
        setTimeout(()=>waiting=false,delay)
    }
}
const search=debounce(value=>console.log("Search: ",value),500)
search("React")
search("JavaScript")
const clickHandler=throttle(()=>console.log("Clicked"),1000)
clickHandler()