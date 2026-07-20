import React from 'react'
import { useState } from 'react'

function Dashboard() {
    const[isLoggedIn,SetIsLoggedIn]=useState(false)
    if(isLoggedIn){
  return (
    <div>
        <h2>Welcome User</h2>
        <button onClick={()=>SetIsLoggedIn(false)}>Logout</button>
    </div>
  )}
  else{
    return(
        <div>
            <h2>Please Login</h2>
            <button onClick={()=>SetIsLoggedIn(true)}>Login</button>
        </div>
    )
  }
}

export default Dashboard