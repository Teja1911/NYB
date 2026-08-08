import { Link } from "react-router-dom"

function Students() {

    const students = [

        {

            id: 1,

            name: "Rahul"

        },

        {

            id: 2,

            name: "Priya"

        },

        {

            id: 3,

            name: "Arjun"

        },

        {

            id: 4,

            name: "Sneha"

        }

    ];

    return (

        <div className="page">

            <h1>

                Students Page

            </h1>

            <h2>

                Dynamic Routing

            </h2>

            <p>

                Click on any student to view the student details using a dynamic route.

            </p>

            <ul>

                {

                    students.map((student) => (

                        <li key={student.id}>

                            <Link
                                to={`/revision/students/${student.id}`}
                            >

                                {student.name}

                            </Link>

                        </li>

                    ))

                }

            </ul>

        </div>

    )

}

export default Students