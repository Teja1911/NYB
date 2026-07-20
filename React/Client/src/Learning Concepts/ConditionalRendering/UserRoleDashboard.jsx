import React from 'react'

function UserRoleDashboard() {
    const role="HR"
  return (
    <div>
        {role==="Admin" && <h2>Admin Dashboard</h2>}
        {role==="HR" && <h2>HR Dashboard</h2>}
        {role==="Employee" && <h2>Employee Dashboard</h2>}
    </div>
  )
}

export default UserRoleDashboard