import React from 'react'
import DashboardStats from './DashboardStats'
import WelcomeCard from './WelcomeCard'
import ThemeSwitcher from '../../EmployeeDashboard/ContextAPIDemo/ThemeSwitcher'
import UserProfile from '../../EmployeeDashboard/ContextAPIDemo/UserProfile'
import LoginFrom from '../../EmployeeDashboard/ContextAPIDemo/LoginForm'

function DashboardContent() {
  return (
    <>
        <DashboardStats/>
        <div className="dashboard-grid">
            <div className="left-column">
                <WelcomeCard/>
                <ThemeSwitcher/>
            </div>
        </div>
        <div className='right-column'>
            <UserProfile/>
            <LoginFrom/>
        </div>
    </>
  )
}

export default DashboardContent