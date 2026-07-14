import React, { useContext } from 'react'
import { AppContext } from './AppContext'

function UserProfile() {
    const{theme,user}=useContext(AppContext)
  return (
    <div className='card'
     style={{
        background: theme === "light" ? "#ffffff" : "#2d3748",
        color: theme === "light" ? "#000000" : "#ffffff"
    }}>
            <h2>User Profile</h2>
            <hr />
            <p>
                <strong>Name:</strong>
                {user.name}
            </p>
            <p>
                <strong>Role:</strong>
                {user.role}
            </p>
            <p>
                <strong>Status:</strong>
                {user.isLoggedIn?"Logged In":"Guest User"}
            </p>
            <p>
                <strong>Current Theme:</strong>
                {theme}
            </p>
        </div>
  )
}

export default UserProfile