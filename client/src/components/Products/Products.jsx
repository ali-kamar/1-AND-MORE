// src/components/Products.jsx
import React, { useState, useEffect } from "react";
import Searchbar from "./Searchbar";
import { useProduct } from "../../contexts/Product/ProductProvider";
import OfferCarousel from "./OfferCarousel";

const Products = () => {
  const { products, error } = useProduct();
  const [priceMap, setPriceMap] = useState({});
  const [offerProducts, setOfferProducts] = useState([]);

  useEffect(() => {
    // Update new prices after products are fetched
    const newPriceMap = {};
    const offers = [];

    products.forEach((product) => {
      let discount = product.price;
      if (product.offertype) {
        discount = product.price * (1 - product.offertype / 100);
        newPriceMap[product.product_id] = discount.toFixed(2);
        offers.push({
          ...product,
          discountedPrice: discount.toFixed(2),
        });
      }
    });

    setPriceMap(newPriceMap);
    setOfferProducts(offers);
  }, [products]);

  return (
    <div className="my-10">
      <OfferCarousel offers={offerProducts} />
      <Searchbar />


      <div className="grid lg:grid-cols-4 md:grid-cols-3 xs:grid-cols-2 gap-6 mt-10 p-4">
        {products.map((product) => (
          <div
            key={product.product_id}
            className="bg-white shadow rounded overflow-hidden group"
          >
            <div className="relative">
              <img
                src={product.imageurl}
                alt={product.name}
                className="w-full"
              />
            </div>
            <div className="pt-4 pb-3 px-4">
              <a href={`/product/${product.product_id}`}>
                <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                  {product.name}
                </h4>
              </a>
              <div className="flex items-baseline mb-1 space-x-2">
                <p className="text-xl text-primary font-semibold">
                  ${priceMap[product.product_id] || product.price}
                </p>
                {product.offertype && (
                  <p className="text-sm text-gray-400 line-through">
                    ${product.price}
                  </p>
                )}
              </div>
            </div>
            <a
              href={`/product/${product.product_id}`}
              className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition"
            >
              View
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
