import React, { useState } from 'react'

import B from './B'
import C from './C'

function A() {
  let [a,setA]=useState(19)
  return (
    <>
    
    <B value={a}/>
    <C value={a}/>
    </>
  )
}

export default A