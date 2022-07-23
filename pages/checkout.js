import React from "react";
import Link from "next/link";
import {
  AiOutlinePlusCircle,
  AiOutlineMinusCircle,
} from "react-icons/ai";

const Checkout = ({ cart, addToCart, removeFromCart, subTotal }) => {
    
    console.log(subTotal)
  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 pb-24 pt-12 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Checkout
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Please check the details carefully
          </p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-1/3">
              <div className="relative">
                <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-1/3">
              <div className="relative">
                <label htmlFor="phone" className="leading-7 text-sm text-gray-600">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  pattern="[0-9]{10}"
                  required
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-1/3">
              <div className="relative">
                <label htmlFor="table" className="leading-7 text-sm text-gray-600">
                  Table No.
                </label>
                <input
                  type="number"
                  id="table"
                  name="table"
                  required
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col text-center w-full mt-12 lg:my-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Review Order
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Please check the food items you want to order
            </p>
          </div>
          <div className=" rounded-md sideCartpx-8 py-3">
            <ol className="list-decimal font-semibold text-gray-800">
              {Object.keys(cart).length == 0 && (
                <div className="my-6 text-center">No items in the cart!!</div>
              )}
              {Object.keys(cart).map((k) => {
                return (
                  <li key={k}>
                    <div className="item flex my-5">
                      <div className="font-semibold">{cart[k].name}</div>
                      <div className="w-1/3 font-semibold justify-center items-center flex text-lg  ">
                        <AiOutlineMinusCircle
                          onClick={() => {
                            removeFromCart(k, 1, cart[k].price, cart[k].name);
                          }}
                          className="text-orange-500 cursor-pointer"
                        />
                        <span className="mx-2 text-sm">{cart[k].quantity}</span>
                        <AiOutlinePlusCircle
                          onClick={() => {
                            addToCart(k, 1, cart[k].price, cart[k].name);
                          }}
                          className="text-orange-500 cursor-pointer"
                        />
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>
            <span className="total font-bold">Subtotal: {subTotal}</span>
          </div>
          <div className="self-center py-4">
            <Link href={"/checkout"}>
              <button className=" mx-2 cursor-pointer font-medium items-center flex text-white bg-orange-500 border-0 px-8 focus:outline-none hover:bg-orange-600 rounded text-sm">
                Pay
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
