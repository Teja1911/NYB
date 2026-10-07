import { useEffect, useState } from "react"

function ListsFormsEventsConcepts() {
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[count,setCount]=useState(0)
    const[showList,setShowList]=useState(true)
    const[skills,setSkills]=useState(["HTML","CSS","JavaScript"])
    // Runs after every render
    useEffect(()=>{
        console.log("Component Rendered")
    })
    // Runs only once
    useEffect(()=>{
        console.log("Component Mounted")
    },[])
    // Runs when count changes
    useEffect(()=>{
        console.log("Count Chanege:",count)
    },[count])
    function handleSubmit(e){
        e.preventDefault()
        alert(`Name: ${name}, Email: ${email}`)
    }
    function handleKeyDown(e){
        if(e.key==="Enter"){
            alert("Enter Key Pressed")
        }
    }
    function addSkill(){
        setSkills([...skills,"React"])
    }
    return (
    <div>
      <h1>Lists, Forms, Events & useEffect</h1>
      <h2>Controlled Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <h2>Click Event</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <h2>List Rendering</h2>
      <button onClick={addSkill}>Add Skill</button>
      {showList && (
        <ul>
          {skills.map((skill, index) => (
            <li key={`${skill}-${index}`}>
              {skill}
            </li>
          ))}
        </ul>
      )}
      <button onClick={() => setShowList(!showList)}>
        {showList ? "Hide List" : "Show List"}
      </button>
    </div>
  )
}

export default ListsFormsEventsConcepts