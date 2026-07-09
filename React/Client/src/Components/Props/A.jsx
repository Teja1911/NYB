import React from 'react'
import B from './B'

function A(){
    let a=10
    return(
        <div>
            <p>The value of a in parent Component: {a}</p>
            <B Value={a}/>
        </div>
    )
}
export default A