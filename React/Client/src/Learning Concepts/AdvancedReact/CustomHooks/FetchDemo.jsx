import React from 'react'
import useFetch from './hooks/useFetch'

function FetchDemo() {
    const users=useFetch("https://jsonplaceholder.typicode.com/users")
  return (
    <div>
        <h1>Employee List</h1>
        {
            users.map((user)=>(
                <h3 key={user.id}>
                    {user.name}
                </h3>
            ))
        }
    </div>
  )
}

export default FetchDemo