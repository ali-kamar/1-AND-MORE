import React, { useState, useEffect } from "react";
import CartProduct from "../../components/Cart/CartProduct/CartProduct";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Contact from "../../components/Contact/Contact";
import CartSummary from "../../components/Cart/CartSummary/CartSummary";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [isCheckout, setCheckout] = useState(false);
  const closeCheckout = () => {
    setCheckout(false)
  }

  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  });

  return (
    <>
      <Header />
      <Navbar />
      <h2 className="text-5xl text-center pb-11 border-b-primary border-b mt-10">
        Shopping Cart
      </h2>
      <div className="w-full overflow-x-auto">
        <div className="min-w-[850px] mx-auto custom-scrollbar">
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left px-4 py-2">Product Details</th>
                <th className="text-center px-4 py-2">Quantity</th>
                <th className="text-center px-4 py-2">Price</th>
                <th className="text-center px-4 py-2">Total</th>
                <th className="text-center px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              <CartProduct />
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex justify-center my-5">
        <button
          className="bg-primary items-center border rounded border-primary text-white p-4 hover:bg-transparent hover:text-primary transition"
          onClick={() => setCheckout(true)}
        >
          Checkout
        </button>
        <button className="ml-2 bg-black items-center border rounded border-black text-white p-4 hover:bg-transparent hover:text-primary transition">
          Clear
        </button>
      </div>
      {isCheckout && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
          <CartSummary closeCheckout={closeCheckout} />
        </div>
      )}
      <Contact />
    </>
  );
};

export default Cart;
