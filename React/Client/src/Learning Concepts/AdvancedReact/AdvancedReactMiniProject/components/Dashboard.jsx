import React from 'react'
import EmployeeForm from './EmployeeForm'
import EmployeeList from './EmployeeList'
import Theme from './ThemeCard'
import ThemeCard from './ThemeCard'
import ScreenSize from './ScreenSize'

function Dashboard() {
  return (
    <main className='dashboard'>
        <EmployeeForm/>
        <EmployeeList/>
        <ThemeCard/>
        <ScreenSize/>
    </main>
  )
}

export default Dashboard