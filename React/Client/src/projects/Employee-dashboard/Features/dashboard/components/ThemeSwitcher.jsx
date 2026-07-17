import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import {FaMoon,FaSun,FaPalette} from 'react-icons/fa'

function ThemeSwitcher() {
    const{theme,setTheme}=useContext(AppContext)
    function toggleTheme() {
        setTheme(theme === "light"? "dark": "light");
    }
  return (
    <div className="card">
            <h2>
                <FaPalette />
                {" "}Appearance
            </h2>
            <hr />
            <br />
            <h3>Current Theme</h3>
            <h1>
                {
                    theme === "light"
                    ?
                    <>
                        <FaSun />
                        {" "}Light Mode
                    </>
                    :
                    <>
                        <FaMoon />
                        {" "}Dark Mode
                    </>
                }
            </h1>
            <p>Change the appearance of the Employee Portal.</p>
            <br />
            <button onClick={toggleTheme}>Switch Theme</button>
     </div>

  )
}

export default ThemeSwitcher