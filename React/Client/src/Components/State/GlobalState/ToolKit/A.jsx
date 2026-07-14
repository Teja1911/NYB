import React, { useState } from 'react'

import B from './B'
import C from './C'
import { useDispatch, useSelector } from 'react-redux'
import { Dec, Inc } from './reducer'

function A() {
  let [a,setA]=useState(19)
  let d=useSelector((state)=>{
    return state.count.value
  })
  let dispatch=useDispatch()
  console.log(d)
  return (
    <>
    <h3>{d}</h3>
    <button onClick={()=>dispatch(Inc())}>Increase</button>
    <button onClick={()=>dispatch(Dec())}>Decrease</button>
    <B value={a}/>
    <C value={a}/>
    </>
  )
}

export default A