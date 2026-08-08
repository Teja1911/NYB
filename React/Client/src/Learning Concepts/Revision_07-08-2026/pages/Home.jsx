import { Link } from "react-router-dom"

function Home() {

    return (

        <div className="page">

            <h1>

                Home Page

            </h1>

            <p>

                Welcome to the React Router Revision Project.

            </p>

            <h2>

                Concepts Covered

            </h2>

            <ul>

                <li>Browser Routing</li>

                <li>React Router</li>

                <li>BrowserRouter</li>

                <li>Routes and Route</li>

                <li>Link</li>

                <li>NavLink</li>

                <li>useNavigate()</li>

                <li>useParams()</li>

                <li>Nested Routing</li>

                <li>Dynamic Routing</li>

                <li>Protected Routes</li>

                <li>404 Page Handling</li>

            </ul>

            <Link
                to="/revision/about"
            >
                Go To About Page
            </Link>

        </div>

    )

}

export default Home