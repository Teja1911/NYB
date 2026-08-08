import { Link, useParams } from "react-router-dom"

function StudentDetails() {

    const { id } = useParams()

    const students = [

        {
            id: "1",
            name: "Rahul",
            course: "React JS"
        },

        {
            id: "2",
            name: "Priya",
            course: "JavaScript"
        },

        {
            id: "3",
            name: "Arjun",
            course: "HTML & CSS"
        },

        {
            id: "4",
            name: "Sneha",
            course: "Node JS"
        }

    ];

    const student = students.find(

        (item) => item.id === id

    );

    return (

        <div className="page">

            <h1>

                Student Details

            </h1>

            <h2>

                useParams()

            </h2>

            <p>

                useParams() reads dynamic values from the URL.

            </p>

            {

                student ? (

                    <div>

                        <h3>

                            Student ID : {student.id}

                        </h3>

                        <h3>

                            Name : {student.name}

                        </h3>

                        <h3>

                            Course : {student.course}

                        </h3>

                    </div>

                ) : (

                    <h3>

                        Student Not Found

                    </h3>

                )

            }

            <Link to="/revision/students">

                Back To Students

            </Link>

        </div>

    )

}

export default StudentDetails