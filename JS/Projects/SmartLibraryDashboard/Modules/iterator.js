// ======================================
// iterator.js
// Borrowed Books Iterator
// ======================================

export function createBorrowIterator(borrowedBooks){
    return borrowedBooks[Symbol.iterator]()
}