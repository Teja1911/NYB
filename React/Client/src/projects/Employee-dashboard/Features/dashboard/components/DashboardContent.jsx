import React from 'react'
import DashboardStats from './DashboardStats'
import WelcomeCard from './WelcomeCard'
import ThemeSwitcher from '../components/ThemeSwitcher'
import UserProfile from '../components/UserProfile'
import LoginFrom from '../components/LoginForm'

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