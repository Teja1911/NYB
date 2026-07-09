import React, { useState } from 'react'
import Parent from './Parent'

function Child(){
    let [count,increase]=useState(0)
    return(
        <>
        <Parent value={count}/>
        <button onClick={()=>increase(count+1)}>Count</button>
        
        </>
    )
}
export default Child