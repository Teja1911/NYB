import LoadingSpinner from "../components/LoadingSpinner";

function withLoading(WrappedComponent) {

    return function EnhancedComponent({ loading, ...props }) {

        if (loading) {
            return <LoadingSpinner />;
        }

        return <WrappedComponent {...props} />;
    };

}

export default withLoading;