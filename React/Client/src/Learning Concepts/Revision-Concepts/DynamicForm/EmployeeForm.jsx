function EmployeeForm({
    formData,
    handleChange,
    handleSubmit,
    errors
}) {
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                placeholder="Enter Name"
                value={formData.name}
                onChange={handleChange}
            />
            <p className="error">{errors.name}</p>
            <input
                type="email"
                name="email"
                placeholder="Enter Email"
                value={formData.email}
                onChange={handleChange}
            />
            <p className="error">{errors.email}</p>
            <input
                type="text"
                name="department"
                placeholder="Department"
                value={formData.department}
                onChange={handleChange}
            />
            <p className="error">{errors.department}</p>
            <button type="submit">
                Submit
            </button>
        </form>
    )
}

export default EmployeeForm