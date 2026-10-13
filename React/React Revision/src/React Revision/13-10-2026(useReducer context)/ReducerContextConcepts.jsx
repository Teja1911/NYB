import { createContext, useContext, useReducer, useState } from "react"

// 1. Context : shared application state
const TaskContext = createContext(null)

// 2. Initial state: array of task objects
const initialState = {
    tasks: [
        { id: 1, title: "Learn useReducer", completed: false },
        { id: 2, title: "Learn Context API", completed: true }
    ],
}

// 3. Reducer : decides how state changes
function taskReducer(state, action) {
    switch (action.type) {
        case "ADD":
            return {
                ...state,
                tasks: [...state.tasks, action.payload],
            }
        case "TOGGLE":
            return {
                ...state,
                tasks: state.tasks.map((task) => 
                    task.id === action.payload ? { ...task, completed: !task.completed } : task
                )
            }
        case "DELETE":
            return {
                ...state,
                tasks: state.tasks.filter((task) => task.id !== action.payload)
            }
        case "RESET":
            return initialState
        default:
            return state 
    }
}

// 4. Custom hook : access shared state
function useTasks() {
    const context = useContext(TaskContext)
    if (!context) throw new Error("useTasks must be inside TaskProvider")
    return context
}

// 5. Dispatching actions from a child component
function TaskForm() {
    const { dispatch } = useTasks()
    
    function addTask() {
        dispatch({
            type: "ADD",
            payload: {
                id: Date.now(),
                title: "Practice reducer actions",
                completed: false
            },
        })
    }
    return <button onClick={addTask}>Add Task</button>
}

// 6. Reading and updating an array
function TaskList() {
    const { state, dispatch } = useTasks()
    return (
        <section>
            <h3>Tasks</h3>
            {state.tasks.map((task) => (
                <p key={task.id}>
                    {task.title} - {task.completed ? "Completed" : "Pending"}{" "}
                    <button onClick={() => dispatch({ type: "TOGGLE", payload: task.id })}>Toggle</button>{" "}
                    <button onClick={() => dispatch({ type: "DELETE", payload: task.id })}>Delete</button>
                </p>
            ))}
        </section>
    )
}

// 7. Provider : makes state available to descendants
function TaskProvider({ children }) {
    const [state, dispatch] = useReducer(taskReducer, initialState)
    return (
        <TaskContext.Provider value={{ state, dispatch }}>
            {children}
        </TaskContext.Provider>
    )
}

// Handles the screen layout and provides access to dispatch
function TaskScreen() {
    const { dispatch } = useTasks()
    return (
        <main>
            <h2>useReducer + Context API</h2>
            <p>State is shared between the form and task list.</p>
            <TaskForm />
            <TaskList />
            <div style={{ marginTop: "20px" }}>
                <button onClick={() => dispatch({ type: "RESET" })}>Reset Tasks</button>
            </div>
        </main>
    )
}

// 8. Reset and global state demonstration
export default function ReducerContextConcepts() {
    // Replaced the placeholder function with React's native useState hook
    const [showTasks, setShowTasks] = useState(true)

    return (
        <div style={{ padding: "20px" }}>
            <button onClick={() => setShowTasks(!showTasks)}>
                {showTasks ? "Hide Component" : "Show Component"}
            </button>
            
            <hr />

            {/* Conditionally render the application based on global visibility state */}
            {showTasks && (
                <TaskProvider>
                    <TaskScreen />
                </TaskProvider>
            )}
        </div>
    )
}