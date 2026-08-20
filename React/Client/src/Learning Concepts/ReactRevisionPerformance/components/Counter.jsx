function Counter({ count }) {

    console.log("Counter rendered");

    return (
        <div className="counter-display">

            <h3 className="text-[20px] font-bold bg-green-900 py-8">
                Counter Component
            </h3>

            <p>
                Current Count: {count}
            </p>

            <div className="bg-red-500 py-8">
                Test
            </div>

        </div>
    );
}

export default Counter;