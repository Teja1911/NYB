function PaymentDetails({ state, dispatch }) {

    const handleChange = (event) => {

        dispatch({
            type: "UPDATE_PAYMENT",
            value: event.target.value,
        });
    };


    return (
        <div className="checkout-step">

            <h3>
                Step 3: Payment Details
            </h3>


            <div className="form-group">

                <label htmlFor="payment-method">
                    Payment Method
                </label>

                <select
                    id="payment-method"
                    value={state.payment.method}
                    onChange={handleChange}
                >

                    <option value="">
                        Select payment method
                    </option>

                    <option value="Credit Card">
                        Credit Card
                    </option>

                    <option value="Debit Card">
                        Debit Card
                    </option>

                    <option value="UPI">
                        UPI
                    </option>

                    <option value="Cash on Delivery">
                        Cash on Delivery
                    </option>

                </select>

            </div>

        </div>
    );
}

export default PaymentDetails;