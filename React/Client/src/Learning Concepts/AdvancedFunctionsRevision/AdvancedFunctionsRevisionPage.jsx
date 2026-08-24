import FunctionCard from "./components/FunctionCard";
import CallbackExample from "./examples/CallbackExample";
import ClosureExample from "./examples/ClosureExample";
import CompositionExample from "./examples/CompositionExample";
import FirstClassExample from "./examples/FirstClassExample";
import HigherOrderExample from "./examples/HigherOrderExample";
import IIFEExample from "./examples/IIFEExample";
import PureImpureExample from "./examples/PureImpureExample";

function AdvancedFunctionsRevisionPage() {

    return (
        <div className="min-h-screen bg-slate-950 px-6 py-10 text-white">

            <div className="mx-auto max-w-6xl">

                <div className="mb-10">

                    <span className="rounded-full bg-violet-500/10 px-4 py-2 text-sm text-violet-400">
                        JavaScript Revision
                    </span>

                    <h1 className="mt-5 text-4xl font-bold">
                        Advanced Functions
                    </h1>

                    <p className="mt-3 max-w-2xl text-slate-400">
                        Explore callbacks, higher-order functions,
                        closures, IIFE, pure functions and function
                        composition through small practical examples.
                    </p>

                </div>


                <div className="grid gap-6 md:grid-cols-2">

                    <FunctionCard
                        title="1. Callback Function"
                        description="A function passed to another function and executed later."
                    >
                        <CallbackExample />
                    </FunctionCard>

                    <FunctionCard
                        title="2. Higher-Order Function"
                        description="A function that accepts another function or returns a function."
                    >
                    <HigherOrderExample/>
                    </FunctionCard>

                    <FunctionCard
                        title="3. First-Class Function"
                        description="JavaScript treats functions as values that can be stored, passed and returned."
                    >
                        <FirstClassExample/>
                    </FunctionCard>

                    <FunctionCard
                        title="4. Closure"
                        description="A function remembers variables from the scope where it was created."
                    >
                        <ClosureExample/>
                    </FunctionCard>

                    <FunctionCard
                        title="5. IIFE"
                        description="A function expression that is immediately executed."
                    >
                        <IIFEExample/>
                    </FunctionCard>

                    <FunctionCard
                        title="6. Pure vs Impure Functions"
                        description="Compare predictable functions with functions that interact with external state."
                    >
                        <PureImpureExample/>
                    </FunctionCard>

                    <FunctionCard
                        title="7. Function Composition"
                        description="Combining small functions so that one function's output becomes another function's input."
                    >
                        <CompositionExample/>
                    </FunctionCard>

                </div>

            </div>

        </div>
    );
}

export default AdvancedFunctionsRevisionPage;