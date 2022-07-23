import React from "react";
import Image from "next/image";

const Contact = () => {
  return (
    <div className="flex flex-col items-center mb-16 drop-shadow-lg lg:p-16 mt-10 bg-yellow-50 w-fit lg:ml-[24rem] rounded-lg">
      <Image src="/logo.png" width={200} height={200} alt="" />
      <h1 className="text-4xl text-center font-bold">
        Give us a chance of solving your problem!!
      </h1>
      <h2 className="text-2xl mt-5 font-semibold">Feel free to ask anything</h2>
      <div className="flex flex-col lg:flex-row mt-10">
        <div className="mt-5">
          <h3 className="font-semibold">Address:</h3>
          <p>
            ABC Colony
            <br />
            XYZ City
          </p>
        </div>
        <div className="lg:ml-96 mb-5 mt-5">
          <h3 className="font-semibold">Customer Support:</h3>
          <p>Call/Whatsapp: +91 99990 88880</p>
          <p>Email: abctest@gmail.com</p>
          <p>Timing: 9:00am - 8:00pm</p>
      </div>
      </div>
    </div>
  );
};

export default Contact;
