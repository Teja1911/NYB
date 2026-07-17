import React, { useState } from 'react'
import { StrictMode } from 'react'
import B from './B.jsx'

function A() {
    let name="Teja"
    let age=22
    function greet(){
        return "Welcome to React"
    }
    const[count,setCount]=useState(0)
    //Own Data is called state
    //Api Data
    //Data coming From Parent Component is called props
    return(
        <StrictMode>
            <hr style={{ border: "none", borderTop: "1px solid #e70f0fe7", margin: "20px 0" }} />
            <h1>Hello This is Functional Component</h1>
            {/* <B/> */}
            <B hello={"hi"}/>
            <h1>Name: {name}</h1>
            <p>Age: {age}</p>
            <p>Greetings: {greet()}</p>
            <p>Vote Eligibility: {age>18?"Eligible to Vote" :"Not Eligible to Vote"}</p>
            <h2>Counter:{count}</h2>
            <button onClick={()=>setCount(count+1)}>Increment</button>
        </StrictMode>
    )
}
export default A