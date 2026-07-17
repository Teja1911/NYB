import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import {
FaLock,
FaUserCheck,
FaSignOutAlt,
FaSignInAlt
} from 'react-icons/fa'

function LoginFrom() {
    const{user,setUser}=useContext(AppContext)
   function handleAuth(){
        if(user.isLoggedIn){
            setUser({
                ...user,
                isLoggedIn:false,
                name:"Guest",
                role:"Visitor"
            });
        }
        else{
            setUser({
                ...user,
                isLoggedIn:true,
                name:"Tejaswar Rao",
                role:"Frontend Developer"
            });
        }
    }
  return (
    
        <div className="card">
            <h2>
                <FaLock />
                {" "}Authentication
            </h2>
            <hr />
            <br />
            <p>
                <strong>User :</strong>
                {user.name}
            </p>
            <p>
                <strong>Role :</strong>
                {user.role}
            </p>
            <p>
                <strong>Status :</strong>
                {
                    user.isLoggedIn
                    ?
                    <span style={{color:"green"}}>
                        <FaUserCheck />
                        {" "}Logged In
                    </span>
                    :
                    <span style={{color:"red"}}>
                        Logged Out
                    </span>
                }
            </p>
            <br />
            <button
                onClick={handleAuth}
            >
                {
                    user.isLoggedIn
                    ?
                    <>
                        <FaSignOutAlt />
                        {" "}Logout
                    </>
                    :
                    <>
                        <FaSignInAlt />
                        {" "}Login
                    </>
                }
            </button>
    </div>
  )
}

export default LoginFrom