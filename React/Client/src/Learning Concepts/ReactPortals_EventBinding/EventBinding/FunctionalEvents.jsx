import React, { useState } from 'react'

function FunctionalEvents() {
    const[name,setName]=useState("")
    function handleClick(){
        alert("Button Clicked")
    }
    function handleChange(event){
        setName(event.target.value)
    }
    function handleFocus(){
        console.log("Input Focused")
    }
    function handleBlur(){
        console.log("Input Lost Focus")
    }
    function handleMouseEnter(){
        console.log("Mouse Enter")
    }
    function handleMouseLeave(){
        console.log("Mouse Left")
    }
    function handleKeyDown(event){
        console.log(event.key)
    }
    function handleKeyUp(event){
        console.log(event.key)
    }
  return (
    <div>
        <button onClick={handleClick}>Click Me</button>
        <input type="text" placeholder='Enter Name' value={name} onChange={handleChange}/>
        <p><strong>{name}</strong></p>
        <input type="text" onFocus={handleFocus} placeholder='Enter Name'/>
        <input type="text" onBlur={handleBlur} placeholder='Enter Name'/>
        <button onMouseEnter={handleMouseEnter}>Hover Me</button>
        <button onMouseLeave={handleMouseLeave}>Hover Me</button>
        <input onKeyDown={handleKeyDown} placeholder='Type Something'/>
        <input onKeyUp={handleKeyUp} placeholder='Type Something' />
    </div>
  )
}

export default FunctionalEvents