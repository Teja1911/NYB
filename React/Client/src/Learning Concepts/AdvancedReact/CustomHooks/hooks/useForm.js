import { useState } from "react";

function useForm(initialValues){
    const[formData,setFormData]=useState(initialValues)
    function handleChange(event){
        const {name,value}=event.target
        setFormData((previousData)=>({
            ...previousData,
            [name]:value
        }))   
    }
    return {
        formData,handleChange
    }

}
export default useForm