import Child from "./Child"

function Parent({ user }) {

    return (
        <div className="box">
            <h3>Parent Component</h3>
            <Child user={user} />
        </div>
    )

}

export default Parent