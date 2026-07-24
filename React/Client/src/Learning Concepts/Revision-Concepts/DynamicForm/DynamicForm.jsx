import { useState } from "react";
import EmployeeForm from "./EmployeeForm"
function DynamicForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        department: ""
    })
    const [errors, setErrors] = useState({})
    function handleChange(e) {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }
    function validate() {
        let newErrors = {}
        if (!formData.name.trim()) {
            newErrors.name = "Name is required"
        }
        if (!formData.email.trim()) {
            newErrors.email = "Email is required"
        }
        else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Invalid Email"
        }
        if (!formData.department.trim()) {
            newErrors.department = "Department is required"
        }
        return newErrors
    }
    function handleSubmit(e) {
        e.preventDefault()
        const validationErrors = validate()
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors)
            return
        }
        console.log(formData)
        alert("Employee Added Successfully")
        setErrors({})
        setFormData({
            name: "",
            email: "",
            department: ""
        })
    }
    return (
        <div className="container">
            <h1>Dynamic Form Handling</h1>
            <EmployeeForm
                formData={formData}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                errors={errors}
            />
        </div>
    )
}

export default DynamicForm