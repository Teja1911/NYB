export function debounce(callback,delay=400){
    let timer
    return (...args)=>{
        clearTimeout(timer)
        setTimeout(()=>callback(...args),delay)
    }
}