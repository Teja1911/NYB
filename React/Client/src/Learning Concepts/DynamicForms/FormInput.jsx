import React from 'react'

function FormInput({label,type,name,value,onChange,placeholder,error,touched,isValid,icon}) {
  let inputClass=""
  if(touched){
  if(error){
    inputClass="input-error"
  }
  else if(isValid){
    inputClass="input-success"
  }
  }
  return (
    <div className='form-group'>
        <label>{label}</label>
        <div className='input-container'>
          <span className="input-icon">
            {icon}
          </span>
          <input type={type} name={name} value={value} onChange={onChange} placeholder={placeholder} className={inputClass}  />
        </div>
    </div>
  )
}

export default FormInput