import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-primary">
      <div className="sm:container flex">
        <div className="flex items-center justify-between flex-grow xs:px-5 sm:px-0 md:pl-12 py-5">
          <div className="flex items-center space-x-6 capitalize xs:text-16 lg:text-xl">
            <a href="/" className="text-gray-200 hover:text-white transition">
              Home
            </a>
            <a
              href="/shop"
              className="text-gray-200 hover:text-white transition"
            >
              Shop
            </a>

            <a
              href="/orders"
              className="text-gray-200 hover:text-white transition"
            >
              Orders
            </a>
          </div>
          <a
            href="/contact"
            className="text-gray-200 hover:text-white transition xs:text-16 lg:text-xl"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar