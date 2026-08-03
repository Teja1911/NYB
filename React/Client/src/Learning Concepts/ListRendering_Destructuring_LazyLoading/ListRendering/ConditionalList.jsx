function ConditionalList() {
    const employees = [
        {
            id:1,
            name:"John",
            status:"Active"
        },
        {
            id:2,
            name:"Steve",
            status:"Inactive"
        },
        {
            id:3,
            name:"David",
            status:"Active"
        }
    ]
    return(
        <div>
            <h2>
                Employee Status
            </h2>
            {
                employees.map((employee)=>(
                    <div key={employee.id}>
                        {
                            employee.status==="Active"
                            ?
                            <h3>
                                {employee.name} ✅ Active
                            </h3>
                            :
                            <h3>
                                {employee.name} ❌ Inactive
                            </h3>
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default ConditionalList