import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AiOutlineShoppingCart,
  AiFillCloseCircle,
  AiOutlinePlusCircle,
  AiOutlineMinusCircle,
} from "react-icons/ai";
import {BsFillBasketFill} from 'react-icons/bs'
import { useRef } from "react";

const Navbar = ({ cart, addToCart, removeFromCart, subTotal, clearCart }) => {
  const toggleCart = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full");
      ref.current.classList.add("translate-x-0");
    } else if (!ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-0");
      ref.current.classList.add("translate-x-full");
    }
  };

  const ref = useRef();

  return (
    <div className="sticky top-0 bg-white z-10">
      <header className="text-gray-600 body-font shadow-xl">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link href={"/"} className="w-full mb-4 md:mb-0">
            <a>
              <Image
                className="lg:hover:scale-105 transform lg:transition lg:duration-500"
                src={"/mithanSweets.png"}
                height={45}
                width={256}
              />
            </a>
          </Link>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link href={"/categories/burger"}>
              <a className="mr-5 hover:lg:-translate-y-2 transform lg:transition lg:duration-700 hover:text-gray-900">
                Burgers
              </a>
            </Link>
            <Link href={"/categories/italian"}>
              <a className="mr-5 hover:lg:-translate-y-2 transform lg:transition lg:duration-700 hover:text-gray-900">
                Italian
              </a>
            </Link>
            <Link href={"/categories/noodles"}>
              <a className="mr-5 hover:lg:-translate-y-2 transform lg:transition lg:duration-700 hover:text-gray-900">
                Noodles
              </a>
            </Link>
            <Link href={"/categories/pizza"}>
              <a className="mr-5 hover:lg:-translate-y-2 transform lg:transition lg:duration-700 hover:text-gray-900">
                Pizzas
              </a>
            </Link>
          </nav>
          <div className="flex">
            <div className="mr-5 cursor-pointer inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
              <BsFillBasketFill className="mr-3 text-2xl" />
              Orders
            </div>
            <div
              onClick={toggleCart}
              className=" cursor-pointer inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
            >
              <AiOutlineShoppingCart className="mr-3 text-2xl" />
              Cart
            </div>  
          </div>
        </div>
        <div
          ref={ref}
          className={`rounded-md z-10 w-72 overflow-y-scroll sideCart absolute top-0 right-0 bg-orange-50 px-8 py-10 transform transition-transform  ${
            Object.keys(cart).length !== 0
              ? "translate-x-0"
              : "translate-x-full"
          }`}
        >
          <h2 className="font-bold text-xl text-center text-black">
            Shopping Cart
          </h2>
          <span
            onClick={toggleCart}
            className="absolute top-5 right-2 cursor-pointer text-2xl text-gray-600"
          >
            <AiFillCloseCircle />
          </span>
          <ol className="list-decimal font-semibold text-gray-800">
            {Object.keys(cart).length == 0 && (
              <div className="my-6 text-center">No items in the cart!!</div>
            )}
            {Object.keys(cart).map((k) => {
              return (
                <li key={k}>
                  <div className="item flex my-5">
                    <div className="w-2/3 font-semibold">{cart[k].name}</div>
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
          <div className="total font-bold my-2">Subtotal: {subTotal}</div>

          <div className="flex">
            <Link href={"/checkout"}>
              <button className=" mx-2 cursor-pointer font-medium items-center flex text-white bg-orange-500 border-0 px-8 focus:outline-none hover:bg-orange-600 rounded text-sm">
                Order
              </button>
            </Link>
            <button
              onClick={clearCart}
              className=" mx-2 cursor-pointer font-medium items-center flex text-white bg-orange-500 border-0 px-8 focus:outline-none hover:bg-orange-600 rounded text-sm"
            >
              Clear Cart
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
