import React from 'react'

function NestedList() {
    const departments=[
        {
            id:1,
            department:"IT",
            employees:["Teja","Surya","Lucky"]
        },
        {
            id:2,
            department:"HR",
            employees:["Rahul","Priya","Sneha"]
        }
    
    ]
  return (
    <div>
        <h2>Department List</h2>
        {
            departments.map((department)=>{
                <div key={department.id}>
                    <p>{department.department}</p>
                    {
                        department.employees.map((employee,index)=>{
                            <p key={index}>
                                {employee}
                            </p>
                        })
                    }
                </div>
            })
        }
    </div>
  )
}

export default NestedList