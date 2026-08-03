function ArrayDestructuring() {
    const employee = [
        "John",
        "IT",
        50000
    ]
    const [
        name,
        department,
        salary
    ] = employee
    return (
        <div>
            <h2>
                Array Destructuring
            </h2>
            <p>
                Name : {name}
            </p>
            <p>
                Department : {department}
            </p>
            <p>
                Salary : ₹{salary}
            </p>
        </div>
    )
}

export default ArrayDestructuring