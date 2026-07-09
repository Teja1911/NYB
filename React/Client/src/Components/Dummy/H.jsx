import React, { useState } from 'react'
import I from './I'

function H() {
    let [value,setValue]=useState(19)
  return (
    <div>
        H
        <I/>
        <h3>The value in H Component {value}</h3>
    </div>
  )
}

export default H