import React from 'react'

const AdminNavbar = () => {
  return (
    <nav className="bg-primary">
      <div className="flex px-2">
        <div className="flex items-center justify-between flex-grow md:px-12 py-5">
          <div className="flex items-center space-x-6 capitalize">
            <a
              href="/admin"
              className="text-gray-200 hover:text-white transition"
            >
              Dashboard
            </a>
            <a
              href="/add-product"
              className="text-gray-200 hover:text-white transition"
            >
              Add Product
            </a>

            <a
              href="/admin/add-category"
              className="text-gray-200 hover:text-white transition"
            >
              Add Category
            </a>
          </div>
          <a
            href="/admin/account"
            className="text-gray-200 hover:text-white transition"
          >
            Account
          </a>
        </div>
      </div>
    </nav>
  );
}

export default AdminNavbar