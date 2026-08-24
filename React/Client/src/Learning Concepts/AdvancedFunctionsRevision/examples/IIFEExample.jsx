import { useState } from "react";
import ResultBox from "../components/ResultBox";

function IIFEExample() {

    const [result, setResult] = useState(
        "Click the button to run the IIFE."
    );

    const handleRun = () => {

        const message = (() => {

            const appName = "Function Lab";

            return `IIFE executed successfully inside ${appName}.`;

        })();

        setResult(message);
    };

    return (
        <div>

            <button
                onClick={handleRun}
                className="rounded-lg bg-violet-600 px-5 py-3 font-medium hover:bg-violet-700"
            >
                Run IIFE
            </button>

            <ResultBox result={result} />

        </div>
    );
}

export default IIFEExample;