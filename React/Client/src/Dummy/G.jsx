import React, { useState } from 'react'

function G() {
    let [value,setValue]=useState(19)
  return (
    <div>G
        <h3>The value in G Component {value}</h3>
    </div>
  )
}

export default G