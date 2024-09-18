import React from "react";

const Modal = ({ isOpen, onClose, title, message }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 text-black">
      <div className="bg-white rounded-lg shadow-lg p-8 w-3/4 md:w-1/2 lg:w-1/3">
        <h2 className="text-xl font-semibold mb-4">{title}</h2>
        <p className="mb-6">{message}</p>
        <button
          onClick={onClose}
          className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-700"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
