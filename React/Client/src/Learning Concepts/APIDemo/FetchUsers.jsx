import React, { useEffect, useState } from 'react'
import UserCard from './UserCard'

function FetchUsers() {
    const[users,setUsers]=useState([])
    const[loading,setLoading]=useState(true)
    const[error,setError]=useState("")
    useEffect(()=>{
        async function getUsers(){
            try{
                const response=await fetch("https://jsonplaceholder.typicode.com/users")
                if(!response.ok){
                    throw new Error("Failed to Fetch")
                }
                const data=await response.json()
                setUsers(data)
            }
            catch(err){
                setError(err.message)
            }
            finally{
                setLoading(false)
            }
        }
        getUsers()
    },[])
    if(loading) return <h2 className='loading'>Loading...</h2>
    if(error) return <h2 className='error'>{error}</h2>
  return (
    <div className='card-container'>
        {users.map((user)=>(
            <UserCard key={user.id} user={user}/>
        ))}
    </div>
  )
}

export default FetchUsers