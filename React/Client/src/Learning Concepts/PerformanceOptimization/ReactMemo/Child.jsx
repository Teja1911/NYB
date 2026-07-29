import React from 'react'

function Child({employeeName}) {
    console.log("Child Component Rendered")
  return (
    <div>
        <h2>Employee Name : {employeeName}</h2>
    </div>
  )
}

export default React.memo(Child)