import React from 'react'

function UserCard({name,username,email}) {
  return (
    <div className='user-card'>
        <h3>{name}</h3>
        <p>
            <strong>Username:</strong> {username}
        </p>
        <p>
            <strong>Email:</strong> {email}
        </p>
    </div>
  )
}

export default UserCard