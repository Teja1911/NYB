export default function StudentProfileCard({
  student,
  onEdit,
  onDelete,
}) {
  return (
    <article className="student-card">
      <h3>{student.name}</h3>
      <p>Email: {student.email}</p>
      <p>Course: {student.course}</p>

      <button onClick={() => onEdit(student)}>Edit</button>
      <button onClick={() => onDelete(student.id)}>Delete</button>
    </article>
  );
}