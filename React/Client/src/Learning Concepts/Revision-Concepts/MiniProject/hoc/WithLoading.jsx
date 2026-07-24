function withLoading(WrappedComponent) {
    return function EnhancedComponent(props) {
        if (props.loading) {
            return <h2>Loading Employees...</h2>
        }
        return <WrappedComponent {...props} />
    }

}

export default withLoading