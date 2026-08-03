import { useState, useMemo, useCallback, useEffect } from "react";

import EmployeeCard from "./EmployeeCard";
import SearchBar from "./SearchBar";
import EmployeeModal from "./EmployeeModal";

import employeeData from "../utils/employeeData";

import useTheme from "../hooks/useTheme";

function EmployeeList() {

    const { theme } = useTheme();

    const [employees, setEmployees] = useState(() => {
    const savedEmployees = localStorage.getItem("employees");
    return savedEmployees
        ? JSON.parse(savedEmployees)
        : employeeData;
    });

    useEffect(() => {
    localStorage.setItem(
        "employees",
        JSON.stringify(employees)
    );
    }, [employees]);

    const [search, setSearch] = useState("");

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [selectedEmployee, setSelectedEmployee] = useState(null);

    const filteredEmployees = useMemo(() => {

        return employees.filter((employee) =>

            employee.name
                .toLowerCase()
                .includes(search.toLowerCase())

        );

    }, [employees, search]);

    const handleDelete = useCallback((id) => {

        setEmployees((previousEmployees) =>

            previousEmployees.filter(

                (employee) => employee.id !== id

            )

        );

    }, []);

    const handleEdit = useCallback((id) => {

        const employee = employees.find(

            (employee) => employee.id === id

        );

        setSelectedEmployee(employee);

        setIsModalOpen(true);

    }, [employees]);

    function handleAddEmployee() {

        setSelectedEmployee(null);

        setIsModalOpen(true);

    }

    function handleSave(formData) {

        if (selectedEmployee) {

            setEmployees((previousEmployees) =>

                previousEmployees.map((employee) =>

                    employee.id === selectedEmployee.id

                        ? {
                              ...employee,
                              ...formData
                          }
                        : employee

                )

            );

        } else {

            const newEmployee = {

                id: Date.now(),

                ...formData

            };

            setEmployees((previousEmployees) => [

                ...previousEmployees,

                newEmployee

            ]);

        }

        setIsModalOpen(false);

        setSelectedEmployee(null);

    }

    return (

        <div className={`employee-page ${theme}`}>

            <div className="employee-header">

                <SearchBar

                    search={search}

                    setSearch={setSearch}

                />

                <button

                    type="button"

                    className="add-btn"

                    onClick={handleAddEmployee}

                >

                    Add Employee

                </button>

            </div>

            <div className="employee-grid">

                {

                    filteredEmployees.length > 0 ? (

                        filteredEmployees.map((employee) => (

                            <EmployeeCard

                                key={employee.id}

                                employee={employee}

                                onEdit={handleEdit}

                                onDelete={handleDelete}

                            />

                        ))

                    ) : (

                        <div className="empty-state">

                            <h2>

                                No Employees Found

                            </h2>

                            <p>

                                Try another search.

                            </p>

                        </div>

                    )

                }

            </div>

            <EmployeeModal

                isOpen={isModalOpen}

                employee={selectedEmployee}

                onSave={handleSave}

                onClose={() => {

                    setIsModalOpen(false);

                    setSelectedEmployee(null);

                }}

            />

        </div>

    );

}

export default EmployeeList;