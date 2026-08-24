import { useRef, useState } from "react";
import ResultBox from "../components/ResultBox";

function ClosureExample() {

    const [result, setResult] = useState(
        "Click the button to increase the private counter."
    );

    const counterRef = useRef(null);

    if (counterRef.current === null) {

        const createCounter = () => {

            let count = 0;

            return () => {

                count++;

                return count;
            };
        };

        counterRef.current = createCounter();
    }

    const handleIncrement = () => {

        const value = counterRef.current();

        setResult(
            `Private counter value: ${value}`
        );
    };

    return (
        <div>

            <button
                onClick={handleIncrement}
                className="rounded-lg bg-violet-600 px-5 py-3 font-medium hover:bg-violet-700"
            >
                Increase Counter
            </button>

            <ResultBox result={result} />

        </div>
    );
}

export default ClosureExample;