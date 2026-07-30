import React from 'react'

function ParameterPassing() {
    function handleClick(){
        alert("Button Clicked")
    }
    function deleteEmployee(id){
        console.log(`Employee ${id} Deleted`)
    }
    function updateEmployee(name,id){
        alert(`${id} ${name}`)
    }
    function handleChange(event){
        console.log(event.target.value)
    }
    function deletedEmployee(event,id){
        console.log(event.type)
        alert(id)
    }
  return (
    <div>
        <h2>Functional Reference</h2>
        <button onClick={handleClick}>Click Me</button>
        <h2>Inline Function</h2>
        <button onClick={()=>deleteEmployee(101)}>Delete Employee</button>
        <button onClick={()=>updateEmployee("Surya",19)}>Update Employee</button>
        <input type="text" onChange={handleChange} placeholder='Enter Name' />
        <button onClick={(event)=>deletedEmployee(event,101)}>Delete Employee</button>
    </div>
  )
}

export default ParameterPassing