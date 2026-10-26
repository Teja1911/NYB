import { useEffect } from "react";

function Notification({
  type = "success",
  message,
  onClose,
  duration = 3500
}) {
  useEffect(() => {
    if (!message || !duration) {
      return undefined;
    }

    const timer = setTimeout(() => {
      onClose?.();
    }, duration);

    return () => clearTimeout(timer);
  }, [message, duration, onClose]);

  if (!message) {
    return null;
  }

  return (
    <div
      className={`app-notification app-notification-${type}`}
      role={type === "error" ? "alert" : "status"}
    >
      <span>{message}</span>

      <button
        type="button"
        className="app-notification-close"
        onClick={onClose}
        aria-label="Dismiss notification"
      >
        ×
      </button>
    </div>
  );
}

export default Notification;