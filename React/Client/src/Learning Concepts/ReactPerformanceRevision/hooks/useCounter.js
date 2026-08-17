import { useState } from "react";

function useCounter(initialValue = 0) {

    const [count, setCount] = useState(initialValue);

    const increment = () => {
        setCount((currentCount) => currentCount + 1);
    };

    const decrement = () => {
        setCount((currentCount) => currentCount - 1);
    };

    const reset = () => {
        setCount(initialValue);
    };

    return {
        count,
        increment,
        decrement,
        reset,
    };
}

export default useCounter;