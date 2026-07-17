import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";
import StudentCard from "./StudentCard";

function StudentList() {
  const { students, deleteStudent } = useContext(StudentContext);

  if (students.length === 0) {
    return <h3>No Students Found</h3>;
  }

  return (
    <div className="student-list">
      {students.map((student) => (
        <StudentCard
          key={student.id}
          student={student}
          deleteStudent={deleteStudent}
        />
      ))}
    </div>
  );
}

export default StudentList;