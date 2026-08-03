function About() {
    return (
        <div className="page">
            <h1>
                About Page
            </h1>
            <p>
                Welcome to the About Page.
            </p>
            <p>
                This page explains the purpose of the application.
            </p>
            <p>
                It is loaded only when the user navigates to it using React.lazy().
            </p>
        </div>
    )
}

export default About