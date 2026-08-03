function Child({
    name,
    department,
    salary
}) {
    return (
        <div>
            <h2>
                Employee Details
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

export default Child