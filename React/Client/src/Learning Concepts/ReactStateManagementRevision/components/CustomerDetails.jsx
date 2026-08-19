function CustomerDetails({ state, dispatch }) {

    const handleChange = (event) => {

        const { name, value } = event.target;

        dispatch({
            type: "UPDATE_CUSTOMER",
            field: name,
            value: value,
        });
    };


    return (
        <div className="checkout-step">

            <h3>
                Step 1: Customer Details
            </h3>

            <div className="form-group">

                <label htmlFor="customer-name">
                    Name
                </label>

                <input
                    id="customer-name"
                    type="text"
                    name="name"
                    value={state.customer.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                />

            </div>


            <div className="form-group">

                <label htmlFor="customer-email">
                    Email
                </label>

                <input
                    id="customer-email"
                    type="email"
                    name="email"
                    value={state.customer.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                />

            </div>

        </div>
    );
}

export default CustomerDetails;