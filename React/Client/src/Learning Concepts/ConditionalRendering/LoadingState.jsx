import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function LoadingState() {
    const[loading,setLoading]=useState(true)
    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
        },2000)
    },[])
  return (
    <div>
        {loading?<h2>Loading...</h2>:<h2>Data Loaded Successfully!</h2>}
    </div>
  )
}

export default LoadingState