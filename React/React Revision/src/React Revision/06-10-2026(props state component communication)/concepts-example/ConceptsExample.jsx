import { useState } from "react";
function UserInfo({name,age,skills,onMessage}){
    return(
        <div>
            <h2>User Information</h2>
            <p>Name: {name}</p>
            <p>Age: {age}</p>

            <h3>Skills</h3>
            <ul>
                {skills.map((skill)=>(
                    <li key={skill}>{skill}</li>
                ))}
            </ul>
            {/* Child  parent */}
            <button onClick={()=>onMessage("Hello from Child")}>Send Message</button>
        </div>
    )
}

// Another Child Component 
function Counter({count,increaseCount}){
    return(
        <div>
            <h2>Counter: {count}</h2>
            {/* Function recieved through props */}
            <button onClick={increaseCount}>Increase</button>
        </div>
    )
}

// Parent Component 
function Parent() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");
  const user = {
    name: "Tej",
    age: 22,
    skills: ["HTML", "CSS", "JavaScript", "React"],
  }
  function increaseCount() {
    setCount(count + 1);
  }
  function receiveMessage(data) {
    setMessage(data);
  }
  return (
    <div>
      <h1>Props and State Example</h1>
      {/* Parent → Child */}
      <UserInfo
        name={user.name}
        age={user.age}
        skills={user.skills}
        onMessage={receiveMessage}
      />
      <hr />
      {/* Parent → Child + Function */}
      <Counter
        count={count}
        increaseCount={increaseCount}
      />
      {/* Conditional Rendering */}
      {message && <p>Message: {message}</p>}
      {count >= 5 ? (
        <p>Counter reached 5!</p>
      ) : (
        <p>Counter is less than 5</p>
      )}
    </div>
  )
}

export default Parent