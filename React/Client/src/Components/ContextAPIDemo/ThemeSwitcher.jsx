import React, { useContext } from 'react'
import { AppContext } from './AppContext'

function ThemeSwitcher() {
    const{theme,setTheme}=useContext(AppContext)
    function changeTheme(){
        console.log("Current Theme :", theme);
        setTheme(theme === "light"? "dark": "light")
    }
  return (
    <div className='card'
     style={{
        background: theme === "light" ? "#ffffff" : "#2d3748",
        color: theme === "light" ? "#000000" : "#ffffff"
    }}>
                <h2>Theme Management</h2>
                <p>Current Theme:
                    <strong>{theme}</strong>
                </p>
                <button onClick={changeTheme}>Switch Theme</button>
            </div>
  )
}

export default ThemeSwitcher