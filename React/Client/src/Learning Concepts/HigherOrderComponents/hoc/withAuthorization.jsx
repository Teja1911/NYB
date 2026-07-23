function withAuthorization(WrappedComponent) {

    return function AuthorizationComponent({ role, ...props }) {

        if (role !== "Admin") {

            return (
                <div className="message-box">
                    <h2>Access Denied</h2>
                </div>
            );

        }

        return <WrappedComponent {...props} />;
    };

}

export default withAuthorization;