import React from 'react'
import useTheme from './hooks/useTheme'

function ThemeDemo() {
    const{theme,toggleTheme}=useTheme()
  return (
    <div style={{
        backgroundColor:
            theme === "light"
                ?"#ffffff"
                :"#222222",
        color:
            theme === "light"
                ?"#000000"
                :"#ffffff",
        minHeight:"100vh",
        padding:"20px"
    }}>
        <h1>Theme Demo</h1>
        <h2>Current Theme : {theme}</h2>
        <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  )
}

export default ThemeDemo