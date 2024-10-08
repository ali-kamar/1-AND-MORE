// components/Loader.jsx
import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-opacity-50 bg-gray-700 flex justify-center items-center z-50">
      <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12"></div>
    </div>
  );
};

export default Loader;

