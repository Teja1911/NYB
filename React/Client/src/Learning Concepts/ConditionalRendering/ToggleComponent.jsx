import React from 'react'
import { useState } from 'react'

function ToggleComponent() {
    const[show,setShow]=useState(false)
  return (
    <div>
        <button onClick={()=>setShow(!show)}>{show?"Hide":"Show"}</button>
        {show && <h2>The Component is Visible.</h2>}
    </div>
  )
}

export default ToggleComponent