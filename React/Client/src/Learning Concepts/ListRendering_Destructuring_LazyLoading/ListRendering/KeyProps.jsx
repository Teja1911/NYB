import React from 'react'

function KeyProps() {
    const employees=[
        {id:1,name:"Teja"},
        {id:2,name:"Surya"},
        {id:3,name:"Lucky"},
        {id:4,name:"Bob"}
    ]
  return (
    <div>
        <h2>Key Prop </h2>
        {
            employees.map((employee)=>{
                <p key={employee.id}>
                    {employee.name}
                </p>
            })
        }
    </div>
  )
}

export default KeyProps