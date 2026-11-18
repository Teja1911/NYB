
/*
    TASK MANAGEMENT APPLICATION

    Concepts used:
    1. DOM selection and manipulation
    2. Event handling
    3. Form validation
    4. Dynamic HTML creation
    5. Event delegation
    6. Local Storage
    7. JSON.stringify() and JSON.parse()
    8. Array methods: map(), filter(), find(), reduce()
    9. Template literals
    10. Arrow functions
    11. Object destructuring
    12. Spread operator
*/

// 1. SELECT HTML ELEMENTS.
const TaskForm = document.getElementById("TaskForm")
const TaskTitle = document.getElementById("TaskTitle")
const TaskDescription = document.getElementById("TaskDescription")
const TaskPriority = document.getElementById("TaskPriority")
const TaskList = document.getElementById("TaskList")
const FormMessage = document.getElementById("FormMessage")
const FormHeading = document.getElementById("FormHeading")
const SubmitButton = document.getElementById("SubmitButton")
const CancelEditButton = document.getElementById("CancelEditButton")
const SearchInput = document.getElementById("SearchInput")
const StatusFilter = document.getElementById("StatusFilter")
const PriorityFilter = document.getElementById("PriorityFilter")
const TotalTasks = document.getElementById("TotalTasks")
const PendingTasks = document.getElementById("PendingTasks")
const CompletedTasks = document.getElementById("CompletedTasks")
const TaskCount = document.getElementById("TaskCount")
const EmptyMessage = document.getElementById("EmptyMessage")

// 2. APPLICATION STATE.
// This key identifies the application's Local Storage data.
const StorageKey = "DailyTaskManagementData"
// Read existing tasks from Local Storage.
// If no saved tasks exist, use an empty array.
function LoadTasks() {
    try {
        const SavedData = localStorage.getItem(StorageKey)
        if (!SavedData) {
            return []
        }
        const ParsedData = JSON.parse(SavedData)
        // Confirm that the saved data is an array.
        return Array.isArray(ParsedData) ? ParsedData : []
    } catch (Error) {
        console.error("Unable to read saved tasks:", Error)
        return []
    }
}
let Tasks = LoadTasks()
// This variable identifies the task currently being edited.
// null means that the form is in add mode.
let EditingTaskId = null

// 3. SAVE TASKS TO LOCAL STORAGE.
function SaveTasks() {
    try {
        localStorage.setItem(StorageKey, JSON.stringify(Tasks))
    } catch (Error) {
        console.error("Unable to save tasks:", Error)
        ShowMessage("Could not save tasks in browser storage.", "error")
    }
}

// 4. DISPLAY FEEDBACK MESSAGES.
function ShowMessage(Text, Type) {
    FormMessage.textContent = Text
    FormMessage.className = Type
}

// 5. RESET THE FORM.
function ResetForm() {
    TaskForm.reset()
    EditingTaskId = null
    FormHeading.textContent = "Create New Task"
    SubmitButton.textContent = "Add Task"
    CancelEditButton.hidden = true
}

// 6. ADD OR UPDATE A TASK.
function HandleTaskSubmit(Event) {
    // Prevent the default form submission and page reload.
    Event.preventDefault()
    const Title = TaskTitle.value.trim()
    const Description = TaskDescription.value.trim()
    const Priority = TaskPriority.value
    // Validate the form values.
    if (Title.length < 3) {
        ShowMessage("Task title must contain at least 3 characters.", "error")
        return
    }
    if (!Priority) {
        ShowMessage("Please select a priority.", "error")
        return
    }
    if (EditingTaskId !== null) {
        // UPDATE EXISTING TASK.
        Tasks = Tasks.map(Task => {
            if (Task.Id === EditingTaskId) {
                return {
                    ...Task,
                    Title,
                    Description,
                    Priority,
                    UpdatedAt: new Date().toISOString()
                }
            }
            return Task
        })
        ShowMessage("Task updated successfully.", "success")
    } else {
        // CREATE A NEW TASK.
        const NewTask = {
            Id: crypto.randomUUID(),
            Title,
            Description,
            Priority,
            Completed: false,
            CreatedAt: new Date().toISOString()
        }
        // Spread operator adds the new task without mutating the old array.
        Tasks = [...Tasks, NewTask]
        ShowMessage("Task added successfully.", "success")
    }
    SaveTasks()
    ResetForm()
    RefreshApplication()
}

// 7. DISPLAY TASKS DYNAMICALLY.
function DisplayTasks(TaskData) {
    // Remove previous task elements before rendering.
    TaskList.replaceChildren()
    EmptyMessage.hidden = TaskData.length !== 0
    TaskCount.textContent =
        `${TaskData.length} ${TaskData.length === 1 ? "task" : "tasks"}`
    TaskData.forEach(Task => {
        const {
            Id,
            Title,
            Description,
            Priority,
            Completed,
            CreatedAt
        } = Task
        // Create the task card.
        const Card = document.createElement("article")
        Card.className = Completed
            ? "task-card completed"
            : "task-card"
        // Store the task ID for event delegation.
        Card.dataset.taskId = Id
        // Create the title.
        const Heading = document.createElement("h3")
        Heading.className = "task-title"
        Heading.textContent = Title
        // Create the description.
        const DescriptionText = document.createElement("p")
        DescriptionText.className = "task-description"
        DescriptionText.textContent = Description || "No description provided."
        // Create task metadata.
        const Meta = document.createElement("div")
        Meta.className = "task-meta"
        const PriorityBadge = document.createElement("span")
        PriorityBadge.className = `priority ${Priority}`
        PriorityBadge.textContent = `${Priority} Priority`
        const Status = document.createElement("span")
        Status.textContent = Completed ? "Completed" : "Pending"
        const DateText = document.createElement("span")
        DateText.textContent =
            `Created: ${new Date(CreatedAt).toLocaleDateString()}`
        Meta.append(PriorityBadge, Status, DateText)
        // Create task action buttons.
        const Actions = document.createElement("div")
        Actions.className = "task-actions"
        const CompleteButton = document.createElement("button")
        CompleteButton.className = "complete-button"
        CompleteButton.dataset.action = "toggle"
        CompleteButton.textContent = Completed
            ? "Mark Pending"
            : "Complete"
        const EditButton = document.createElement("button")
        EditButton.className = "edit-button"
        EditButton.dataset.action = "edit"
        EditButton.textContent = "Edit"
        const DeleteButton = document.createElement("button")
        DeleteButton.className = "delete-button"
        DeleteButton.dataset.action = "delete"
        DeleteButton.textContent = "Delete"
        Actions.append(CompleteButton, EditButton, DeleteButton)
        // Add all elements to the task card.
        Card.append(Heading, DescriptionText, Meta, Actions)
        // Add the card to the task list.
        TaskList.appendChild(Card)
    })
}

// 8. SEARCH AND FILTER TASKS.
function GetFilteredTasks() {
    const SearchText = SearchInput.value.trim().toLowerCase()
    const SelectedStatus = StatusFilter.value
    const SelectedPriority = PriorityFilter.value
    // filter() returns only tasks matching the conditions.
    return Tasks.filter(Task => {
        const MatchesSearch =
            Task.Title.toLowerCase().includes(SearchText) ||
            Task.Description.toLowerCase().includes(SearchText)
        const MatchesStatus =
            SelectedStatus === "All" ||
            (SelectedStatus === "Completed" && Task.Completed) ||
            (SelectedStatus === "Pending" && !Task.Completed)
        const MatchesPriority =
            SelectedPriority === "All" ||
            Task.Priority === SelectedPriority
        return MatchesSearch && MatchesStatus && MatchesPriority
    })
}

// 9. UPDATE TASK STATISTICS.
function UpdateStatistics() {
    const Total = Tasks.length
    // filter() counts tasks that are not completed.
    const Pending = Tasks.filter(
        Task => !Task.Completed
    ).length
    // filter() counts completed tasks.
    const Completed = Tasks.filter(
        Task => Task.Completed
    ).length
    TotalTasks.textContent = Total
    PendingTasks.textContent = Pending
    CompletedTasks.textContent = Completed
}

// 10. EDIT A TASK.
function EditTask(TaskId) {
    const SelectedTask = Tasks.find(
        Task => Task.Id === TaskId
    )
    if (!SelectedTask) {
        ShowMessage("Task not found.", "error")
        return
    }
    // Fill the form with existing task details.
    TaskTitle.value = SelectedTask.Title
    TaskDescription.value = SelectedTask.Description
    TaskPriority.value = SelectedTask.Priority
    // Change the form into edit mode.
    EditingTaskId = TaskId
    FormHeading.textContent = "Edit Task"
    SubmitButton.textContent = "Update Task"
    CancelEditButton.hidden = false
    // Move the user to the form.
    TaskForm.scrollIntoView({
        behavior: "smooth",
        block: "start"
    })
    TaskTitle.focus()
}

// 11. DELETE A TASK.
function DeleteTask(TaskId) {
    const SelectedTask = Tasks.find(
        Task => Task.Id === TaskId
    )
    if (!SelectedTask) {
        return
    }
    const ConfirmDelete = window.confirm(
        `Are you sure you want to delete "${SelectedTask.Title}"?`
    )
    if (!ConfirmDelete) {
        return
    }
    // Keep every task except the selected task.
    Tasks = Tasks.filter(
        Task => Task.Id !== TaskId
    )
    // If the deleted task was being edited, reset the form.
    if (EditingTaskId === TaskId) {
        ResetForm()
    }
    SaveTasks()
    RefreshApplication()
    ShowMessage("Task deleted successfully.", "success")
}

// 12. CHANGE COMPLETION STATUS.
function ToggleTaskStatus(TaskId) {
    // map() creates an updated array.
    Tasks = Tasks.map(Task => {
        if (Task.Id === TaskId) {
            return {
                ...Task,
                Completed: !Task.Completed
            }
        }
        return Task
    })
    SaveTasks()
    RefreshApplication()
}

// 13. EVENT DELEGATION FOR TASK ACTIONS.
// One event listener handles all task action buttons.
// It also works for buttons created dynamically later.
TaskList.addEventListener("click", Event => {
    const ActionButton = Event.target.closest("button[data-action]")
    if (!ActionButton || !TaskList.contains(ActionButton)) {
        return
    }
    const TaskCard = ActionButton.closest("[data-task-id]")
    if (!TaskCard) {
        return
    }
    const TaskId = TaskCard.dataset.taskId
    const Action = ActionButton.dataset.action
    if (Action === "edit") {
        EditTask(TaskId)
    }
    if (Action === "delete") {
        DeleteTask(TaskId)
    }
    if (Action === "toggle") {
        ToggleTaskStatus(TaskId)
    }
})

// 14. REFRESH THE APPLICATION.
function RefreshApplication() {
    const FilteredTasks = GetFilteredTasks()
    DisplayTasks(FilteredTasks)
    UpdateStatistics()
}

// 15. FORM EVENT.
TaskForm.addEventListener("submit", HandleTaskSubmit)

// 16. SEARCH EVENT.
SearchInput.addEventListener("input", RefreshApplication)

// 17. FILTER EVENTS.
StatusFilter.addEventListener("change", RefreshApplication)
PriorityFilter.addEventListener("change", RefreshApplication)

// 18. CANCEL EDIT EVENT.
CancelEditButton.addEventListener("click", () => {
    ResetForm()
    ShowMessage("Edit cancelled.", "success")
})

// 19. RESET FILTERS.
document.getElementById("ResetFiltersButton").addEventListener("click", () => {
    SearchInput.value = ""
    StatusFilter.value = "All"
    PriorityFilter.value = "All"
    RefreshApplication()
})

// 20. INITIAL APPLICATION LOAD.
// Load saved tasks and display them when the page opens.
RefreshApplication()