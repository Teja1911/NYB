function ShippingDetails({ state, dispatch }) {

    const handleChange = (event) => {

        const { name, value } = event.target;

        dispatch({
            type: "UPDATE_SHIPPING",
            field: name,
            value: value,
        });
    };


    return (
        <div className="checkout-step">

            <h3>
                Step 2: Shipping Details
            </h3>


            <div className="form-group">

                <label htmlFor="shipping-address">
                    Address
                </label>

                <input
                    id="shipping-address"
                    type="text"
                    name="address"
                    value={state.shipping.address}
                    onChange={handleChange}
                    placeholder="Enter your address"
                />

            </div>


            <div className="form-group">

                <label htmlFor="shipping-city">
                    City
                </label>

                <input
                    id="shipping-city"
                    type="text"
                    name="city"
                    value={state.shipping.city}
                    onChange={handleChange}
                    placeholder="Enter your city"
                />

            </div>


            <div className="form-group">

                <label htmlFor="shipping-pincode">
                    Pincode
                </label>

                <input
                    id="shipping-pincode"
                    type="text"
                    name="pincode"
                    value={state.shipping.pincode}
                    onChange={handleChange}
                    placeholder="Enter your pincode"
                />

            </div>

        </div>
    );
}

export default ShippingDetails;