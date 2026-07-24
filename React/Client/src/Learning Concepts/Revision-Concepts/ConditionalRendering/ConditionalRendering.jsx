import { useState } from "react";

function ConditionalRendering() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <div className="container">
            <h1>Conditional Rendering</h1>
            {
                isLoggedIn ?
                    (
                        <div>
                            <h2>Welcome Teja 👋</h2>
                            <p>You have successfully logged in.</p>
                        </div>
                    )
                    :
                    (
                        <div>
                            <h2>Please Login</h2>
                            <p>Click the button below to continue.</p>
                        </div>
                    )
            }
            <button
                onClick={() => setIsLoggedIn(!isLoggedIn)}
            >
                {
                    isLoggedIn
                        ? "Logout"
                        : "Login"
                }
            </button>
        </div>
    )
}

export default ConditionalRendering;