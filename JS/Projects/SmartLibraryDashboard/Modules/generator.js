export function* borrowIdGenerator(){
    let id = 1001;
    while(true){
        yield id++;
    }
}