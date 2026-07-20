import React from 'react'
import { useState } from 'react'

function TernaryExample() {
    const[isLoggedIn,SetIsLoggedIn]=useState(false)
  return (
    <div>
        <h2>{isLoggedIn ? "Welcome User" : "Please Login"}</h2>
        <button onClick={()=>SetIsLoggedIn(!isLoggedIn)}>{isLoggedIn?"Logout":"Login"}</button>
    </div>
  )
}

export default TernaryExample