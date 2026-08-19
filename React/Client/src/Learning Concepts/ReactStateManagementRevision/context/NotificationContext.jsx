import { createContext, useContext, useState } from "react";

const NotificationContext = createContext();

function NotificationProvider({ children }) {

    const [notifications, setNotifications] = useState([
        {
            id: 1,
            message: "New employee joined the team",
            type: "info",
            read: false,
        },
        {
            id: 2,
            message: "Leave request has been approved",
            type: "success",
            read: false,
        },
        {
            id: 3,
            message: "You have a new message",
            type: "warning",
            read: true,
        },
    ]);


    // Add notification
    const addNotification = (message, type = "info") => {

        const newNotification = {
            id: Date.now(),
            message,
            type,
            read: false,
        };

        setNotifications((previousNotifications) => [
            newNotification,
            ...previousNotifications,
        ]);
    };


    // Mark notification as read
    const markAsRead = (id) => {

        setNotifications((previousNotifications) =>

            previousNotifications.map((notification) =>

                notification.id === id
                    ? {
                        ...notification,
                        read: true,
                    }
                    : notification

            )
        );
    };


    // Remove notification
    const removeNotification = (id) => {

        setNotifications((previousNotifications) =>

            previousNotifications.filter(
                (notification) =>
                    notification.id !== id
            )

        );
    };


    // Clear all notifications
    const clearNotifications = () => {

        setNotifications([]);

    };


    const unreadCount = notifications.filter(
        (notification) => !notification.read
    ).length;


    const value = {
        notifications,
        unreadCount,
        addNotification,
        markAsRead,
        removeNotification,
        clearNotifications,
    };


    return (
        <NotificationContext.Provider value={value}>
            {children}
        </NotificationContext.Provider>
    );
}


export function useNotifications() {

    return useContext(NotificationContext);

}


export default NotificationProvider;