import React from 'react'
import useWindowSize from './hooks/useWindowSize'

function WindowResizeDemo() {
    const width=useWindowSize()
  return (
    <div>
        <h1>Window Size</h1>
        <h2>Screen Width : {width}px</h2>
    </div>
  )
}

export default WindowResizeDemo