import { useState } from "react"
function EmployeeForm({ addEmployee }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    department: "",
  })
  function handleChange(e) {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }
  function handleSubmit(e) {
    e.preventDefault()
    if (
      !formData.name ||
      !formData.email ||
      !formData.department
    ) {
      alert("Please fill all fields");
      return
    }
    addEmployee(formData)
    setFormData({
      name: "",
      email: "",
      department: "",
    })
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        placeholder="Employee Name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        name="email"
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        name="department"
        placeholder="Department"
        value={formData.department}
        onChange={handleChange}
      />
      <button type="submit">
        Add Employee
      </button>
    </form>
  )
}

export default EmployeeForm