import StudentProfileCard from "./StudentProfileCard";

export default function StudentList({ students, onEdit, onDelete }) {
  if (students.length === 0) {
    return <p>No students found. Try another search.</p>;
  }

  return (
    <div className="student-list">
      {students.map(student => (
        <StudentProfileCard
          key={student.id}
          student={student}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}