import { useParams, useNavigate } from "react-router-dom";

function StudentDetails() {

    const { id } = useParams();

    const navigate = useNavigate();

    return (

        <div className="page">

            <h2>

                Student Details

            </h2>

            <p>

                Student ID : {id}

            </p>

            <button

                onClick={() => navigate("/advancedbrowserrouting/students")}

            >

                Back to Students

            </button>

        </div>

    )

}

export default StudentDetails