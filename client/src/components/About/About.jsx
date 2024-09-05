import React from "react";
import about from "../../assets/images/about.jpg";

const About = () => {
  return (
    <div className="container mb-24">
      <h2 className="text-5xl text-center pb-24">About Us</h2>
      <div className="flex justify-between xs:flex-col md:flex-row">
        <div className=" bg-primary rounded p-5 flex items-center">
          <p className="max-w-lg xs:text-sm md:text-l lg:text-17 xl:text-xl text-white text-justify">
            Welcome to <span>1$ AND MORE</span>, where quality meets
            convenience! We are dedicated to providing a diverse selection of
            products that cater to your everyday needs. From cutting-edge
            kitchen appliances to essential tools, home equipment, and luxurious
            bathroom fixtures, we have it all. Our carefully curated collection
            ensures that you can find everything you need under one roof, with a
            focus on delivering the best in both style and functionality. At{" "}
            <span>1$ AND MORE</span>, we're not just a store—we're your partner
            in making life easier and more enjoyable.
          </p>
        </div>

        <div className="md:w-500 h-full xs:w-full">
          <img src={about} alt="" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default About;
