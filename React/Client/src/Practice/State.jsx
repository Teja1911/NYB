import React, { useState } from 'react'

function State() {
    let[count,setCount]=useState(0)
  return (
    <>
        <h2>{count}</h2>
        <button onClick={()=>{setCount(count+1)}}>Increment</button>
    </>
  )
}

export default State