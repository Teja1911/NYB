import React, { createContext, useState } from 'react'

export const AppContext=createContext()
function AppProvider({children}) {
    const[theme,setTheme]=useState("light")
    const[user,setUser]=useState(
    {
      id: "EMP1001",
      name: "Tejaswar Rao",
      role: "Frontend Developer",
      department: "Frontend Engineering",
      email: "tejaswar@example.com",
      phone: "+91 9876543210",
      experience: "1 Year",
      joiningDate: "17-Feb-2026",
      manager: "VaraPrasad",
      status: "Active",
      isLoggedIn: true
    })
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