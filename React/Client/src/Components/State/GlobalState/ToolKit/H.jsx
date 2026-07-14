import React, { useState } from 'react'
import I from './I'

function H({value}) {  
  return (
    <div>
        H
        <I value={value}/>
        <h3>The value in H Component from D Component {value}</h3>
    </div>
  )
}

export default H