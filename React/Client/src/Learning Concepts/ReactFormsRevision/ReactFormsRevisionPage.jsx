import RegistrationForm from "./components/RegistrationForm";
import "./css/style.css";

function ReactFormsRevisionPage() {

    return (
        <div className="forms-revision-page">

            <header className="page-header">

                <h1>
                    React Forms & Validation
                </h1>

                <p>
                    Controlled Components, Form Handling,
                    Validation and Dynamic Form Fields
                </p>

            </header>

            <main>

                <RegistrationForm />

            </main>

        </div>
    );
}

export default ReactFormsRevisionPage;