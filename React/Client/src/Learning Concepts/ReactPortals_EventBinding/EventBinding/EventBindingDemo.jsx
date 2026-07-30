import FunctionalEvents from "./FunctionalEvents";

import ParameterPassing from "./ParameterPassing";
import FormEvents from "./FormEvents";
import "./css/style.css";
import ClassEvent from "./ClassEvent";

function EventBindingDemo() {

    return (
        <div className="event-container">
            <h1 className="main-title">
                React Event Binding
            </h1>
            <div className="card">
                <h2>Functional Events</h2>
                <FunctionalEvents />
            </div>
            <div className="card">
                <h2>Class Events</h2>
                <ClassEvent/>
            </div>
            <div className="card">
                <h2>Parameter Passing</h2>
                <ParameterPassing />
            </div>
            <div className="card">
                <h2>Form Events</h2>
                <FormEvents />
            </div>
        </div>
    );
}

export default EventBindingDemo;