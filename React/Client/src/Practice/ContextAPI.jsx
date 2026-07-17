import React, { createContext } from 'react'
import ContextAPIChild from './ContextAPIChild'
export const UserContext= createContext()
function ContextAPI() {

  return (
    <div>
        <UserContext.Provider value="Teja">
            <ContextAPIChild/>
        </UserContext.Provider>
    </div>
  )
}

export default ContextAPI