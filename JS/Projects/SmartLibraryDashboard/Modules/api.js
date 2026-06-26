// =======================================
// api.js
// Responsible for API Communication
// =======================================

const BOOK_API = "https://openlibrary.org/search.json?q=javascript";
// Fetch Books
export async function fetchBooks(){
    try{
        let response =await fetch(BOOK_API)  
        if(!response.ok){
            throw new Error("Unable to load books.")
        }
        let data =await response.json()
        return data.docs
    }
    catch(error){
        throw error
    }
}