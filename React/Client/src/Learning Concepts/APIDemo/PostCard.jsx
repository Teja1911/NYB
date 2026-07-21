import './UserCard.css'
import React from 'react'

function PostCard({post}) {
  return (
    <div className='card'>
        <h3>{post.title}</h3>
        <p><strong>Post ID:</strong>{post.id}</p>
        <p>{post.body}</p>
    </div>
  )
}

export default PostCard