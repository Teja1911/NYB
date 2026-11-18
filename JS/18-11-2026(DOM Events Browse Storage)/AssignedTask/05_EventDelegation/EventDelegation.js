const ItemInput = document.getElementById("ItemInput")
const ItemList = document.getElementById("ItemList")
const Output = document.getElementById("Output")
// Create a new list item dynamically.
document.getElementById("AddButton").addEventListener("click", () => {
    const ItemName = ItemInput.value.trim()
    if (!ItemName) {
        Output.textContent = "Enter an item name."
        return
    }
    const ListItem = document.createElement("li")
    ListItem.textContent = ItemName + " "
    const DeleteButton = document.createElement("button")
    DeleteButton.textContent = "Delete"
    DeleteButton.className = "delete-item"
    ListItem.appendChild(DeleteButton)
    ItemList.appendChild(ListItem)
    ItemInput.value = ""
    Output.textContent = "Item added successfully."
})
// EVENT DELEGATION:
// One listener on the parent handles clicks on all current
// and future delete buttons inside the list.
ItemList.addEventListener("click", Event => {
    if (Event.target.matches(".delete-item")) {
        const ListItem = Event.target.closest("li")
        if (ListItem) {
            ListItem.remove()
            Output.textContent = "Item deleted successfully."
        }
    }
})