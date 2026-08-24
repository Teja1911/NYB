import { useState } from "react";
import ResultBox from "../components/ResultBox";

function CompositionExample() {

    const [result, setResult] = useState(
        "Click the button to run the function composition."
    );

    const removeSpaces = (text) => {
        return text.replace(/\s+/g, "");
    };

    const makeUppercase = (text) => {
        return text.toUpperCase();
    };

    const addLabel = (text) => {
        return `RESULT: ${text}`;
    };

    const handleCompose = () => {

        const input = "hello javascript";

        const withoutSpaces = removeSpaces(input);

        const uppercase = makeUppercase(withoutSpaces);

        const finalResult = addLabel(uppercase);

        setResult(finalResult);
    };

    return (
        <div>

            <button
                onClick={handleCompose}
                className="rounded-lg bg-violet-600 px-5 py-3 font-medium hover:bg-violet-700"
            >
                Run Composition
            </button>

            <ResultBox result={result} />

        </div>
    );
}

export default CompositionExample;