import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "../../api/axios";
import { useLoader } from "../../contexts/Loader/LoaderProvider";
import { useNotification } from "../../contexts/Notification/NotificationProvider";
import Notification from "../Notification/Notification";

const ViewProduct = () => {
  const [product, setProduct] = useState({});
  const [isAvailable, setIsAvailable] = useState(false);
  const [discount, setDiscount] = useState(0);
  const [isOffer, setIsOffer] = useState(false);
  const { showLoader, hideLoader } = useLoader();
  const { id } = useParams();
  const { isOpen, notification, showNotification } = useNotification();

  const navigate = useNavigate();
  // Add product to cart in localStorage with an initial quantity of 1
  const addToCart = () => {
    const token = localStorage.getItem("token");
    if (!token) navigate("/login");
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      const updatedCart = [...user.cart]; // Clone the current cart

      // Check if the product is already in the cart
      const productInCart = updatedCart.find(
        (item) => item.id === product.product_id
      );

      if (!productInCart) {
        updatedCart.push({ id: product.product_id, quantity: 1 }); // Add new product with quantity 1
        user.cart = updatedCart;
        localStorage.setItem("user", JSON.stringify(user));
        showNotification("Product added to cart!", "success");
      } else {
        showNotification("Product is already in the cart!", "error");
      }
    } else {
      showNotification("No user found!", "error");
    }
  };

  // Add product to wishlist in localStorage
  const addToWishlist = () => {
    const token = localStorage.getItem("token");
    if (!token) navigate("/login");
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      const updatedWishlist = [...user.wishlist]; // Clone the current wishlist

      // Check if the product is already in the wishlist
      if (!updatedWishlist.includes(product.product_id)) {
        updatedWishlist.push(product.product_id); // Add the product ID to the wishlist
        user.wishlist = updatedWishlist;
        localStorage.setItem("user", JSON.stringify(user));
        showNotification("Product added to wishlist!", "success");
      } else {
        showNotification("Product is already in the wishlist!", "error");
      }
    } else {
      showNotification("No user found!", "error");
    }
  };

  const fetchProducts = async () => {
    try {
      showLoader();
      const fetchProduct = await axios.get(`global/product/${id}`);
      if (fetchProduct.data.isavailable) {
        setIsAvailable(true);
      } else {
        setIsAvailable(false);
      }
      if (fetchProduct.data.offertype) {
        setDiscount(
          (fetchProduct.data.price -
            fetchProduct.data.price * (fetchProduct.data.offertype / 100)).toFixed(2)
        );
        setIsOffer(true);
      }
      setProduct(fetchProduct.data);
    } catch (err) {
      console.log(err.response.data.msg);
    } finally {
      hideLoader();
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="container md:grid md:grid-cols-2 gap-6 my-10 xs:flex xs:flex-col">
      <div>
        <img src={product.imageurl} alt={product.name} className="w-full" />
      </div>

      <div>
        <h2 className="text-3xl font-medium uppercase mb-2">{product.name}</h2>
        <div className="space-y-2">
          <p className="text-gray-800 font-semibold space-x-2">
            <span>Availability: </span>
            {isAvailable && <span className="text-green-600">In Stock</span>}
            {!isAvailable && <span className="text-red-600">Out of Stock</span>}
          </p>

          <p className="space-x-2">
            <span className="text-gray-800 font-semibold">Category: </span>
            <span className="text-gray-600">{product.category}</span>
          </p>
        </div>
        <div className="flex items-baseline mb-1 space-x-2 font-roboto mt-4">
          {isOffer ? (
            <>
              <p className="text-xl text-primary font-semibold">${discount}</p>
              <p className="text-base text-gray-400 line-through">
                ${product.price}
              </p>
            </>
          ) : (
            <p className="text-xl text-primary font-semibold">
              ${product.price}
            </p>
          )}
        </div>

        <p className="mt-4 text-gray-600 text-justify">{product.description}</p>

        {isAvailable && (
          <div className="mt-6 flex gap-3 border-b border-gray-200 pb-5 pt-5">
            <button
              className="bg-primary border border-primary text-white xs:p-2 xs:font-x sm:px-8 sm:py-2 xs:text-sm sm:text-17 font-medium rounded uppercase flex items-center gap-2 hover:bg-transparent hover:text-primary transition"
              onClick={addToCart}
            >
              <i className="fa-solid fa-bag-shopping"></i> Add to cart
            </button>
            <button
              className="border border-gray-300 text-gray-600 xs:p-2 xs:font-x sm:px-8 sm:py-2 xs:text-sm sm:text-17 font-medium rounded uppercase flex items-center gap-2 hover:text-primary transition"
              onClick={addToWishlist}
            >
              <i className="fa-solid fa-heart"></i> Wishlist
            </button>
          </div>
        )}
      </div>
      {isOpen && (
        <Notification message={notification.message} type={notification.type} />
      )}
    </div>
  );
};

export default ViewProduct;
