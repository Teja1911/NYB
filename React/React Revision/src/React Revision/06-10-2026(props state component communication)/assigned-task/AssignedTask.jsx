import { useState } from "react"

function Child({userName,role,onSelect}){
    return(
        <div>
            <h2>Child Component</h2>
            <p>User: {userName}</p>
            <p>Role: {role}</p>
            <button onClick={()=>onSelect(userName)}>Select User</button>
        </div>
    )
}   

function Middle({children}){
    return(
        <div>
            <h2>Middle Component</h2>
            {children}
        </div>
    )
}

function AssignedTask(){
    const [selectedUser,setSelectedUser]=useState("")
    const [count,setCount]=useState(0)
    const [showDetails,setShowDetails]=useState(false)
    const user={
        userName:"Teja",
        role:"Frontend Developer"
    }
    function handleUserSelection(name){
        setSelectedUser(name)
    }
    return(
        <div>
            <h1>Component Communication</h1>
            <Middle>
                <Child 
                userName={user.userName}
                role={user.role}
                onSelect={handleUserSelection}/>
            </Middle>
            <hr />
            <h2>State Example</h2>
            <p>Count: {count}</p>
            <button onClick={()=>setCount(count+1)}>Increase</button>
            <button onClick={()=>setCount(count-1)}>Decrease</button>
            <hr />
            <button onClick={()=>setShowDetails(!showDetails)}>{showDetails ? "Hide Details" : "Show Details"}</button>
            {showDetails && (
                <div>
                    <h3>User Details</h3>
                    <p>Name: {user.userName}</p>
                    <p>Role: {user.role}</p>
                </div>
            )
            }
            {selectedUser && 
            <p>Selected User: <strong>{selectedUser}</strong></p>}
        </div>
    )
}
export default AssignedTask