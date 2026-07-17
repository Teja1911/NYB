import React, { useContext } from 'react'
import {UserContext} from './ContextAPI'
function ContextAPIChild() {
    
    const user=useContext(UserContext)
  return (
    <div>
        <h2>{user}</h2>
    </div>
  )
}

export default ContextAPIChild