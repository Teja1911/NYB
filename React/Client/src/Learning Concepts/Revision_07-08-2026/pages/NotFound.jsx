import { Link } from "react-router-dom"

function NotFound() {

    return (

        <div className="page">

            <h1>

                404 - Page Not Found

            </h1>

            <h2>

                404 Page Handling

            </h2>

            <p>

                The page you are looking for does not exist.

            </p>

            <p>

                Please check the URL or return to the Home page.

            </p>

            <Link to="/revision">

                Back To Home

            </Link>

        </div>

    )

}

export default NotFound