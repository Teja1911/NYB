import React from 'react'

function Dashboard({role}) {
  switch(role){
    case "Admin":
      return(
        <div className='dashboard'>
          <h2>👨‍💼 Welcome Admin Dashboard</h2>
          <span className='role-badge'>Admin Access</span>
        </div>
      )
      case "HR":
        return(
          <div className='dashboard'>
            <h2>👨‍💼 Welcome HR Dashboard</h2>
            <span className='role-badge'>HR Access</span>
          </div>
        )
        case "Employee":
          return(
            <div className='dashboard'>
              <h2>👨‍💼 Welcome Employee Dashboard</h2>
              <span className='role-badge'>Employee Access</span>
            </div>
          )
          default:
            return(
              <div className='dashboard'>
                <h2>❌ Invalid User</h2>
              </div>
            )
  }
}

export default Dashboard