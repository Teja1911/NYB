function FunctionalComponent() {
    const name="Teja"
    const age=22
    function getMessage(){
        return "Welcome React"
    }
    const skills=["HTML","CSS", "JavaScript", "React JS"]
    return (
    <div>
        <h1>{getMessage()}</h1>
        <h2>Hello, {name}</h2>
        <p><b>Age:</b> {age}</p>
        <h3>Skills:</h3>
        <ul>
            {skills.map((skill)=>(
                <li key={skill}>{skill}</li>
            ))}
        </ul>
    </div>
  )
}

export default FunctionalComponent