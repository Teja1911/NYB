import React, { useContext } from 'react'
import { AppContext } from './AppContext'

function Sidebar() {
    const{theme,user}=useContext(AppContext)
  return (
    <aside className='sidebar'> 
        <h2>Employee Portal</h2>
        <hr />
        <h3>{user.name}</h3>
        <p>{user.role}</p>
        <hr />
         <ul
                style={{
                    listStyle: "none",
                    padding: 0
                }}
            >
                <li>🏠 Dashboard</li>
                <li>👨 Employees</li>
                <li>📅 Attendance</li>
                <li>📝 Leaves</li>
                <li>⚙ Settings</li>
        </ul>

    </aside>
  )
}

export default Sidebar