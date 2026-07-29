import React, { useState } from 'react'
import Child from './Child'

function Parent() {
    const[count,setCount]=useState(0)
  return (
    <div>
        <h1>Parent Component</h1>
        <h2>Count : {count}</h2>
        <button onClick={()=>setCount(count+1)}>Increase</button>
        <Child employeeName="Teja"/>
    </div>
  )
}

export default Parent