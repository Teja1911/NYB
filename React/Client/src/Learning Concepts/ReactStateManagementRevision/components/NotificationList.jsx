import { useNotifications } from "../context/NotificationContext";

function NotificationList() {

    const {
        notifications,
        markAsRead,
        removeNotification,
        clearNotifications,
    } = useNotifications();

    return (
        <section className="notification-section">

            <div className="notification-header">

                <h2>
                    Notifications
                </h2>

                {notifications.length > 0 && (
                    <button
                        type="button"
                        className="clear-notifications-button"
                        onClick={clearNotifications}
                    >
                        Clear All
                    </button>
                )}

            </div>

            {notifications.length === 0 ? (

                <p className="no-notifications">
                    No notifications.
                </p>

            ) : (

                <div className="notification-list">

                    {notifications.map((notification) => (

                        <article
                            key={notification.id}
                            className={`notification-item ${
                                notification.read
                                    ? "read"
                                    : "unread"
                            }`}
                        >

                            <div className="notification-content">

                                <span
                                    className={`notification-type ${notification.type}`}
                                >
                                    {notification.type}
                                </span>

                                <p>
                                    {notification.message}
                                </p>

                            </div>

                            <div className="notification-actions">

                                {!notification.read && (

                                    <button
                                        type="button"
                                        onClick={() =>
                                            markAsRead(
                                                notification.id
                                            )
                                        }
                                    >
                                        Mark as Read
                                    </button>

                                )}

                                <button
                                    type="button"
                                    onClick={() =>
                                        removeNotification(
                                            notification.id
                                        )
                                    }
                                >
                                    Remove
                                </button>

                            </div>

                        </article>

                    ))}

                </div>

            )}

        </section>
    );
}

export default NotificationList;