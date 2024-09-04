import React from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const Notification = ({ message, type }) => {
  return (
    <div
      className={`fixed top-5 right-5 flex items-center max-w-xs w-full p-4 rounded-md shadow-lg
      ${
        type === "success"
          ? "bg-green-100 text-green-800"
          : "bg-red-100 text-red-800"
      }`}
    >
      {type === "success" ? (
        <FaCheckCircle className="mr-3 text-green-600" size={24} />
      ) : (
        <FaTimesCircle className="mr-3 text-red-600" size={24} />
      )}
      <span className="flex-1">{message}</span>
    </div>
  );
};

export default Notification;
