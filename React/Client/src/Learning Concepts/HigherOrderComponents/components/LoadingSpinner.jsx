import "../HigherOrderComponent.css";

function LoadingSpinner() {
    return (
        <div className="loading-container">
            <div className="spinner"></div>
            <h2>Loading Employees...</h2>
        </div>
    );
}

export default LoadingSpinner;