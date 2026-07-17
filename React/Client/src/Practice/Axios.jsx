import axios from 'axios'
import React, { useEffect } from 'react'

function Axios() {
    useEffect(()=>{
        axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res) => console.log(res.data));
    },[])
  return (
    <div>Axios</div>
  )
}

export default Axios