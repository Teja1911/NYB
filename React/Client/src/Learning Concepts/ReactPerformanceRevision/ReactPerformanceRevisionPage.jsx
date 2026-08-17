import { lazy, Suspense } from "react";

import EmployeeDashboard from "./components/EmployeeDashboard";

import "./css/style.css";

const HeavyComponent = lazy(
    () => import("./components/HeavyComponent")
);

function ReactPerformanceRevisionPage() {

    return (
        <div className="performance-page">

            <h1>
                React Performance Revision
            </h1>

            <p className="page-description">
                React.memo(), useMemo(), useCallback(),
                Custom Hooks and Lazy Loading
            </p>

            <EmployeeDashboard />

            <Suspense
                fallback={
                    <div className="loading">
                        Loading Performance Report...
                    </div>
                }
            >
                <HeavyComponent />
            </Suspense>

        </div>
    );
}

export default ReactPerformanceRevisionPage;