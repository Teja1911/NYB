// ======================================
// storage.js
// Responsible for Local & Session Storage
// ======================================

// ---------- Local Storage ----------

// Save Borrowed Books
export function saveBorrowedBooks(borrowedBooks){
    localStorage.setItem("borrowedBooks",JSON.stringify(borrowedBooks)
    )
}

// Load Borrowed Books
export function loadBorrowedBooks(){
    let data =localStorage.getItem("borrowedBooks");
    return data
        ? JSON.parse(data)
        : [];
}

// ---------- Session Storage ----------

// Save Search Text
export function saveSearch(searchText){
    sessionStorage.setItem("searchBook",searchText)
}
// Load Search Text
export function loadSearch(){
    return sessionStorage.getItem("searchBook") || ""
}
// Clear Session Search
export function clearSearch(){
    sessionStorage.removeItem("searchBook")
}
// Clear Borrow History
export function clearBorrowHistory(){
    localStorage.removeItem("borrowedBooks")
}