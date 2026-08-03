import ObjectDestructuring from "./ObjectDestructuring";
import ArrayDestructuring from "./ArrayDestructuring";
import StateDestructuring from "./StateDestructuring";
import FunctionParameterDestructuring from "./FunctionParameterDestructuring";
import "./css/style.css";
import PropsDestructing from "./PropsDestructuring/PropsDestructing";

function DestructuringDemo() {
    return (
        <div className="destructuring-container">
            <h1 className="main-title">
                React Destructuring
            </h1>
            <div className="card">
                <h2>
                    Object Destructuring
                </h2>
                <ObjectDestructuring />
            </div>
            <div className="card">
                <h2>
                    Array Destructuring
                </h2>
                <ArrayDestructuring />
            </div>
            <div className="card">
                <h2>
                    Props Destructuring
                </h2>
                <PropsDestructing/>
            </div>
            <div className="card">
                <h2>
                    State Destructuring
                </h2>
                <StateDestructuring />
            </div>
            <div className="card">
                <h2>
                    Function Parameter Destructuring
                </h2>
                <FunctionParameterDestructuring />
            </div>
        </div>
    )
}

export default DestructuringDemo