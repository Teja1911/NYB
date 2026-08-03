function FunctionParameterDestructuring() {

    function displayEmployee({
        id,
        name,
        department,
        salary
    }) {
        return (
            <div>
                <p>
                    ID : {id}
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
    const employee = {
        id:101,
        name:"John",
        department:"IT",
        salary:50000
    }
    return (
        <div>
            <h2>
                Function Parameter Destructuring
            </h2>
            {displayEmployee(employee)}
        </div>
    )
}

export default FunctionParameterDestructuring