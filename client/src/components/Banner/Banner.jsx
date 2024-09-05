import React from "react";
import banner from "../../assets/images/banner.JPG";

const Banner = () => {
  return (
    <div className="w-full xs:mt-8 sm:mt-0">
      <img src={banner} alt="banner" className="w-full xs:h-52 sm:h-auto" />
      <div className="mt-12 flex justify-center">
        <a
          href="/shop"
          className="bg-primary border border-primary text-white px-8 py-3 font-medium 
                    rounded-md hover:bg-transparent hover:text-primary"
        >
          Shop Now
        </a>
      </div>
    </div>
  );
};

export default Banner;
