import { useState } from "react";

function FormEvents() {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    function handleSubmit(event){
        event.preventDefault();
        alert(`
            Name : ${name} 
            Email : ${email}`);
    }
    return(
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={(event)=>setName(event.target.value)}
            />
            <br /><br />
            <input
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(event)=>setEmail(event.target.value)}
            />
            <br /><br />
            <button type="submit">
                Submit
            </button>
        </form>
    );
}

export default FormEvents;