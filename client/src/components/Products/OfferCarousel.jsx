// src/components/OfferCarousel.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const OfferCarousel = ({ offers }) => {
  return (
    <div className="offers-section my-10">
      <h2 className="text-3xl font-bold mb-4 text-center flex items-center justify-center space-x-2">
        <span>🔥</span>
        <span>Offers</span>
        <span>🔥</span>
      </h2>
      <Swiper
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
                className="w-full h-40 object-cover mb-4"
              />
            </div>
            <h3 className="text-lg font-semibold capitalize">{offer.name}</h3>
            <p className="text-xl text-primary font-semibold">
              ${offer.discountedPrice}
            </p>
            <a
              href={`/product/${offer.product_id}`}
              className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition mt-2"
            >
              View
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OfferCarousel;
