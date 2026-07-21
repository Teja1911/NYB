import React, { useEffect, useState } from 'react'
import PostCard from './PostCard'

function FetchPosts() {
    const[posts,setPosts]=useState([])
    const[loading,setLoading]=useState(true)
    const[error,setError]=useState("")
    useEffect(()=>{
        async function getPosts(){
            try{
                const response=await fetch("https://jsonplaceholder.typicode.com/posts")
                if(!response.ok){
                    throw new Error("Failed to fetch posts")
                }
                const data=await response.json()
                setPosts(data.slice(0,10))
            }catch(err){
                setError(err.message)
            }
            finally{
                setLoading(false)
            }
        }
        getPosts()
    },[])
    if(loading) return <h2 className='loading'>Loading...</h2>
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

export default FetchPosts