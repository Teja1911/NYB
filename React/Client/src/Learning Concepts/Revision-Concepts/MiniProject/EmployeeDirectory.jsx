import { useMemo, useState } from "react"
import EmployeeForm from "./components/EmployeeForm"
import EmployeeList from "./components/EmployeeList"
import SearchBar from "./components/SearchBar"
import useEmployees from "./hooks/useEmployees"
import withLoading from "./hoc/withLoading"
import "./EmployeeDirectory.css"
const EmployeeListWithLoading = withLoading(EmployeeList)
function EmployeeDirectory() {
    const {
        employees,
        loading,
        error,
        addEmployee
    } = useEmployees()
    const [searchTerm, setSearchTerm] = useState("")
    const filteredEmployees = useMemo(() => {
        return employees.filter(employee =>
            employee.name
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
        )
    }, [employees, searchTerm])
    if (error) {
        return <h2>{error}</h2>
    }
    return (
        <div className="container">
            <h1>Employee Directory</h1>
            <SearchBar
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
            />
            <EmployeeForm
                addEmployee={addEmployee}
            />
            <EmployeeListWithLoading
                loading={loading}
                employees={filteredEmployees}
            />
        </div>
    )
}

export default EmployeeDirectory