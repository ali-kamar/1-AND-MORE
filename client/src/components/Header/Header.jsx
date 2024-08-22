import React from "react";
import logo from "../../assets/images/logo.JPG";

const Header = () => {
  return (
    <header className="py-4 shadow-sm bg-white mb-6">
      <div className=" flex items-center justify-between px-8">
        <a href="index.html">
          <img src={logo} alt="Logo" className="xs:w-28 sm:w-32 rounded-full" />
        </a>
        <p className="text-xl xs:invisible md:visible">1 $ AND MORE</p>

        <div className="flex items-center space-x-4 gap-2">
          <a
            href="/cart"
            className="text-center hover:text-primary transition relative"
          >
            <div className="xs:text-2xl md:text-4xl">
              <i className="fa-solid fa-bag-shopping"></i>
            </div>
            <div className="text-xs leading-3">Cart</div>
            <div className="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
              2
            </div>
          </a>
          <a
            href="/account"
            className="text-center hover:text-primary transition relative"
          >
            <div className="xs:text-2xl md:text-4xl">
              <i className="fa-regular fa-user sm:text-2xl md:text-4xl"></i>
            </div>
            <div className="text-xs leading-3">Account</div>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
