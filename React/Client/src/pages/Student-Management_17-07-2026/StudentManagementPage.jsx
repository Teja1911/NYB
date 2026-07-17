import React from 'react'
import StudentProvider from '../../projects/Student-management/context/StudentContext'
import Navbar from '../../projects/Student-management/components/Navbar'
import StudentForm from '../../projects/Student-management/components/StudentForm'
import StudentList from '../../projects/Student-management/components/StudentList'
import "../../projects/Student-management/styles/Student.css"
function StudentManagementPage() {
  return (
    <StudentProvider>
        <div className='container'>
            <Navbar/>
            <StudentForm/>
            <StudentList/>
        </div>
    </StudentProvider>
  )
}

export default StudentManagementPage