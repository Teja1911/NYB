import EmployeeCard from "./EmployeeCard";

function EmployeeList({ users }) {
    return (
        <div>
            {
                users.map((user) => (
                    <EmployeeCard
                        key={user.id}
                        user={user}
                    />
                ))
            }
        </div>
    )
}

export default EmployeeList