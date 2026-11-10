export const StorageManager={
    save(key,data){
        localStorage.setItem(key,JSON.stringify(data))
    },
    load(key,fallback=[]){
        try{
            return JSON.parse(localStorage.getItem(key)) || fallback
        }
        catch(error){
            console.error("Storage Error:" ,error)
            return fallback
        }
    }
}