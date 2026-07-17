import { useContext, useState } from "react";
import { StudentContext } from "../context/StudentContext";

function StudentForm() {
  const { addStudent } = useContext(StudentContext);

  const [student, setStudent] = useState({
    name: "",
    email: "",
  });

  function handleChange(e) {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!student.name || !student.email) {
      alert("Please fill all fields");
      return;
    }

    addStudent({
      id: Date.now(),
      name: student.name,
      email: student.email,
    });

    setStudent({
      name: "",
      email: "",
    });
  }

  return (
    <form className="student-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Student Name"
        value={student.name}
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Student Email"
        value={student.email}
        onChange={handleChange}
      />

      <button type="submit">
        Add Student
      </button>
    </form>
  );
}

export default StudentForm;