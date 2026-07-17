import React from 'react'

function ListRendering() {
    const users=["Teja","Surya","Luck"]
  return (
    <>
        {users.map((user) => (
      <p key={user}>{user}</p>
    ))}
    </>
  )
}

export default ListRendering