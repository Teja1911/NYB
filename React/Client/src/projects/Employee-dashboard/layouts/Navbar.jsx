import React, { useContext } from 'react'
import { AppContext } from '../Features/dashboard/context/AppContext'
import {
    FaBell,
    FaMoon,
    FaSearch,
    FaUserCircle,
    FaEnvelope
} from "react-icons/fa"

function Navbar() {
    const{theme,user}=useContext(AppContext)
  return (
    <nav className="navbar">
            <div className="logo">
                <h2>Employee Portal</h2>
            </div>
            <div className="search-box">
                <FaSearch />
                <input
                    type="text"
                    placeholder="Search Employee..."
                />
            </div>
            <div className="navbar-right">
                <FaBell className="nav-icon"/>
                <FaEnvelope className="nav-icon"/>
                <FaMoon className="nav-icon"/>
                <FaUserCircle className="nav-avatar"/>
                <div>
                    <p>Welcome</p>
                    <strong>{user.name}</strong>
                    <br/>
                    <small>{user.role}</small>
                </div>
            </div>
        </nav>
  )
}

export default Navbar