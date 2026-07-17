import React from 'react'

function ConditionalRendering() {
    const isLogin=true
  return (
    <div>
        {isLogin}?<h2>Welcome</h2>:<h2>Please Login</h2>
    </div>
  )
}

export default ConditionalRendering