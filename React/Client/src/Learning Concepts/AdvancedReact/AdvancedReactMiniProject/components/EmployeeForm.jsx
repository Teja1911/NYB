import useForm from "../hooks/useForm";

function EmployeeForm() {

    const {

        formData,

        handleChange,

        resetForm

    } = useForm({

        employeeName: "",

        email: "",

        department: "",

        salary: ""

    });

    function handleSubmit(event) {

        event.preventDefault();

        console.log(formData);

        alert("Employee Added Successfully");

        resetForm();

    }

    return (

        <div className="card">

            <h2>Employee Registration</h2>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="employeeName"
                    placeholder="Employee Name"
                    value={formData.employeeName}
                    onChange={handleChange}
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="department"
                    placeholder="Department"
                    value={formData.department}
                    onChange={handleChange}
                />

                <input
                    type="number"
                    name="salary"
                    placeholder="Salary"
                    value={formData.salary}
                    onChange={handleChange}
                />

                <button>

                    Add Employee

                </button>

            </form>

        </div>

    );

}

export default EmployeeForm;