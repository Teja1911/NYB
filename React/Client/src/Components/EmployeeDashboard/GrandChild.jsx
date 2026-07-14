function GrandChild({ user }) {

    return (
        <div className="box">
            <h3>Grand Child</h3>
            <p>
                User :
                <strong>{user.name}</strong>
            </p>
        </div>
    )
}
export default GrandChild