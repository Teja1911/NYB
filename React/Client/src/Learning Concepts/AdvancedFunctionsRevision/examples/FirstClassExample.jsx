import { useState } from "react";
import ResultBox from "../components/ResultBox";

function FirstClassExample() {

    const [result, setResult] = useState(
        "Choose an operation."
    );

    // Functions stored in variables
    const add = (a, b) => {
        return a + b;
    };

    const multiply = (a, b) => {
        return a * b;
    };

    // Function stored inside an object
    const operations = {
        add: add,
        multiply: multiply
    };

    const handleAdd = () => {

        const value = operations.add(10, 5);

        setResult(`10 + 5 = ${value}`);
    };

    const handleMultiply = () => {

        const value = operations.multiply(10, 5);

        setResult(`10 × 5 = ${value}`);
    };

    return (
        <div>

            <div className="flex flex-wrap gap-3">

                <button
                    onClick={handleAdd}
                    className="rounded-lg bg-violet-600 px-5 py-3 font-medium hover:bg-violet-700"
                >
                    Add
                </button>

                <button
                    onClick={handleMultiply}
                    className="rounded-lg bg-slate-700 px-5 py-3 font-medium hover:bg-slate-600"
                >
                    Multiply
                </button>

            </div>

            <ResultBox result={result} />

        </div>
    );
}

export default FirstClassExample;