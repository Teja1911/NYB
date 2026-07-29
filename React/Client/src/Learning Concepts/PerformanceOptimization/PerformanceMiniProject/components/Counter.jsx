function Counter({ count, setCount }) {

    console.log("Counter Rendered");

    return (

        <div className="card">

            <h2>

                Counter

            </h2>

            <h3>

                {count}

            </h3>

            <button

                onClick={() =>

                    setCount(previousCount => previousCount + 1)

                }

            >

                Increase Counter

            </button>

        </div>

    );

}

export default Counter;