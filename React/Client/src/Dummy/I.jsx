import React, { useState } from 'react'

function I() {
    let [value,setValue]=useState(19)
  return (
    <div>
        I
        <h3>The value in the I Component {value}</h3>
    </div>
  )
}

export default I