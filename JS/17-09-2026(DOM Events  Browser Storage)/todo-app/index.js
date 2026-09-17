const taskForm = document.querySelector("#taskForm");
const taskInput = document.querySelector("#taskInput");
const taskList = document.querySelector("#taskList");
const emptyMessage = document.querySelector("#emptyMessage");
const filterButtons = document.querySelectorAll(".filter-button");

let todoItems = JSON.parse(localStorage.getItem("todoItems")) || [];

let currentFilter = "all";


// Generate unique ID
function createTodoId() {
    return Date.now();
}


// Save todos to Local Storage
function saveTodos() {
    localStorage.setItem(
        "todoItems",
        JSON.stringify(todoItems)
    );
}


// Get filtered todos
function getFilteredTodos() {

    if (currentFilter === "active") {

        return todoItems.filter(todo => {
            return !todo.completed;
        });

    }

    if (currentFilter === "completed") {

        return todoItems.filter(todo => {
            return todo.completed;
        });

    }

    return todoItems;
}


// Render todos
function renderTodos() {

    taskList.innerHTML = "";

    const visibleTodos = getFilteredTodos();

    if (visibleTodos.length === 0) {

        emptyMessage.textContent = "No todos found.";

        return;
    }

    emptyMessage.textContent = "";


    visibleTodos.forEach(todo => {

        const listItem = document.createElement("li");

        listItem.className = "todo-item";

        listItem.dataset.id = todo.id;


        const checkboxInput = document.createElement("input");

        checkboxInput.type = "checkbox";

        checkboxInput.className = "complete-checkbox";

        checkboxInput.checked = todo.completed;


        const todoLabel = document.createElement("span");

        todoLabel.className = "todo-text";

        todoLabel.textContent = todo.title;


        if (todo.completed) {
            todoLabel.classList.add("completed");
        }


        const editButton = document.createElement("button");

        editButton.className = "edit-button";

        editButton.textContent = "Edit";


        const deleteButton = document.createElement("button");

        deleteButton.className = "delete-button";

        deleteButton.textContent = "Delete";


        listItem.append(
            checkboxInput,
            todoLabel,
            editButton,
            deleteButton
        );


        taskList.appendChild(listItem);

    });
}


// Add todo
taskForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const enteredTitle = taskInput.value.trim();

    if (enteredTitle === "") {

        alert("Please enter a todo.");

        return;
    }


    const newTodo = {
        id: createTodoId(),
        title: enteredTitle,
        completed: false
    };


    todoItems.push(newTodo);

    saveTodos();

    renderTodos();

    taskInput.value = "";

    taskInput.focus();

});


// Todo actions using event delegation
taskList.addEventListener("click", function(event) {

    const clickedItem = event.target.closest(".todo-item");

    if (!clickedItem) {
        return;
    }


    const selectedId = Number(clickedItem.dataset.id);


    if (event.target.classList.contains("delete-button")) {

        todoItems = todoItems.filter(todo => {
            return todo.id !== selectedId;
        });

        saveTodos();

        renderTodos();

        return;
    }


    if (event.target.classList.contains("edit-button")) {

        const selectedTodo = todoItems.find(todo => {
            return todo.id === selectedId;
        });


        if (!selectedTodo) {
            return;
        }


        const updatedTitle = prompt(
            "Edit Todo",
            selectedTodo.title
        );


        if (updatedTitle === null) {
            return;
        }


        const cleanedTitle = updatedTitle.trim();


        if (cleanedTitle === "") {
            alert("Todo cannot be empty.");
            return;
        }


        selectedTodo.title = cleanedTitle;

        saveTodos();

        renderTodos();

    }

});


// Mark todo completed
taskList.addEventListener("change", function(event) {

    if (!event.target.classList.contains("complete-checkbox")) {
        return;
    }


    const parentItem = event.target.closest(".todo-item");

    const changedId = Number(parentItem.dataset.id);


    const matchingTodo = todoItems.find(todo => {
        return todo.id === changedId;
    });


    if (!matchingTodo) {
        return;
    }


    matchingTodo.completed = event.target.checked;

    saveTodos();

    renderTodos();

});


// Filter todos
filterButtons.forEach(filterButton => {

    filterButton.addEventListener("click", function() {

        currentFilter = filterButton.dataset.filter;

        renderTodos();

    });

});


// Initial rendering
renderTodos();