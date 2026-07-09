import React from 'react'
import { StrictMode } from 'react'

function B(h) {
  return (
    <StrictMode>

        <h1>This is another Functional Component</h1>
        <h2>{h.hello}</h2>
    </StrictMode>
  )
}

export default B