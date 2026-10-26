import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function handleIncrease() {
    setCount((previousCount) => previousCount + 1);
  }

  function handleDecrease() {
    setCount((previousCount) => previousCount - 1);
  }

  function handleReset() {
    setCount(0);
  }

  return (
    <section>
      <h2>Counter Practice</h2>

      <p>Count: {count}</p>

      <button type="button" onClick={handleIncrease}>
        Increase
      </button>

      <button type="button" onClick={handleDecrease}>
        Decrease
      </button>

      <button type="button" onClick={handleReset}>
        Reset
      </button>
    </section>
  );
}