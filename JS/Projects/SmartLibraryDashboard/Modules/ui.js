// ====================================
// ui.js
// Responsible for UI
// ====================================
export function displayBooks(books,container){
container.innerHTML=""
books.forEach(function(book){
let{title,author_name,first_publish_year}=book
let card=document.createElement("div")
card.classList.add("card")
card.innerHTML = `
<h3>📘 ${title}</h3>
<p>Author :${author_name ? author_name[0] : "Unknown"}</p>
<p>Published :${first_publish_year || "N/A"}</p>
<div class="actions">
<button class="borrowBtn" data-key="${book.key}">Borrow</button>
<button class="returnBtn" data-key="${book.key}">Return</button>
</div>
`;
container.appendChild(card);
})
}

export function displayBorrowHistory(borrowedBooks,historyContainer){
    historyContainer.innerHTML = ""
    if(borrowedBooks.length===0){
        historyContainer.textContent ="No Books Borrowed"
        return
    }
    borrowedBooks.forEach(function(book){
        let item =document.createElement("p")
        item.textContent =`📘 ${book.title} (ID : ${book.borrowId})`
        historyContainer.appendChild(item)
    })
}