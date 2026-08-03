function WithAuth(WrappedComponent) {

    function AuthenticatedComponent(props) {

        const isLoggedIn = true;

        if (!isLoggedIn) {

            return (

                <div className="access-denied">

                    <h1>

                        Access Denied

                    </h1>

                    <p>

                        Please login to continue.

                    </p>

                </div>

            );

        }

        return (

            <WrappedComponent

                {...props}

            />

        );

    }

    AuthenticatedComponent.displayName = `WithAuth(${
        WrappedComponent.displayName ||
        WrappedComponent.name ||
        "Component"
    })`;

    return AuthenticatedComponent;

}

export default WithAuth;