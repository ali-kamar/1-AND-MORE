import React from "react";
import banner from "../../assets/images/banner.JPG";

const Banner = () => {
  return (
    <div className="w-full xs:mt-8 sm:mt-0">
      <img src={banner} alt="banner" className="w-full" />
    </div>
  );
};

export default Banner;
