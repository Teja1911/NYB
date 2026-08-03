import useForm from "../hooks/useForm";

function EmployeeForm({

    employee,

    onSave,

    onCancel

}) {

    const {

        values,

        handleChange,

        resetForm

    } = useForm(

        employee || {

            name: "",

            role: "",

            department: "",

            salary: "",

            status: "Active"

        }

    );

    function handleSubmit(event) {

        event.preventDefault();

        if (

            !values.name.trim() ||

            !values.role.trim() ||

            !values.department.trim() ||

            Number(values.salary) <= 0

        ) {

            alert("Please fill all fields correctly.");

            return;

        }

        onSave(values);

        resetForm();

    }

    return (

        <form

            className="employee-form"

            onSubmit={handleSubmit}

        >

            <h2>

                {

                    employee

                        ? "Edit Employee"

                        : "Add Employee"

                }

            </h2>

            <label htmlFor="name">

                Name

            </label>

            <input

                id="name"

                type="text"

                name="name"

                required

                value={values.name}

                onChange={handleChange}

            />

            <label htmlFor="role">

                Role

            </label>

            <input

                id="role"

                type="text"

                name="role"

                required

                value={values.role}

                onChange={handleChange}

            />

            <label htmlFor="department">

                Department

            </label>

            <input

                id="department"

                type="text"

                name="department"

                required

                value={values.department}

                onChange={handleChange}

            />

            <label htmlFor="salary">

                Salary

            </label>

            <input

                id="salary"

                type="number"

                name="salary"

                required

                min="1"

                value={values.salary}

                onChange={handleChange}

            />

            <label htmlFor="status">

                Status

            </label>

            <select

                id="status"

                name="status"

                value={values.status}

                onChange={handleChange}

            >

                <option value="Active">

                    Active

                </option>

                <option value="Inactive">

                    Inactive

                </option>

            </select>

            <div className="form-buttons">

                <button

                    type="submit"

                    className="primary-btn"

                >

                    Save

                </button>

                <button

                    type="button"

                    className="delete-btn"

                    onClick={() => {

                        resetForm();

                        onCancel();

                    }}

                >

                    Cancel

                </button>

            </div>

        </form>

    );

}

export default EmployeeForm;