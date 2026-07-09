import React, { useContext } from 'react'
import G from './G'
import H from './H'
import { context } from './A'

function D() {
  let {a,setA}=useContext(context)
  return (
    <div>
        D
        <h3>{a}</h3>
        <button onClick={()=>{setA(a+1)}}>Click</button>
        <G/>
        <H/>
    </div>
  )
}

export default D