import { useNotifications } from "../context/NotificationContext";

function NotificationBell() {

    const {
        unreadCount,
    } = useNotifications();

    return (
        <button
            type="button"
            className="notification-bell"
            aria-label="Notifications"
        >

            🔔

            {unreadCount > 0 && (
                <span className="notification-count">
                    {unreadCount}
                </span>
            )}

        </button>
    );
}

export default NotificationBell;