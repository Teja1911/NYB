import React, { useEffect, useState } from 'react'
import api from './services/axiosConfig'
import PostCard from './PostCard'

function AxiosPosts() {
    const[posts,setPosts]=useState([])
    const[loading,setLoading]=useState(true)
    const[error,setError]=useState("")
    useEffect(()=>{
        async function getPosts(){
            try{
            const response=await api.get("/posts")
            setPosts(response.data.slice(0,10))
            }catch(err){
                setError("Unable to fetch posts")
            }
            finally{
                setLoading(false)
            }
        }
        getPosts()
    },[])
    if(loading) return <h2 className='loading'>Loading Posts...</h2>
    if(error) return <h2 className='error'>{error}</h2>
  return (
    <>
       <h1 className='page-title'>Posts</h1>
       <div className='card-container'>     
            {posts.map((post)=>(
                <PostCard key={post.id} post={post}/>
            ))}
        </div> 
    </>
  )
}

export default AxiosPosts