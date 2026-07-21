import React from 'react'
import FetchUsers from '../../Learning Concepts/APIDemo/FetchUsers'
import FetchPosts from '../../Learning Concepts/APIDemo/FetchPosts'

function APIDemoFetchPage() {
  return (
    <div>
        <FetchUsers/>
        <hr
        style={{
          margin: "50px 0",
          border: "1px solid #ddd",
        }}
        />
        <FetchPosts/>
    </div>
  )
}

export default APIDemoFetchPage