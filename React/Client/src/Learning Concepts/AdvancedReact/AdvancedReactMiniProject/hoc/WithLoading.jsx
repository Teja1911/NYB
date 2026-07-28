function withLoading(WrappedComponent) {

    return function LoadingComponent(props) {

        if (props.loading) {

            return (

                <div className="loading">

                    <h2>

                        Loading Employees...

                    </h2>

                </div>

            );

        }

        return (

            <WrappedComponent {...props} />

        );

    };

}

export default withLoading;