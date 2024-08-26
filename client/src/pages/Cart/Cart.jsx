import React from 'react'
import CartProduct from '../../components/Cart/CartProduct/CartProduct';
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Contact from "../../components/Contact/Contact";

const Cart = () => {
  return (
    <>
      <Header />
      <Navbar />
      <h2 className="text-5xl text-center pb-11 border-b-primary border-b mt-10">
        Shopping Cart
      </h2>
      <div className="my-6 flex justify-center">
        <table>
          <th>Product Details</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Total</th>
          <CartProduct />
        </table>
      </div>
      <div className="flex justify-center my-5">
        <button className="bg-primary items-center border rounded border-primary text-white  p-4  hover:bg-transparent hover:text-primary transition ">
          Checkout
        </button>
        <button className="ml-2 bg-black items-center border rounded border-black text-white  p-4  hover:bg-transparent hover:text-primary transition ">
          Clear
        </button>
      </div>
      <Contact />
    </>
  );
}

export default Cart