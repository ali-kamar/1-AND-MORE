import React, { useEffect, useState } from "react";
import { useProduct } from "../../contexts/Product/ProductProvider";

const Wishlist = () => {
  const [wishlistProducts, setWishlistProducts] = useState([]);
  const { products } = useProduct(); // Assuming you already have all products in your context

  useEffect(() => {
    // Get user and wishlist from localStorage
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.wishlist) {
      const wishlistProductIds = user.wishlist;

      // Filter products that are in the user's wishlist
      const wishlistItems = products.filter((product) =>
        wishlistProductIds.includes(product.product_id)
      );
      setWishlistProducts(wishlistItems);
    }
  }, [products]);

  if (wishlistProducts.length === 0) {
    return <p className="text-center">Your wishlist is empty.</p>;
  }

  return (
    <div className="space-y-4 sm:container pt-4 pb-16 xs:px-1">
      {wishlistProducts.map((product) => (
        <div
          key={product.product_id}
          className="flex items-center justify-between border gap-6 p-4 border-gray-200 rounded"
        >
          <div className="xs:w-28 sm:w-28">
            <img src={product.imageurl} alt={product.name} className="w-full" />
          </div>
          <div className="w-1/3">
            <h2 className="text-gray-800 xs:text-xs sm:text-xl font-medium uppercase">
              {product.name}
            </h2>
            <p className="text-gray-500 xs:text-xs sm:text-sm">
              Availability:
              <span
                className={
                  product.isavailable ? "text-green-600" : "text-red-600"
                }
              >
                {product.isavailable ? "In Stock" : "Out of Stock"}
              </span>
            </p>
          </div>
          <div className="text-primary xs:text-base sm:text-lg font-semibold">
            $
            {product.offertype
              ? (
                  product.price -
                  product.price * (product.offertype / 100)
                ).toFixed(2)
              : product.price}
          </div>
          <button
            className={`xs:px-3 xs:py-1 sm:px-6 sm:py-2 text-center xs:text-xs sm:text-sm text-white border border-primary rounded ${
              product.isavailable
                ? "bg-primary hover:bg-transparent hover:text-primary transition"
                : "bg-red-400 cursor-not-allowed"
            }`}
          >
            {product.isavailable ? "Add to Cart" : "Out of Stock"}
          </button>

          <div className="text-gray-600 cursor-pointer hover:text-primary">
            <i className="fa-solid fa-trash"></i>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Wishlist;
