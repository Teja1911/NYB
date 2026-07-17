import React from 'react'
import B from './B'
import C from './C'

function A() {
    let a=10
  return (
    <>
    <B value={a}/>
    <C value={a}/>
    </>
  )
}

export default A