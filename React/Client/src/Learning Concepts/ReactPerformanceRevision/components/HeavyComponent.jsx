function HeavyComponent() {

    return (
        <div className="heavy-component">

            <h2>Heavy Component</h2>

            <p>
                This component is loaded lazily.
            </p>

            <p>
                It represents a component that may not be
                needed immediately when the application starts.
            </p>

            <div className="heavy-content">

                <h3>Employee Performance Report</h3>

                <p>
                    Employee productivity: 92%
                </p>

                <p>
                    Completed tasks: 48
                </p>

                <p>
                    Pending tasks: 5
                </p>

            </div>

        </div>
    );
}

export default HeavyComponent;