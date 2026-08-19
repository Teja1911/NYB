import { useReducer } from "react";

import CustomerDetails from "./CustomerDetails";
import ShippingDetails from "./ShippingDetails";
import PaymentDetails from "./PaymentDetails";


const initialState = {
    step: 1,

    customer: {
        name: "",
        email: "",
    },

    shipping: {
        address: "",
        city: "",
        pincode: "",
    },

    payment: {
        method: "",
    },
};


function checkoutReducer(state, action) {

    switch (action.type) {

        case "UPDATE_CUSTOMER":

            return {
                ...state,

                customer: {
                    ...state.customer,
                    [action.field]: action.value,
                },
            };


        case "UPDATE_SHIPPING":

            return {
                ...state,

                shipping: {
                    ...state.shipping,
                    [action.field]: action.value,
                },
            };


        case "UPDATE_PAYMENT":

            return {
                ...state,

                payment: {
                    ...state.payment,
                    method: action.value,
                },
            };


        case "NEXT_STEP":

            return {
                ...state,
                step: Math.min(state.step + 1, 3),
            };


        case "PREVIOUS_STEP":

            return {
                ...state,
                step: Math.max(state.step - 1, 1),
            };


        case "RESET_CHECKOUT":

            return initialState;


        default:

            return state;
    }
}


function CheckoutReducer() {

    const [state, dispatch] = useReducer(
        checkoutReducer,
        initialState
    );


    return (
        <section className="checkout-section">

            <h2>
                Multi-Step Checkout
            </h2>

            <p className="current-step">
                Current Step: {state.step} of 3
            </p>


            {/* Step 1 */}

            {state.step === 1 && (

                <CustomerDetails
                    state={state}
                    dispatch={dispatch}
                />

            )}


            {/* Step 2 */}

            {state.step === 2 && (

                <ShippingDetails
                    state={state}
                    dispatch={dispatch}
                />

            )}


            {/* Step 3 */}

            {state.step === 3 && (

                <PaymentDetails
                    state={state}
                    dispatch={dispatch}
                />

            )}


            {/* Debug State */}

            <div className="checkout-debug">

                <h3>
                    Current State
                </h3>

                <pre>
                    {JSON.stringify(
                        state,
                        null,
                        2
                    )}
                </pre>

            </div>


            {/* Navigation */}

            <div className="checkout-actions">

                <button
                    type="button"
                    onClick={() =>
                        dispatch({
                            type: "PREVIOUS_STEP",
                        })
                    }
                    disabled={state.step === 1}
                >
                    Previous
                </button>


                <button
                    type="button"
                    onClick={() =>
                        dispatch({
                            type: "NEXT_STEP",
                        })
                    }
                    disabled={state.step === 3}
                >
                    Next
                </button>


                <button
                    type="button"
                    onClick={() =>
                        dispatch({
                            type: "RESET_CHECKOUT",
                        })
                    }
                >
                    Reset
                </button>

            </div>

        </section>
    );
}

export default CheckoutReducer;