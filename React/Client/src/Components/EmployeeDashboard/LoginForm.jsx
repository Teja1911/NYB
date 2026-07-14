import React, { useContext } from 'react'
import { AppContext } from './AppContext'

function LoginFrom() {
    const{user,setUser,theme}=useContext(AppContext)
    function login(){
        setUser({
            name:"Tejaswar Rao",
            role:"React Developer",
            isLoggedIn:true
        })
    }
    function logout(){
        setUser({
            name:"Guest",
            role:"Visitor",
            isLoggedIn:false
        })
    }
  return (
    <div className='card' 
     style={{
        background: theme === "light" ? "#ffffff" : "#2d3748",
        color: theme === "light" ? "#000000" : "#ffffff"
    }}>
            <h2>User Authentication</h2>
            <p>
                Status:
                <strong>{user.isLoggedIn ?"Logged In":"Not Logged In"}</strong>
            </p>
            {
                user.isLoggedIn?
                (<button onClick={logout}>Logout</button>):
                (<button onClick={login}>Login</button>)
            }
    </div>
  )
}

export default LoginFrom