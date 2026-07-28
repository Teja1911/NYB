import React from 'react'

function WithLoading(WrappedComponent) {
  return function EnhancedComponent(props){
    const loading=false
    if(!loading){
        return(<h2>Loading...</h2>)
    }
    return(
        <WrappedComponent {...props}/>
    )
  }
}

export default WithLoading