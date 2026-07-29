import React from 'react'

function Child({onSave}) {
    console.log("Child Rendered")
  return (
    <div>
        <h2>Child Component</h2>
        <button onClick={onSave}>Save Employee</button>
    </div>
  )
}

export default React.memo(Child)