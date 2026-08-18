import UserDashboard from "./components/UserDashboard";
import "./css/style.css";

function APIIntegrationRevisionPage() {

    return (
        <div className="api-revision-page">

            <header className="page-header">

                <h1>
                    API Integration & Data Handling
                </h1>

                <p>
                    Fetch API, Loading, Error Handling and Search
                </p>

            </header>

            <main>
                <UserDashboard />
            </main>

        </div>
    );
}

export default APIIntegrationRevisionPage;