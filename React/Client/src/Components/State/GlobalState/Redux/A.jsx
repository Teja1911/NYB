import React, { useState } from 'react'

import B from './B'
import C from './C'
import { useDispatch, useSelector } from 'react-redux'

function A() {
  let data=useSelector((state)=>{return state.sum})
  console.log(data)
  let [a,setA]=useState(19)
  let d=useDispatch()
  return (
    <>
    <h3>Data: {data}</h3>
    <button onClick={()=>d({type:"a"})}>Increase</button>
    <button onClick={()=>d({type:"B"})}>Decrease</button>
    <B value={a}/>
    <C value={a}/>
    </>
  )
}

export default A