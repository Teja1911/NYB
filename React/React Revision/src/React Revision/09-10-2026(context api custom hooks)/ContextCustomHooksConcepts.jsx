import { createContext,useContext,useEffect,useState } from "react";

// Create Context
const AppContext=createContext()
// Custom Hook for global data
function useAppData(){
    return useContext(AppContext)
}
// Custom Hook for API Fetching
function useApi(url){
    const [data,setData]=useState([])
    const [loading,setLoading]=useState(true)
    const[error,setError]=useState("")
    useEffect(()=>{
        let active=true
        async function fetchData(){
            try{
                setLoading(true)
                setError("")
                const response=await fetch(url)
                if(!response.json) throw new Error("API request failed")
                const result=await response.json()
                if(active) setData(result)
            }
            catch(err){
                if(active) setError(err.message)
            }
            finally{
                if(active) setLoading(false)
            }
        }
        fetchData()
        return ()=>{active=false}
    },[url])
    return {data,loading,error}
}
// Child reads global Context
function welcome(){
    const{username,setUsername}=useAppData()
    return(
        <section>
            <h2>Welcome, {username}</h2>
            <button onClick={()=>setUsername("Teja")}>Change Name</button>
        </section>
    )
}
// Child recieves ordinary props
function SkillList({skills}){
    return(
        <ul>
            {skills.map((skill)=><li key={skill}>{skill}</li>)}
        </ul>
    )
}
// Custom API Hook Example
function UserList(){
    const {data,loading,error}=useApi("https://jsonplaceholder.typicode.com/users")
    if(loading) return <p>Loading Users...</p>
    if(error) return <p>{error}</p>
    if(data.length===0) <p>No users found.</p>
    return(
        <ul>
            {data.slice(0,5).map((user)=>
                <li key={user.id}>{user.name}</li>
            )}
        </ul>
    )
}
// Providers shares global state
function ContextCustomHooksConcepts(){
    const[username,setUsername]=useState("Guest")
    const skills=["React","JavaScript","API"]
    return(
        <AppContext.Provider value={{username,setUsername}}>
            <h1>Context and Custom Hooks</h1>
            <welcome/>
            <SkillList skills={skills}/>
            <UserList/>
        </AppContext.Provider>
    )
}
export default ContextCustomHooksConcepts