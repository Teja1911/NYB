import React from 'react'

function StudentCard({ student, deleteStudent }) {
  return (
     <div className="student-card">
      <div>
        <h3>{student.name}</h3>
        <p>{student.email}</p>
      </div>

      <button onClick={() => deleteStudent(student.id)}>
        Delete
      </button>
    </div>
  )
}

export default StudentCard