import { useState } from "react";
import StudentEntryForm from "../components/StudentEntryForm";
import StudentList from "../components/StudentList";
import "../styles/student-management.css";

const initialStudents = [
  { id: 1, name: "Ravi", email: "ravi@mail.com", course: "React" },
  { id: 2, name: "Priya", email: "priya@mail.com", course: "JavaScript" },
];

export default function StudentManagementWorkspace() {
  const [students, setStudents] = useState(initialStudents);
  const [editing, setEditing] = useState(null);
  const [search, setSearch] = useState("");

  function saveStudent(form) {
    if (editing) {
      setStudents(previous =>
        previous.map(student =>
          student.id === editing.id
            ? { ...form, id: editing.id }
            : student
        )
      );
      setEditing(null);
      return;
    }

    setStudents(previous => [
      ...previous,
      { ...form, id: Date.now() },
    ]);
  }

  function deleteStudent(id) {
    setStudents(previous => previous.filter(student => student.id !== id));

    if (editing?.id === id) {
      setEditing(null);
    }
  }

  const filteredStudents = students.filter(student =>
    `${student.name} ${student.email} ${student.course}`
      .toLowerCase()
      .includes(search.toLowerCase().trim())
  );

  return (
    <main className="student-workspace">
      <h1>Student Management</h1>
      <p>Manage student records with React state and reusable components.</p>

      <StudentEntryForm
        key={editing?.id ?? "new-student"}
        editing={editing}
        onSave={saveStudent}
        onCancel={() => setEditing(null)}
        existingStudents={students}
      />

      <section className="student-results">
        <h2>Student List ({filteredStudents.length})</h2>

        <input
          className="student-search"
          value={search}
          onChange={event => setSearch(event.target.value)}
          placeholder="Search name, email or course"
        />

        <StudentList
          students={filteredStudents}
          onEdit={setEditing}
          onDelete={deleteStudent}
        />
      </section>
    </main>
  );
}