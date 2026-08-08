import { Link } from "react-router-dom"

function Profile() {

    return (

        <div className="page">

            <h1>

                Profile Page

            </h1>

            <h2>

                Nested Routing Child Component

            </h2>

            <p>

                This page is displayed as the child route of the Dashboard page.

            </p>

            <h2>

                Current Route

            </h2>

            <p>

                /revision/dashboard/profile

            </p>

            <Link to="/revision/dashboard">

                Back To Dashboard

            </Link>

        </div>

    )

}

export default Profile