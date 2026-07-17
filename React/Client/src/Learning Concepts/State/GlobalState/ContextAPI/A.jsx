import React, { createContext, useState } from 'react'
import B from './B'
import C from './C'

export let context=createContext()
function A() {
  let [a,setA]=useState(19)
  return (
    <>
    <h2>Global State</h2>
    <context.Provider value={{a,setA}}>
      <B/>
      <C/>
    </context.Provider>
    
    
    </>
  )
}

export default A

// 1.Context Created ->  createContext
// 2.Context Provider -> Provider