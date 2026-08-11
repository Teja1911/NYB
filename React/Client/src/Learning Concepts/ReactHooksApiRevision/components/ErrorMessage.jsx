import React from 'react'

function ErrorMessage({message}) {
  return (
    <div className='error-container'>
        <h3>Something went wrong</h3>
        <p>{message}</p>
        <p>Please try again.</p>
    </div>
  )
}

export default ErrorMessage