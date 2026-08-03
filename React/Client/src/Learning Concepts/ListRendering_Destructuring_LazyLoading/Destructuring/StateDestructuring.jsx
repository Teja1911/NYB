import { useState } from "react";

function StateDestructuring() {
    const [count,setCount] = useState(0)
    return (
        <div>
            <h2>
                State Destructuring
            </h2>
            <h3>
                Count : {count}
            </h3>
            <button
                onClick={() => setCount(count + 1)}
            >
                Increment
            </button>
        </div>
    )
}

export default StateDestructuring