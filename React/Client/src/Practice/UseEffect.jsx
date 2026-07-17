import React, { useEffect } from 'react'

function UseEffect() {
    useEffect(()=>{
        console.log("Component Mounted")
    },[])
  return (
    <div>
        
    </div>
  )
}

export default UseEffect