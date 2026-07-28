function withAuth(WrappedComponent) {

    return function ProtectedComponent(props) {

        const isLoggedIn = true;

        if (!isLoggedIn) {

            return (

                <div className="card">

                    <h2>

                        Login Required

                    </h2>

                    <p>

                        Please login to continue.

                    </p>

                </div>

            );

        }

        return (

            <WrappedComponent {...props} />

        );

    };

}

export default withAuth;