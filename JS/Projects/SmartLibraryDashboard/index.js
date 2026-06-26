// ========================================
// Import Modules
// ========================================
import { fetchBooks } from "./modules/api.js"
import {displayBooks,displayBorrowHistory}from "./modules/ui.js"
import {saveBorrowedBooks,loadBorrowedBooks,saveSearch,loadSearch}from "./modules/storage.js"
import {borrowIdGenerator}from "./modules/generator.js"
import {createBorrowIterator}from "./modules/iterator.js"
import {loadLibraryData,fastestServer,firstSuccessfulServer,libraryReport}from "./modules/promises.js"
import {showStatus}from "./modules/utils.js"

// ========================================
// DOM Selection
// ========================================

const loadBooksBtn = document.getElementById("loadBooks")
const searchBook = document.getElementById("searchBook") 
const bookContainer = document.getElementById("bookContainer")
const status = document.getElementById("status")
const borrowHistory =document.getElementById("borrowHistory")
const nextBook = document.getElementById("nextBook");
// ========================================
// Global Variables
// ========================================
let books = []
// ========================================
// Event Listeners
// ========================================
loadBooksBtn.addEventListener("click", loadBookData )
searchBook.addEventListener("input",searchBooks)
nextBook.addEventListener("click",showNextBorrowedBook)
bookContainer.addEventListener("click",handleBookActions)
// ========================================
// Load Books
// ========================================

async function loadBookData(){
    try{
        status.textContent = "Loading Books..."
        books = await fetchBooks()
        displayBooks(
            books,
            bookContainer
        )
        status.textContent = "Books Loaded Successfully.";
    }
    catch(error){
        status.textContent = error.message;
    }
}
// ========================================
// Search Books
// ========================================
function searchBooks(){
    let searchText =
    searchBook.value
    .toLowerCase()
    .trim()
    saveSearch(searchText);
    let filteredBooks = books.filter(function(book){
        return book.title
        .toLowerCase()
        .includes(searchText)
    })
    displayBooks(filteredBooks,bookContainer)
}
searchBook.value =loadSearch()
let borrowedBooks = loadBorrowedBooks()
let borrowIterator = null;
let borrowGenerator =borrowIdGenerator()

function borrowBook(event){
    if(!event.target.classList.contains("borrowBtn")){
        return
    }
    let bookKey = event.target.dataset.key
    let selectedBook =books.find(function(book){
        return book.key === bookKey
    })
    if(!selectedBook){
        status.textContent ="Book not found."
        return
    }
    let borrowIdValue =borrowGenerator.next().value
    selectedBook.borrowId =borrowIdValue
    let alreadyBorrowed =borrowedBooks.some(function(book){
    return book.key === selectedBook.key
    })
    if(alreadyBorrowed){
    status.textContent ="Book already borrowed."    
    return
    }
    borrowedBooks.push(selectedBook)
    saveBorrowedBooks(borrowedBooks)
    displayBorrowHistory(borrowedBooks,borrowHistory)
    status.textContent = `Borrow ID ${borrowIdValue} generated successfully.`
    borrowId.textContent = borrowIdValue
}
function showNextBorrowedBook(){
    if(borrowedBooks.length===0){
        status.textContent ="No borrowed books."
        return
    }
    if(!borrowIterator){
        borrowIterator =createBorrowIterator(borrowedBooks)
    }
    let next = borrowIterator.next()
    if(next.done){
        currentBook.textContent ="No More Books"
        status.textContent ="Iterator Restarted."
        borrowIterator =createBorrowIterator(borrowedBooks)
        return
    }
    currentBook.textContent =`📘 ${next.value.title}`
}
async function testPromiseAll(){
    let result =await loadLibraryData()
    console.log(result)
}
testPromiseAll()
async function testRace(){
    let result =await fastestServer()
    console.log(result)
}
testRace()
async function testAny(){
    let result =await firstSuccessfulServer()
    console.log(result)
}
testAny()
async function testSettled(){
    let result =await libraryReport()
    console.log(result)
}
testSettled()
function handleBookActions(event){
    if(event.target.classList.contains("borrowBtn")){
        borrowBook(event)
    }
    if(event.target.classList.contains("returnBtn")){
        returnBook(event)
    }
}
function returnBook(event){
    let bookKey = event.target.dataset.key
    borrowedBooks =borrowedBooks.filter(function(book){
        return book.key !== bookKey
    })
    saveBorrowedBooks(borrowedBooks)
    displayBorrowHistory(borrowedBooks,borrowHistory)
    status.textContent ="Book Returned Successfully."
}