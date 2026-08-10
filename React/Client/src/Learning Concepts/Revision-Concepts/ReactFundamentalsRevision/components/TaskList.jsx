

function TaskList({tasks = []}) {
  return (
    <div className="task-list">
        <h3>Employee Task:</h3>
        {tasks.length > 0 ? (
            <ul>
                {tasks.map((task)=>(
                    <li key={task.id}>
                        {task.title}
                    </li>
                ))}
            </ul>
        ):(
            <p>No Task Available.</p>
        )}
    </div>
  )
}

export default TaskList