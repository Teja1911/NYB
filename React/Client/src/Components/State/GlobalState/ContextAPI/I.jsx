import React, { useContext, useState } from 'react'
import { context } from './A'

function I() {
  // console.log(context)
  let {a,setA}=useContext(context)
  
  return (
    <div>
        I
        <h3>The value in the I Component from A Component {a}</h3>
        <button onClick={()=>{setA(a+1)}}>Click</button>
    </div>
  )
}

export default I