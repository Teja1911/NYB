

function Employee({name,department}) {
  return (
    <div className="employee-info">
        <h3>Employee Information</h3>
        <p>Name : {name}</p>
        <p>Department : {department}</p>
    </div>
  )
}

export default Employee