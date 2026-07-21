import React, { useEffect, useState } from 'react'

function UseEffectNoDependency() {
    const[count,setCount]=useState(0)
    useEffect(()=>{
        console.log("Runs after every render")
    })
  return (
    <div>
        <h2>Count :{count}</h2>
        <button onClick={()=>setCount(count+1)}>Increment</button>
    </div>
  )
}

export default UseEffectNoDependency