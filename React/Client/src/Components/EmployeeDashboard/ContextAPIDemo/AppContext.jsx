import React, { createContext, useState } from 'react'

export const AppContext=createContext()
function AppProvider({children}) {
    const[theme,setTheme]=useState("light")
    const[user,setUser]=useState({name:"Guest",role:"Visitor",isLoggedIn:false})
    const[cartCount,setCartCount]=useState(0)

  return (
    <AppContext.Provider
        value={{
            theme,
            setTheme,
            user,
            setUser,
            cartCount,
            setCartCount
        }}>  
        {children} 
    </AppContext.Provider>
  )
}

export default AppProvider