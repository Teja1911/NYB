import React, { useContext } from 'react'
import { AppContext } from './AppContext'

function Dashboard() {
    const{theme,user,cartCount}=useContext(AppContext)
  return (
    <div className='card'>
                <h1>Employee Dashboard</h1>
                <hr />
                <h3>Welcome, {user.name}</h3>
                <p>Role : {user.role}</p>
                <p>Current Theme : {theme}</p>
                <p>Cart Count : {cartCount}</p>
            </div>
  )
}

export default Dashboard