import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-primary">
      <div className="container flex">
        <div className="flex items-center justify-between flex-grow md:pl-12 py-5">
          <div className="flex items-center space-x-6 capitalize">
            <a
              href="/"
              className="text-gray-200 hover:text-white transition"
            >
              Home
            </a>
            <a
              href="/shop"
              className="text-gray-200 hover:text-white transition"
            >
              Shop
            </a>

            <a href="/orders" className="text-gray-200 hover:text-white transition">
              Orders
            </a>
          </div>
          <a
            href="/contact"
            className="text-gray-200 hover:text-white transition"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar