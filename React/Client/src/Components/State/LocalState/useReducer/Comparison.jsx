import React from "react";

function Comparison() {
    return (
        <div className="card">
            <h2>useState vs useReducer</h2>
            <hr />
            <table
                border="1"
                cellPadding="10"
                cellSpacing="0"
                width="100%"
                style={{
                    marginTop: "20px",
                    borderCollapse: "collapse"
                }}
            >
                <thead>
                    <tr>
                        <th>Feature</th>
                        <th>useState</th>
                        <th>useReducer</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Purpose</td>
                        <td>Manage Simple State</td>
                        <td>Manage Complex State</td>
                    </tr>
                    <tr>
                        <td>State Updates</td>
                        <td>setState()</td>
                        <td>dispatch()</td>
                    </tr>
                    <tr>
                        <td>Logic</td>
                        <td>Inside Component</td>
                        <td>Inside Reducer Function</td>
                    </tr>
                    <tr>
                        <td>Multiple Fields</td>
                        <td>Difficult</td>
                        <td>Easy</td>
                    </tr>
                    <tr>
                        <td>Forms</td>
                        <td>Small Forms</td>
                        <td>Large Forms</td>
                    </tr>
                    <tr>
                        <td>Shopping Cart</td>
                        <td>Possible</td>
                        <td>Recommended</td>
                    </tr>
                    <tr>
                        <td>Readability</td>
                        <td>Good</td>
                        <td>Better for Complex Logic</td>
                    </tr>
                    <tr>
                        <td>Real-Time Usage</td>
                        <td>Toggle, Counter, Modal</td>
                        <td>Employee Form, Cart, Checkout</td>
                    </tr>
                </tbody>
            </table>

     </div>
    )
}

export default Comparison;