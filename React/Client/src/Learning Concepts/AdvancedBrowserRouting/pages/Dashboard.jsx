import { Link, Outlet } from "react-router-dom"

function Dashboard() {

    return (

        <div className="page">

            <h2>

                Dashboard Page

            </h2>

            <p>

                This is the Dashboard.

            </p>

            <nav >

                <Link to="profile" className="btn-link">

                    Go to Profile

                </Link>

            </nav>

            <hr />

            <Outlet />

        </div>

    )

}

export default Dashboard