import React, { useState } from 'react'
import G from './G'
import H from './H'

function D() {
  let [value,setValue]=useState(19)
  return (
    <div>
        D
        <G Value={value}/>
        <H Value={value}/>
    </div>
  )
}

export default D