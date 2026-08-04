import { Link } from "react-router-dom";

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
            name: "Teja"
        }

    ];

    return (

        <div className="page">

            <h2>

                Students Page

            </h2>

            <p>

                Click on a student to view the details.

            </p>

            <ul>

                {

                    students.map((student) => (

                        <li key={student.id}>

                            <Link to={`${student.id}`}>

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