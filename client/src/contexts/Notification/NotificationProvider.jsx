import React, { createContext, useState, useContext } from "react";

// Create the Notification Context
const NotificationContext = createContext();

// Notification Provider component
export const NotificationProvider = ({ children }) => {
  const [notification, setNotification] = useState({ message: "", type: "" });
  const [isOpen, setOpen] = useState(false);

  // Function to show notification
  const showNotification = (message, type) => {
    setNotification({ message, type });
    setOpen(true);

    // Automatically hide the notification after 3 seconds
    setTimeout(() => {
      setNotification({ message: "", type: "" });
      setOpen(false);
    }, 3000);
  };

  return (
    <NotificationContext.Provider
      value={{ isOpen, notification, showNotification }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

// Custom hook to use the notification context
export const useNotification = () => useContext(NotificationContext);
