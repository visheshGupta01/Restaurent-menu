/* eslint-disable @next/next/no-img-element */
import React from "react";
import Product from "../../models/Product";
import mongoose from "mongoose";
import Link from "next/link";

const Noodles = ({ products }) => {
  return (
    <div className="">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto lg:mx-12">
          <div className="flex flex-wrap -m-4 justify-center">
            {Object.keys(products).length === 0 && (
              <p className="font-bold text-2xl">
                No food items present at the time. Will be available soon. Stay
                tuned!!
              </p>
            )}

            {Object.keys(products).map((item) => {
              return (
                <Link
                  key={products[item]._id}
                  passHref
                  href={`/product/${products[item].slug}`}
                >
                  <div className="lg:w-2/12 h-full lg:mr-10 md:w-1/2 p-4 w-full shadow-lg lg:transform lg:transition lg:duration-500 lg:hover:scale-105">
                    <div className="block relative rounded overflow-hidden">
                      <img
                        alt="ecommerce"
                        className="m-auto md:m-0 object-cover object-center w-full h-full block"
                        src={products[item].img}
                      />
                    </div>
                    <div className="mt-4">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                        {products[item].category}
                      </h3>
                      <h2 className="text-gray-900 title-font text-lg font-medium">
                        {products[item].title}
                      </h2>
                      <p className="mt-1">₹{products[item].price}</p>
                      <button className=" flex mx-auto mt-3 text-white bg-amber-500 border-0 py-1 px-4 focus:outline-none hover:bg-amber-600 rounded text-lg">
                        View
                      </button>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }
  let products = await Product.find({ category: "Noodles" });
  return {
    props: { products: JSON.parse(JSON.stringify(products)) }, // will be passed to the page component as props
  };
}

export default Noodles;
