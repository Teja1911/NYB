import { createContext, useEffect, useState } from "react";
import { getStudents } from "../Services/api";

export const StudentContext = createContext();

function StudentProvider({ children }) {
  const [students, setStudents] = useState([]);

 async function loadStudents() {
    const data = await getStudents();
    setStudents(data);
  }
  useEffect(() => {
    loadStudents();
  }, []);

 

  function addStudent(student) {
    setStudents((prev) => [...prev, student]);
  }

  function deleteStudent(id) {
    setStudents((prev) =>
      prev.filter((student) => student.id !== id)
    );
  }

  return (
    <StudentContext.Provider
      value={{
        students,
        addStudent,
        deleteStudent,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
}

export default StudentProvider;