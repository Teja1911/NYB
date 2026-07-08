import React from 'react'

function ChildA({sendMessage}) {
  return (
    <>
    <button onClick={()=>sendMessage("Hello parent")}>Send</button>
    </>
  )
}

export default ChildA