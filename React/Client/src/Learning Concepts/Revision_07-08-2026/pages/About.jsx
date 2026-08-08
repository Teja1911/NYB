import { Link } from "react-router-dom"

function About() {

    return (

        <div className="page">

            <h1>

                About React Router

            </h1>

            <h2>

                Browser Routing

            </h2>

            <p>

                Browser Routing allows navigation between different pages without refreshing the browser.

            </p>

            <h2>

                React Router

            </h2>

            <p>

                React Router is a library used to implement client-side routing in React applications.

            </p>

            <h2>

                Advantages

            </h2>

            <ul>

                <li>Fast Navigation</li>

                <li>No Page Refresh</li>

                <li>Better User Experience</li>

                <li>Supports Nested Routing</li>

                <li>Supports Dynamic Routing</li>

            </ul>

            <Link to="/revision/services">

                Next : Services

            </Link>

        </div>

    );

}

export default About