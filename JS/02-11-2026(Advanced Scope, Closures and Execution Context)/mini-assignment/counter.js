export function createCounter(){
    let count = 0
    return{
        increment(){
            return ++count
        },
        decrement(){
            return --count
        },
        reset(){
            count=0
            return count
        },
        getCount(){
            return count
        }
    }
}