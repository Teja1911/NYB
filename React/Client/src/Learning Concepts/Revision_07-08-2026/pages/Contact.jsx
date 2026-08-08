import { Link } from "react-router-dom"

function Contact() {

    return (

        <div className="page">

            <h1>

                Contact Page

            </h1>

            <h2>

                BrowserRouter

            </h2>

            <p>

                BrowserRouter enables client-side routing by monitoring the browser URL and rendering the matching component without refreshing the page.

            </p>

            <h2>

                Routes

            </h2>

            <p>

                Routes is a container that checks all Route components and renders the matching route.

            </p>

            <h2>

                Route

            </h2>

            <p>

                Route maps a URL path to a React component.

            </p>

            <h2>

                Example

            </h2>

            <pre>

            {`
            <BrowserRouter>
            
                <Routes>
            
                    <Route path="/" element={<Home />} />
            
                    <Route path="/about" element={<About />} />
            
                </Routes>
            
            </BrowserRouter>
            `}

            </pre>

            <Link to="/revision/students">

                Next : Students

            </Link>

        </div>

    )

}

export default Contact