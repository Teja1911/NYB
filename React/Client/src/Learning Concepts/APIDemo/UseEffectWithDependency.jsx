import React, { useEffect, useState } from 'react'

function UseEffectWithDependency() {
    const[count,setCount]=useState(0)
    useEffect(()=>{
        console.log("Count Changed:" ,count)
    },[count])
  return (
    <div>
        <h2>{count}</h2>
        <button onClick={()=>setCount(count+1)}>Increment</button>
    </div>
  )
}

export default UseEffectWithDependency