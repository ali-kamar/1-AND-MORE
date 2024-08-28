import React from "react";

const AdminNavbar = () => {
  return (
    <nav className="bg-primary">
      <div className="container flex">
        <div className="flex items-center justify-between flex-grow md:pl-12 py-5">
          <div className="flex items-center space-x-6 capitalize">
            <a href="/dashboard" className="text-gray-200 hover:text-white transition">
              Dashboard
            </a>
            <a
              href="/add-product"
              className="text-gray-200 hover:text-white transition"
            >
              Add Product
            </a>

            <a
              href="/add-category"
              className="text-gray-200 hover:text-white transition"
            >
              Add Category
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
