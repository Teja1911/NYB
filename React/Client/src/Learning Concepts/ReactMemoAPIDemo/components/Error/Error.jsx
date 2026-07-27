function Error({ message }) {
  return (
    <div
      style={{
        background: "#ffe6e6",
        color: "red",
        padding: "15px",
        borderRadius: "8px",
        margin: "20px 0",
      }}
    >
      {message}
    </div>
  );
}

export default Error;