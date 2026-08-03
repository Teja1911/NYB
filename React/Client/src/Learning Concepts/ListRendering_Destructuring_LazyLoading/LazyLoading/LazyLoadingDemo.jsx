import { lazy, Suspense, useState } from "react";
import Loader from "./Loader";
import "./css/style.css";
const Home = lazy(() => import("./Home"));
const About = lazy(() => import("./About"));
const Contact = lazy(() => import("./Contact"));

function LazyLoadingDemo() {
    const [page, setPage] = useState("home");
    return (
        <div className="lazy-container">
            <h1>
                React Lazy Loading
            </h1>
            <div className="button-group">
                <button
                    onClick={() => setPage("home")}
                >
                    Home
                </button>
                <button
                    onClick={() => setPage("about")}
                >
                    About
                </button>
                <button
                    onClick={() => setPage("contact")}
                >
                    Contact
                </button>
            </div>
            <Suspense fallback={<Loader />}>
                {
                    page === "home"
                    ?
                    <Home />
                    :
                    page === "about"
                    ?
                    <About />
                    :
                    <Contact />
                }
            </Suspense>
        </div>
    )
}

export default LazyLoadingDemo