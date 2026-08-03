import Child from "./Child";

function PropsDestructing() {
    return (
        <div>
            <Child
                name="John"
                department="IT"
                salary={50000}
            />
        </div>
    )
}

export default PropsDestructing