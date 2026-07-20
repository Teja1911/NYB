import React from 'react'

function EmptyState() {
    const employees=[]
  return (
    <div>
        {employees.length===0?(
            <h2>No Employees Found</h2>):
            (<h2>Employee List</h2>)
        }
    </div>
  )
}

export default EmptyState