import React, { useState } from 'react'
import Child from './Child'

function Parent(props){
    let [count,setCount]=useState(0)
    return(
        <>
        <p>{count}</p>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <p>{props.value}</p>
       
        </>
    )
}
export default Parent