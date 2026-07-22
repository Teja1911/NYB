import React from 'react'

function FormError({error}) {
    if(!error){
        return null
    }
  return (
    <>
       <p className='error'>{error}</p> 
    </>
  )
}

export default FormError