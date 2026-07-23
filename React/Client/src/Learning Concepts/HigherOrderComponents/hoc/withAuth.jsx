function withAuth(WrappedComponent) {

    return function AuthComponent({ isLoggedIn, ...props }) {

        if (!isLoggedIn) {
            return (
                <div className="message-box">
                    <h2>Please Login to Continue</h2>
                </div>
            );
        }

        return <WrappedComponent {...props} />;
    };

}

export default withAuth;