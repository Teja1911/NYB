import React from 'react'
import useForm from './hooks/useForm'

function FormDemo() {
    const{formData,handleChange}=useForm({username:"",email:""})
  return (
    <div>
        <h2>Registration Form</h2>
        <input 
        type="text"
        name='username'
        placeholder='Enter Username'
        value={formData.name}
        onChange={handleChange} />
        <br />
        <br />
        <input 
        type="email"
        name='email'
        placeholder='Enter Email'
        value={formData.email}
        onChange={handleChange} />
        <hr />
        <h3>Username : {formData.username}</h3>
        <h3>Email : {formData.email}</h3>
    </div>
  )
}

export default FormDemo