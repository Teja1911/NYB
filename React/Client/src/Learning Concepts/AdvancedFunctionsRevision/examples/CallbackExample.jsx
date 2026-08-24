import { useState } from "react";
import ResultBox from "../components/ResultBox";

function CallbackExample() {

    const [result, setResult] = useState(
        "Click the button to run the callback."
    );

    // Callback function
    const showMessage = (name) => {
        return `Hello ${name}, callback executed successfully!`;
    };

    // Higher-level function receiving callback
    const processUser = (callback) => {

        const message = callback("Tej");

        setResult(message);
    };

    const handleRun = () => {

        processUser(showMessage);

    };

    
    return (
        <div>

            <button
                onClick={handleRun}
                className="rounded-lg bg-violet-600 px-5 py-3 font-medium hover:bg-violet-700"
            >
                Run Callback
            </button>

            <ResultBox result={result} />

        </div>
    );
}

export default CallbackExample;