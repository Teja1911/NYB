import { useState } from "react";
import ResultBox from "../components/ResultBox";

function HigherOrderExample() {

    const [result, setResult] = useState(
        "Click a button to run a higher-order function."
    );

    // Normal functions
    const double = (number) => {
        return number * 2;
    };

    const addTen = (number) => {
        return number + 10;
    };

    // Higher-order function
    const calculate = (number, operation) => {

        return operation(number);

    };

    const handleDouble = () => {

        const value = calculate(5, double);

        setResult(`Double of 5 = ${value}`);
    };

    const handleAddTen = () => {

        const value = calculate(5, addTen);

        setResult(`5 + 10 = ${value}`);
    };

    return (
        <div className="space-y-4">

            <div className="flex flex-wrap gap-3">

                <button
                    onClick={handleDouble}
                    className="rounded-lg bg-violet-600 px-5 py-3 font-medium hover:bg-violet-700"
                >
                    Double 5
                </button>

                <button
                    onClick={handleAddTen}
                    className="rounded-lg bg-slate-700 px-5 py-3 font-medium hover:bg-slate-600"
                >
                    Add 10
                </button>

            </div>

            <ResultBox result={result} />

        </div>
    );
}

export default HigherOrderExample;