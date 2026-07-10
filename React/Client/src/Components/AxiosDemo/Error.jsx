function Error({ message }) {
    return (
        <div
            style={{
                color: "red",
                textAlign: "center",
                padding: "40px"
            }}
        >
            <h2>{message}</h2>
        </div>
    )
}

export default Error