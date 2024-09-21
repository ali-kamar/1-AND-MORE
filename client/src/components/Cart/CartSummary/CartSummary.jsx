import React, { useState, useEffect } from "react";
import { useProduct } from "../../../contexts/Product/ProductProvider";

const CartSummary = ({ closeCheckout }) => {
  const [itemsTotal, setItemsTotal] = useState(0);
  const [priceTotal, setPriceTotal] = useState(0);
  const [cartProducts, setCartProducts] = useState([]);
  const [cartQuantities, setCartQuantities] = useState({});
  const [formData, setFormData] = useState([])
  const { products } = useProduct();

  useEffect(() => {
    const data = []; // Move data initialization inside the useEffect to reset it each time

    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.cart) {
      setItemsTotal(user.cart.length);
      const cartProductsData = user.cart;

      // Get product IDs and quantities from localStorage
      const cartProductsIds = cartProductsData.map((item) => item.id);
      const initialQuantities = {};
      cartProductsData.forEach((item) => {
        initialQuantities[item.id] = item.quantity; // Initialize quantities from localStorage
      });

      // Filter products that are in the user's cart
      const cartItems = products.filter((product) =>
        cartProductsIds.includes(product.product_id)
      );

      // Calculate total price
      let totalPrice = 0;
      cartItems.forEach((product) => {
        if (product.offertype > 0) {
          let newPrice = (
            product.price -
            product.price * (product.offertype / 100)
          ).toFixed(2);
          totalPrice += newPrice * initialQuantities[product.product_id];
          let total = (
            newPrice * initialQuantities[product.product_id]
          ).toFixed(2);
          data.push({
            quantity: initialQuantities[product.product_id],
            name: product.name,
            total,
          });
        } else {
          totalPrice += product.price * initialQuantities[product.product_id];
          let total = (
            product.price * initialQuantities[product.product_id]
          ).toFixed(2);
          data.push({
            quantity: initialQuantities[product.product_id],
            name: product.name,
            total,
          });
        }
      });

      console.log(data);
      
      setFormData(data)
      setPriceTotal(totalPrice.toFixed(2));
      setCartProducts(cartItems);
      setCartQuantities(initialQuantities);
    }
  }, [products]);

  return (
    <div className="max-w-xl w-full bg-black p-10 rounded text-white">
      <h4 className="font-semibold text-lg mb-5 border-b border-primary pb-5">
        Order Summary
      </h4>
      <div className="flex justify-between mb-5">
        <p>Items</p>
        <p>{itemsTotal}</p>
      </div>
      {/* Inputs */}
      <div>
        <div className="mb-5">
          <label htmlFor="name">Name</label>
          <br />
          <input type="text" name="name" id="" className="w-full p-1 rounded" />
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
      </div>
      <div className="flex justify-between my-5 border-b border-primary pb-5">
        <p>Total</p>
        <p>{priceTotal}</p>
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
