import React from "react";

function ReducerInfo() {

    return (
        <div className="card">
            <h2>How useReducer Works</h2>
            <hr />
            <h3>Flow Diagram</h3>
            <pre
                style={{
                    background: "#f4f4f4",
                    padding: "15px",
                    borderRadius: "8px",
                    overflowX: "auto"
                }}
            >
{`
User Clicks Button
        │
        ▼
dispatch(action)
        │
        ▼
Reducer Function
(state, action)
        │
        ▼
Returns New State
        │
        ▼
React Re-renders
        │
        ▼
Updated UI
`}
            </pre>
            <h3>Important Terms</h3>
            <table
                border="1"
                cellPadding="10"
                cellSpacing="0"
                width="100%"
                style={{
                    borderCollapse: "collapse"
                }}
            >
                <thead>
                    <tr>
                        <th>Concept</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Initial State</td>
                        <td>Starting values of the application state.</td>
                    </tr>
                    <tr>
                        <td>Reducer Function</td>
                        <td>Receives current state and action, then returns a new state.</td>
                    </tr>
                    <tr>
                        <td>Action</td>
                        <td>An object describing what happened.</td>
                    </tr>
                    <tr>
                        <td>Dispatch</td>
                        <td>Sends an action to the reducer.</td>
                    </tr>
                    <tr>
                        <td>State</td>
                        <td>Stores the current data used by the component.</td>
                    </tr>
                </tbody>
            </table>
            <br />
            <h3>Sample Action Object</h3>
            <pre
                style={{
                    background: "#272822",
                    color: "#fff",
                    padding: "15px",
                    borderRadius: "8px"
                }}
            >
{`dispatch({
    type: "UPDATE_NAME",
    payload: "Tejaswar Rao"
})`}
            </pre>
        </div>
    )
}

export default ReducerInfo