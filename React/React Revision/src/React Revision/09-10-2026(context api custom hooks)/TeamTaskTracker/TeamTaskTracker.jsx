
import { createContext, useContext, useEffect, useState } from "react";
import "./TeamTaskTracker.css";

const TaskContext = createContext();
const API = "https://jsonplaceholder.typicode.com/todos?_limit=8";

function useTasks() {
  return useContext(TaskContext);
}

function useFetchTasks() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function load() {
      try {
        const response = await fetch(API, { signal: controller.signal });
        if (!response.ok) throw new Error("Unable to load tasks");

        const data = await response.json();
        setTasks(data.map((task) => ({
          ...task,
          status: task.completed ? "Completed" : "Pending",
        })));
      } catch (err) {
        if (err.name !== "AbortError") setError(err.message);
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }

    load();
    return () => controller.abort();
  }, []);

  return { tasks, setTasks, loading, error };
}

function TaskForm() {
  const { addTask } = useTasks();
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");

  function submit(e) {
    e.preventDefault();
    if (!title.trim()) {
      setError("Enter a task title.");
      return;
    }

    addTask(title.trim());
    setTitle("");
    setError("");
  }

  return (
    <form onSubmit={submit} className="task-form">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="What needs to be done?"
      />
      <button>Add Task</button>
      {error && <p className="error">{error}</p>}
    </form>
  );
}

function TaskList() {
  const { tasks, removeTask, toggleTask, search, filter } = useTasks();

  const visibleTasks = tasks.filter((task) => {
    const matchesText = task.title.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = filter === "All" || task.status === filter;
    return matchesText && matchesStatus;
  });

  if (visibleTasks.length === 0) return <p>No matching tasks found.</p>;

  return visibleTasks.map((task) => (
    <article className="task" key={task.id}>
      <div>
        <strong>{task.title}</strong>
        <p>{task.status}</p>
      </div>
      <button onClick={() => toggleTask(task.id)}>
        {task.status === "Completed" ? "Reopen" : "Complete"}
      </button>
      <button onClick={() => removeTask(task.id)}>Delete</button>
    </article>
  ));
}

function TeamTaskTracker() {
  const { tasks, setTasks, loading, error } = useFetchTasks();
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [dark, setDark] = useState(false);

  function addTask(title) {
    setTasks((current) => [
      { id: Date.now(), title, completed: false, status: "Pending" },
      ...current,
    ]);
  }

  function toggleTask(id) {
    setTasks((current) => current.map((task) =>
      task.id === id
        ? {
            ...task,
            completed: !task.completed,
            status: task.status === "Completed" ? "Pending" : "Completed",
          }
        : task
    ));
  }

  function removeTask(id) {
    setTasks((current) => current.filter((task) => task.id !== id));
  }

  const value = {
    tasks, addTask, toggleTask, removeTask, search, filter,
  };

  if (loading) return <p className="status">Loading tasks...</p>;
  if (error) return <p className="error status">Error: {error}</p>;

  return (
    <TaskContext.Provider value={value}>
      <main className={dark ? "app dark" : "app"}>
        <header>
          <h1>Team Task Tracker</h1>
          <button onClick={() => setDark((current) => !current)}>
            Toggle Theme
          </button>
        </header>

        <TaskForm />

        <section className="toolbar">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search tasks..."
          />
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option>All</option>
            <option>Pending</option>
            <option>Completed</option>
          </select>
        </section>

        <TaskList />
        <p>Total tasks: {tasks.length}</p>
      </main>
    </TaskContext.Provider>
  );
}

export default TeamTaskTracker;
