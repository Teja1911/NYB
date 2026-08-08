import { Link, Outlet } from "react-router-dom"
import { useNavigate } from "react-router-dom"
function Dashboard() {
    const navigate = useNavigate()
    function handleLogout() {
    localStorage.removeItem("isLoggedIn")
    navigate("/revision/login")
    }
    return (

        <div className="page">

            <h1>

                Dashboard Page

            </h1>

            <h2>

                Protected Route

            </h2>

            <p>

                The Dashboard is a protected page. Only authenticated users can access it.

            </p>

            <h2>

                Nested Routing

            </h2>

            <p>

                Click the Profile link below to navigate to the nested Profile page.

            </p>

            <Link to="/revision/dashboard/profile">

                Go To Profile

            </Link>

            <button onClick={handleLogout}>
                Logout
            </button>
            <Outlet/>
        </div>

    )

}

export default Dashboard