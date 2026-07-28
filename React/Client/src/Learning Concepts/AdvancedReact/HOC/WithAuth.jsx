import React from 'react'

function WithAuth(WrappedComponent) {
    return function EnhancedComponent(props){
        const isLogged=true
        if(!isLogged){
            return (<p><strong>Please Login Again</strong></p>)
            
        }
        return(
            <WrappedComponent {...props}/>
        )
    }
}

export default WithAuth