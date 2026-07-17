import React, { useEffect } from 'react'

function FetchAPI() {
    const fetchapi=useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => console.log(data));
}, []);
  return (
    <div>
        <p>{fetchapi}</p>
    </div>
  )
}

export default FetchAPI