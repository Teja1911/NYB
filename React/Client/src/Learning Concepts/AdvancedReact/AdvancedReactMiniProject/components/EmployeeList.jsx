import useFetch from "../hooks/useFetch";

import withLoading from "../hoc/withLoading";

function EmployeeList({ employees }) {

    return (

        <div className="card">

            <h2>

                Employee Directory

            </h2>

            <div className="employee-grid">

                {

                    employees.map((employee) => (

                        <div

                            className="employee-card"

                            key={employee.id}

                        >

                            <h3>

                                👤 {employee.name}

                            </h3>

                            <p>

                                📧 {employee.email}

                            </p>

                            <p>

                                🏢 {employee.company.name}

                            </p>

                            <p>

                                📞 {employee.phone}

                            </p>

                        </div>

                    ))

                }

            </div>

        </div>

    );

}

const EmployeeListWithLoading = withLoading(EmployeeList);

function EmployeeListContainer() {

    const {

        data,

        loading,

        error

    } = useFetch(

        "https://jsonplaceholder.typicode.com/users"

    );

    if (error) {

        return (

            <div className="card">

                <h2>{error}</h2>

            </div>

        );

    }

    return (

        <EmployeeListWithLoading

            loading={loading}

            employees={data}

        />

    );

}

export default EmployeeListContainer;