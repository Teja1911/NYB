function ActionButtons({
    updateUser,
    patchUser,
    deleteUser

}) {
    return (
        <div
            style={{
                margin: "30px 0",
                display: "flex",
                gap: "20px"
            }}
        >
            <button onClick={updateUser}>PUT User</button>
            <button onClick={patchUser}>PATCH User</button>
            <button onClick={deleteUser}>DELETE User</button>
        </div>
    )

}

export default ActionButtons