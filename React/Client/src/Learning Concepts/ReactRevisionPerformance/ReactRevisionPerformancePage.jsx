import PerformanceDashboard from "./components/PerformanceDashboard";

import "./css/style.css";

function ReactRevisionPerformancePage() {

    return (
        <div className="performance-page">

            <header className="performance-header">

                <h1>
                    React Performance & Optimization
                </h1>

                <p>
                    Understanding unnecessary re-renders
                </p>

            </header>


            <main>

                <PerformanceDashboard />

            </main>

        </div>
    );
}

export default ReactRevisionPerformancePage;