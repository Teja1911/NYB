import React, { useContext } from 'react'
import {AppContext} from '../../EmployeeDashboard/ContextAPIDemo/AppContext'
function WelcomeCard() {
    const{user,theme}=useContext(AppContext)
  return (
    <div className="card">
            <h2>👋 Welcome Back,</h2>
            <h1>{user.name}</h1>
            <hr />
            <p><strong>Role :</strong>{user.role}</p>
            <p><strong>Department :</strong>Frontend Development</p>
            <p><strong>Experience :</strong>1 Year</p>
            <p><strong>Last Login :</strong>Today 9:00 AM</p>
            <p><strong>Current Theme :</strong>{theme}</p>
    </div>
  )
}

export default WelcomeCard