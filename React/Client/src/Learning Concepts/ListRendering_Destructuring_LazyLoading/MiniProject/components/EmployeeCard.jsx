import { memo } from "react";

import useTheme from "../hooks/useTheme";

function EmployeeCard({

    employee,

    onEdit,

    onDelete

}) {

    const { theme } = useTheme();

    const {

        id,

        name,

        role,

        department,

        salary,

        status

    } = employee;

    return (

        <div className={`employee-card ${theme}`}>

            <div className="employee-avatar">

                {name.trim().charAt(0).toUpperCase()}

            </div>

            <div className="employee-details">

                <h3>

                    {name}

                </h3>

                <p>

                    <strong>Role :</strong> {role}

                </p>

                <p>

                    <strong>Department :</strong> {department}

                </p>

                <p>

                    <strong>Salary :</strong> ₹{salary}

                </p>

                <p>

                    <strong>Status :</strong>

                    <span

                        className={`status ${status.toLowerCase()}`}

                    >

                        {" "}

                        {status}

                    </span>

                </p>

            </div>

            <div className="employee-actions">

                <button

                    type="button"

                    className="edit-btn"

                    onClick={() => onEdit(id)}

                >

                    Edit

                </button>

                <button

                    type="button"

                    className="delete-btn"

                    onClick={() => onDelete(id)}

                >

                    Delete

                </button>

            </div>

        </div>

    );

}

export default memo(EmployeeCard);