import React, { useState } from 'react'
import G from './G'
import H from './H'

function D({value}) {
  return (
    <div>
        D
        <G value={value}/>
        <H value={value}/>
    </div>
  )
}

export default D