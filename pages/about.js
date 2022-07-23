/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";

const About = () => {
  return (
    <div className="lg:flex bg-orange-50 mb-10 mt-10 w-3/4 lg:ml-52 ml-12 justify-between items-center px-5 py-3 rounded-lg">
      <div className="text-center">
        <h1 className="text-3xl font-bold">About Us</h1>
        <h3 className="text-lg font-semibold mt-3">
          We are a SWEETS and FAST-FOOD shop established since 1890 with top
          class quality on affordable price.
        </h3>
        <ul>
          <li className="mt-3 font-medium underline">100% Pure and fresh Sweets</li>
          <li className="mt-3 font-medium underline">Affordable Price</li>
          <li className="mt-3 font-medium underline">On Point Order Ready</li>
        </ul>
        <h3 className="mt-3 font-medium">
          We have our main focus on quality instead of quantity. Things are made<br/>
          and sold, We do not pile things so you will get pure and fresh items<br/>
          every time.
        </h3>
      </div>
      <div>
        <img
          src={
            "https://www.mitthansweets.com/static/mitthanSweetAssests/images/aboutUsImg.jpg"
          }
          className={"w-72 rounded-lg mt-5 lg:mt-0"}
        />
      </div>
    </div>
  );
};

export default About;
