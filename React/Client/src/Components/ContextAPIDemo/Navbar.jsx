import React, { useContext } from 'react'
import { AppContext } from './AppContext'

function Navbar() {
    const{theme,user}=useContext(AppContext)
    console.log("Navbar Theme:", theme);
  return (
    <nav className='navbar'>
            <h2>Employee Portal</h2>
            <div className='navbar-info'>
                <p>
                    Welcome &nbsp;
                    <strong>{user.name}</strong>
                </p>
                <p>
                    Theme &nbsp;
                    <strong>{theme}</strong>
                </p>
            </div>
        </nav>
  )
}

export default Navbar