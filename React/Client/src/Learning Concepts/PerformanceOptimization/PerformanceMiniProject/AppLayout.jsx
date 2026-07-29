import { useCallback, useMemo, useState } from "react";

import Header from "./components/Header";
import Counter from "./components/Counter";
import SearchBar from "./components/SearchBar";
import EmployeeList from "./components/EmployeeList";
import SalarySummary from "./components/SalarySummary";


import "./css/style.css";
import ActionsButtons from "./components/ActionsButtons";

function AppLayout() {

    const [count, setCount] = useState(0);

    const [search, setSearch] = useState("");

    const [employees] = useState([
        { id: 1, name: "John", salary: 45000 },
        { id: 2, name: "Steve", salary: 52000 },
        { id: 3, name: "Robert", salary: 61000 },
        { id: 4, name: "David", salary: 55000 },
        { id: 5, name: "James", salary: 60000 }
    ]);

    const filteredEmployees = useMemo(() => {

        console.log("Filtering Employees...");

        return employees.filter(employee =>

            employee.name
                .toLowerCase()
                .includes(search.toLowerCase())

        );

    }, [employees, search]);

    const saveEmployee = useCallback(() => {

        console.log("Employee Saved");

    }, []);

    const deleteEmployee = useCallback(() => {

        console.log("Employee Deleted");

    }, []);

    return (

        <div className="container">

            <Header />

            <Counter
                count={count}
                setCount={setCount}
            />

            <SearchBar
                search={search}
                setSearch={setSearch}
            />

            <SalarySummary
                employees={filteredEmployees}
            />

            <EmployeeList
                employees={filteredEmployees}
            />

            <ActionsButtons
                onSave={saveEmployee}
                onDelete={deleteEmployee}
            />

        </div>

    );

}

export default AppLayout;