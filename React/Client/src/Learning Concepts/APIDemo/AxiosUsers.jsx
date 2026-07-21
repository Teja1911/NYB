import React, { useEffect, useState } from 'react'
import api from './services/axiosConfig'
import UserCard from './UserCard'

function AxiosUsers() {
    const[users,setUsers]=useState([])
    const[loading,setLoading]=useState(true)
    const[error,setError]=useState("")
    useEffect(()=>{
        async function getUsers(){
            try{
                const response=await api.get("/users")
                setUsers(response.data)
            }catch(err){
                console.log(err)
                setError("Unable to Fetch Data")
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

export default AxiosUsers