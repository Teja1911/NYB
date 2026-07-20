import React from 'react'
import { useState } from 'react'
import Dashboard from './Dashboard'
import './LoginLogout.css'
function LoginLogout() {
    const[isLoggedIn,setIsLoggedIn]=useState(false)
    const role="HR"
  return (
    <div className='login-container'>
        <div className='login-card'>
            <h1>Employee Portal</h1>
            <p>{isLoggedIn?"You are successfully logged in. ":"Please login to continue."}</p>
            <button 
            className={isLoggedIn?"logout-btn":"login-btn"} 
            onClick={()=>setIsLoggedIn(!isLoggedIn)}>
                {isLoggedIn?"Logout":"Login"}
            </button>
            {isLoggedIn?<Dashboard role={role}/>:null}
        </div>
        
    </div>
  )
}

export default LoginLogout