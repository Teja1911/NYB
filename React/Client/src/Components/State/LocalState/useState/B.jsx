import React, { useState } from 'react'

function B() {
    let [user,setUser]=useState({
        Name:"Teja",
        City:"Hyd"
    })
  return (
    <div>
        <h2>Local State</h2>
        <h2>{user.Name}</h2>
        <h2>{user.City}</h2>
        <button onClick={()=>
            setUser({...user,City:"Chennai"})
            }>Click</button>
    </div>
  )
}

export default B