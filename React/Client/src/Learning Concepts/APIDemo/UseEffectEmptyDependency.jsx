import React, { useEffect } from 'react'

function UseEffectEmptyDependency() {
    useEffect(()=>{
        console.log("Runs only once after first render")
    },[])
  return (
    <div>
        <p>Check the console</p>
    </div>
  )
}

export default UseEffectEmptyDependency