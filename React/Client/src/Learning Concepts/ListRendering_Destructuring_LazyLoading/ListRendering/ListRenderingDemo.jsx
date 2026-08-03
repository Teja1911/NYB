import BasicList from "./BasicList";
import KeyProps from "./KeyProps";
import NestedList from "./NestedList";
import ConditionalList from "./ConditionalList";
import EmployeeList from "./EmployeeList";
import "./css/style.css";

function ListRenderingDemo() {
    return (
        <div className="list-container">
            <h1 className="main-title">
                React List Rendering
            </h1>
            <div className="card">
                <h2>
                    Basic List Rendering
                </h2>
                <BasicList/>
            </div>
            <div className="card">
                <h2>
                    Key Props
                </h2>
                <KeyProps/>
            </div>
            <div className="card">
                <h2>
                    Nested List Rendering
                </h2>
                <NestedList/>
            </div>
            <div className="card">
                <h2>
                    Conditional List Rendering
                </h2>
                <ConditionalList/>
            </div>
            <div className="card">
                <h2>
                    Employee Dashboard
                </h2>
                <EmployeeList/>
            </div>
        </div>
    )
}

export default ListRenderingDemo