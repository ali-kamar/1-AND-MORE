// src/components/OfferCarousel.jsx
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const OfferCarousel = ({ offers }) => {
  const swiperRef = useRef(null);

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev(); // Access the swiper instance correctly
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext(); // Access the swiper instance correctly
    }
  };

  return (
    <div className="offers-section my-10 relative">
      <h2 className="text-3xl font-bold mb-4 text-center flex items-center justify-center space-x-2">
        <span>🔥</span>
        <span>Offers</span>
        <span>🔥</span>
      </h2>
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)} // Store the swiper instance
        spaceBetween={10}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {offers.map((offer) => (
          <SwiperSlide
            key={offer.product_id}
            className="p-4 bg-white shadow rounded"
          >
            <div className="relative">
              <img
                src={offer.imageurl}
                alt={offer.name}
                className="w-full object-cover mb-4"
              />
            </div>
            <h3 className="text-lg font-semibold capitalize">{offer.name}</h3>
            <div className="flex items-baseline mb-1 space-x-2">
              <p className="text-xl text-primary font-semibold">
                ${offer.discountedPrice}
              </p>
              <p className="text-sm text-gray-400 line-through">
                ${offer.price}
              </p>
            </div>

            <a
              href={`/product/${offer.product_id}`}
              className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition mt-2"
            >
              View
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-primary text-white rounded-full p-2 shadow hover:bg-secondary transition"
        style={{ zIndex: 10 }} // Ensure it's above other elements
      >
        &lt;
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-primary text-white rounded-full p-2 shadow hover:bg-secondary transition"
        style={{ zIndex: 10 }} // Ensure it's above other elements
      >
        &gt;
      </button>
    </div>
  );
};

export default OfferCarousel;
