export function ErrorMessage({
  message = "Something went wrong.",
  onRetry
}) {
  return (
    <section className="feedback-card feedback-error" role="alert">
      <h3>Unable to complete the request</h3>

      <p>{message}</p>

      {onRetry && (
        <button type="button" onClick={onRetry}>
          Try Again
        </button>
      )}
    </section>
  );
}

export function EmptyState({
  title = "No records found",
  message = "There is no data to display."
}) {
  return (
    <section className="feedback-card feedback-empty">
      <h3>{title}</h3>

      <p>{message}</p>
    </section>
  );
}

export function SuccessMessage({ message }) {
  if (!message) {
    return null;
  }

  return (
    <div className="feedback-success" role="status">
      {message}
    </div>
  );
}