import React, {useState} from 'react'

const AdminNavbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className="bg-primary">
      <div className="px-2 xs:hidden sm:flex">
        <div className="flex items-center justify-between flex-grow md:px-12 py-5">
          <div className="flex items-center space-x-6 capitalize pr-5 text-center">
            <a
              href="/admin"
              className="text-gray-200 hover:text-white transition"
            >
              Dashboard
            </a>
            <a
              href="/admin/add-product"
              className="text-gray-200 hover:text-white transition "
            >
              Add Product
            </a>

            <a
              href="/admin/add-category"
              className="text-gray-200 hover:text-white transition"
            >
              Add Category
            </a>
            <a
              href="/admin/orders"
              className="text-gray-200 hover:text-white transition"
            >
              Orders
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
      <div className="sm:hidden xs:flex justify-end text-white p-3">
        <button className="text-3xl " onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <i className="fa-solid fa-x"></i>
          ) : (
            <i className="fa-solid fa-bars"></i>
          )}
        </button>
      </div>
      {isOpen && (
        <div className='xs:block sm:hidden'>
          <div className="w-full flex flex-col p-3 ">
            <a
              href="/admin"
              className="text-gray-200 hover:text-white transition mb-5 text-lg border-b pb-1"
            >
              Dashboard
            </a>
            <a
              href="/admin/add-product"
              className="text-gray-200 hover:text-white transition mb-5 text-lg border-b pb-1"
            >
              Add Product
            </a>

            <a
              href="/admin/add-category"
              className="text-gray-200 hover:text-white transition mb-5 text-lg border-b pb-1"
            >
              Add Category
            </a>
            <a
              href="/admin/orders"
              className="text-gray-200 hover:text-white transition mb-5 text-lg border-b pb-1"
            >
              Orders
            </a>
            <a
              href="/admin/account"
              className="text-gray-200 hover:text-white transition mb-5 text-lg border-b pb-1"
            >
              Account
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default AdminNavbar