import React, { useEffect, useState } from 'react'

function UseEffectCleanup() {
    const[show,setShow]=useState(true)
  return (
    <div>
       <button onClick={()=>setShow(!show)}>{show?"Hide":"Show"}</button> 
        {show&&<Timer/>}
    </div>
  )
}
function Timer(){
    useEffect(()=>{
        const id=setInterval(()=>{
            console.log("Running...")
        },1000)
        return ()=>{
            clearInterval(id)
            console.log("Cleanup Executed")
        }
    },[])
    return(
        <h2>Timer Running...</h2>
    )

}

export default UseEffectCleanup