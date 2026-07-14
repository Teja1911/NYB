import GrandChild from "./GrandChild";

function Child({ user }) {
    return (
        <div className="box">
            <h3>Child Component</h3>
            <GrandChild user={user} />
        </div>
    )
}

export default Child