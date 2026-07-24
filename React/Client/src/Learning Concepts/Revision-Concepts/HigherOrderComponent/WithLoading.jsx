import Loader from "./Loader"
function withLoading(WrappedComponent) {
    return function EnhancedComponent(props) {
        if (props.loading) {
            return <Loader />
        }
        return <WrappedComponent {...props} />
    }
}

export default withLoading