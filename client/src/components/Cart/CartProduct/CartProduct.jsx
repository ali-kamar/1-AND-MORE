import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import { useProduct } from "../../../contexts/Product/ProductProvider";
import { useNotification } from "../../../contexts/Notification/NotificationProvider";
import Notification from "../../Notification/Notification";

const CartProduct = () => {
  const [cartProducts, setCartProducts] = useState([]);
  const [cartQuantities, setCartQuantities] = useState({});
  const { products } = useProduct();
  const { isOpen, notification, showNotification } = useNotification();

  useEffect(() => {
    // Get user and cart from localStorage
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.cart) {
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

      setCartProducts(cartItems);
      setCartQuantities(initialQuantities); // Set the quantities state
    }
  }, [products]);

  // Function to handle quantity change
  const handleQuantityChange = (productId, delta) => {
    setCartQuantities((prevQuantities) => {
      const newQuantity = Math.max(1, (prevQuantities[productId] || 1) + delta); // Ensure quantity doesn't go below 1
      const updatedQuantities = {
        ...prevQuantities,
        [productId]: newQuantity,
      };

      // Update localStorage with the new quantity
      const user = JSON.parse(localStorage.getItem("user"));
      const updatedCart = user.cart.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      );
      localStorage.setItem(
        "user",
        JSON.stringify({ ...user, cart: updatedCart })
      );

      return updatedQuantities;
    });
  };

  // Function to handle product deletion
  const handleDelete = (productId) => {
    // Remove the product from the cart state
    setCartProducts((prevProducts) =>
      prevProducts.filter((product) => product.product_id !== productId)
    );

    // Remove the product from the quantities state
    setCartQuantities((prevQuantities) => {
      const { [productId]: _, ...remainingQuantities } = prevQuantities;
      return remainingQuantities;
    });

    // Update localStorage
    const user = JSON.parse(localStorage.getItem("user"));
    const updatedCart = user.cart.filter((item) => item.id !== productId);
    localStorage.setItem(
      "user",
      JSON.stringify({ ...user, cart: updatedCart })
    );
    showNotification("Deleted Successfully", "success")
  };

  if (cartProducts.length === 0) {
    return (
      <p className="text-center text-lg py-12 font-medium">
        Your Cart is empty.
      </p>
    );
  }
    return (
      <>
        {cartProducts.map((product) => (
          <tr key={product.product_id} className="border-t border-gray-200">
            <td className="py-4 px-4 min-w-[200px]">
              <div className="flex items-center gap-2">
                <img
                  src={product.imageurl}
                  alt={product.name}
                  className="w-32 h-32 object-cover"
                />
                <div className="flex flex-col text-left">
                  <h4 className="text-lg font-semibold">{product.name}</h4>
                  <Link
                    to={`/product/${product.product_id}`}
                    className="text-blue-500 hover:underline"
                  >
                    View Product
                  </Link>
                </div>
              </div>
            </td>

            <td className="py-4 px-4 text-center min-w-[120px]">
              <button
                className="text-xl text-gray-600 hover:text-gray-800"
                onClick={() => handleQuantityChange(product.product_id, -1)} // Decrease quantity
              >
                -
              </button>
              <span className="bg-primary text-white rounded-lg px-4 py-2 mx-2">
                {cartQuantities[product.product_id] || 1}{" "}
                {/* Display quantity */}
              </span>
              <button
                className="text-xl text-gray-600 hover:text-gray-800"
                onClick={() => handleQuantityChange(product.product_id, 1)} // Increase quantity
              >
                +
              </button>
            </td>

            <td className="py-4 px-4 text-center min-w-[120px]">
              <span className="text-black font-semibold">
                {" "}
                $
                {product.offertype
                  ? (
                      product.price -
                      product.price * (product.offertype / 100)
                    ).toFixed(2)
                  : product.price}
              </span>
            </td>

            <td className="py-4 px-4 text-center min-w-[120px]">
              <span className="text-black font-semibold">
                $
                {product.offertype
                  ? (
                      (product.price -
                        product.price * (product.offertype / 100)) *
                      (cartQuantities[product.product_id] || 1)
                    ).toFixed(2)
                  : (
                      product.price * (cartQuantities[product.product_id] || 1)
                    ).toFixed(2)}
              </span>{" "}
              {/* Display total price for product */}
            </td>

            <td className="py-4 px-4 text-center min-w-[80px]">
              <button
                className="text-primary hover:text-gray-800 text-2xl"
                onClick={() => handleDelete(product.product_id)} // Delete product
              >
                <FaTrashAlt />
              </button>
            </td>
          </tr>
        ))}
        {isOpen && (
          <Notification
            message={notification.message}
            type={notification.type}
          />
        )}
      </>
    );
};

export default CartProduct;
