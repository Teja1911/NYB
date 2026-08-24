import { useState } from "react";
import ResultBox from "../components/ResultBox";

function PureImpureExample() {

    const [result, setResult] = useState(
        "Choose an example to see the difference."
    );

    // Pure function
    const calculateTotal = (price, tax) => {
        return price + tax;
    };

    // Impure function
    let total = 100;

    const updateTotal = (amount) => {
        total = total + amount;

        return total;
    };

    const handlePureFunction = () => {

        const value = calculateTotal(100, 18);

        setResult(
            `Pure function: 100 + 18 = ${value}`
        );
    };

    const handleImpureFunction = () => {

        const value = updateTotal(20);

        setResult(
            `Impure function: external value changed to ${value}`
        );
    };

    return (
        <div className="space-y-4">

            <div className="flex flex-wrap gap-3">

                <button
                    onClick={handlePureFunction}
                    className="rounded-lg bg-emerald-600 px-5 py-3 font-medium hover:bg-emerald-700"
                >
                    Run Pure Function
                </button>

                <button
                    onClick={handleImpureFunction}
                    className="rounded-lg bg-orange-600 px-5 py-3 font-medium hover:bg-orange-700"
                >
                    Run Impure Function
                </button>

            </div>

            <ResultBox result={result} />

        </div>
    );
}

export default PureImpureExample;