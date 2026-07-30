import { useState } from "react";

function Form({ closeModal }) {

    const [employee, setEmployee] = useState({

        name: "",

        email: "",

        department: "",

        salary: ""

    });

    function handleChange(event) {

        const { name, value } = event.target;

        setEmployee({

            ...employee,

            [name]: value

        });

    }

    function handleSubmit(event) {

        event.preventDefault();

        if (

            employee.name === "" ||

            employee.email === "" ||

            employee.department === "" ||

            employee.salary === ""

        ) {

            alert("Please fill all fields.");

            return;

        }

        console.log(employee);

        alert("Employee Registered Successfully!");

        closeModal();

    }

    return (

        <form onSubmit={handleSubmit}>

            <label>Name</label>

            <input

                type="text"

                name="name"

                value={employee.name}

                onChange={handleChange}

                placeholder="Enter Name"

            />

            <label>Email</label>

            <input

                type="email"

                name="email"

                value={employee.email}

                onChange={handleChange}

                placeholder="Enter Email"

            />

            <label>Department</label>

            <input

                type="text"

                name="department"

                value={employee.department}

                onChange={handleChange}

                placeholder="Enter Department"

            />

            <label>Salary</label>

            <input

                type="number"

                name="salary"

                value={employee.salary}

                onChange={handleChange}

                placeholder="Enter Salary"

            />

            <div className="button-group">

                <button type="submit">

                    Save

                </button>

                <button

                    type="button"

                    onClick={closeModal}

                >

                    Cancel

                </button>

            </div>

        </form>

    );

}

export default Form;