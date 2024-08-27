import React from "react";

const CartSummary = ({ closeCheckout }) => {
  return (
    <div className="max-w-xl w-full bg-black p-10 rounded text-white">
      <h4 className="font-semibold text-lg mb-5 border-b border-primary pb-5">
        Order Summary
      </h4>
      <div className="flex justify-between mb-5">
        <p>Items</p>
        <p>Price</p>
      </div>
      {/* Inputs */}
      <div>
        <div className="mb-5">
          <label htmlFor="address">Address</label>
          <br />
          <input
            type="text"
            name="address"
            id=""
            className="w-full p-1 rounded"
          />
        </div>
        <div className="mb-5">
          <label htmlFor="phone">Phone</label>
          <br />
          <input
            type="number"
            name="phone"
            id=""
            className="w-full p-1 rounded"
          />
        </div>
      </div>
      <div className="flex justify-between my-5 border-b border-primary pb-5">
        <p>Total</p>
        <p>Price</p>
      </div>
      <div className="flex justify-end">
        <button className="rounded bg-primary items-center border border-primary text-white py-1 xs:px-3 lg:px-8 hover:bg-transparent hover:text-primary transition">
          Order
        </button>
        <button
          className="ml-2 rounded bg-white items-center border border-black text-black py-1 xs:px-3 lg:px-8 hover:border-primary hover:bg-transparent hover:text-primary transition"
          onClick={closeCheckout}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default CartSummary;
