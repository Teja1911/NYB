import React from 'react'
import { useState } from 'react'

function LogicalAndExample() {
    const[showMessage,SetShowMessage]=useState(false)
  return (
    <div>
        <button onClick={()=>SetShowMessage(!showMessage)}>Toggle Message</button>
        {showMessage && <h2>Hello React!</h2>}
    </div>
  )
}

export default LogicalAndExample