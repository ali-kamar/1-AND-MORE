import React from "react";
import {
  FaCheckCircle,
  FaTimesCircle,
  FaExclamationTriangle,
} from "react-icons/fa";

const Notification = ({ message, type }) => {
  const getStyles = () => {
    switch (type) {
      case "success":
        return "bg-green-100 text-green-800";
      case "error":
        return "bg-red-100 text-red-800";
      case "warning":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "";
    }
  };

  const getIcon = () => {
    switch (type) {
      case "success":
        return <FaCheckCircle className="mr-3 text-green-600" size={24} />;
      case "error":
        return <FaTimesCircle className="mr-3 text-red-600" size={24} />;
      case "warning":
        return (
          <FaExclamationTriangle className="mr-3 text-yellow-600" size={24} />
        );
      default:
        return null;
    }
  };

  return (
    <div
      className={`fixed top-5 right-5 flex items-center max-w-xs w-full p-4 rounded-md shadow-lg ${getStyles()}`}
    >
      {getIcon()}
      <span className="flex-1">{message}</span>
    </div>
  );
};

export default Notification;
