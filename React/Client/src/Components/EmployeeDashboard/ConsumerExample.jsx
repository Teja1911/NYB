import React from "react";
import { AppContext } from "./AppContext";

function ConsumerExample() {
    return (
        <div className="card">
            <h2>Context Consumer Example</h2>
            <p>
                This component is using
                <strong> Context.Consumer </strong>
                instead of
                <strong> useContext()</strong>.
            </p>
            <AppContext.Consumer>
                {(value) => (
                    <div>
                        <h3>Employee Details</h3>
                        <p>
                            <strong>Name :</strong> {value.user.name}
                        </p>
                        <p>
                            <strong>Role :</strong> {value.user.role}
                        </p>
                        <p>
                            <strong>Theme :</strong> {value.theme}
                        </p>
                        <p>
                            <strong>Cart Count :</strong> {value.cartCount}
                        </p>
                    </div>
                )}
            </AppContext.Consumer>
        </div>
    )
}

export default ConsumerExample