function ObjectDestructuring() {
    const employee = {
        id:101,
        name:"John",
        department:"IT",
        salary:50000
    }
    const {
        id,
        name,
        department,
        salary
    } = employee
    return (
        <div>
            <h2>
                Object Destructuring
            </h2>
            <p>
                Employee ID : {id}
            </p>
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

export default ObjectDestructuring