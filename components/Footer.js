import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="text-gray-600 body-font -mt-24">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <Link href={"/"}>
              <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                <Image
                  className="lg:hover:scale-105 transform lg:transition lg:duration-500"
                  src="/mithanSweets.png"
                  width={256}
                  height={64}
                  alt=""
                />
              </a>
            </Link>
            <p className="mt-2 text-sm px-6 text-gray-500">
              Where the taste starts!!
            </p>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link href={"/categories/pizza"}>
                    <a className=" text-gray-600 hover:lg:translate-x-2 transform lg:transition lg:duration-700 hover:text-gray-900">
                      Pizzas
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href={"/categories/burger"}>
                    <a className=" text-gray-600 hover:lg:translate-x-2 transform lg:transition lg:duration-700 hover:text-gray-900">
                      Burgers
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href={"/categories/italian"}>
                    <a className="text-gray-600 hover:lg:translate-x-2 transform lg:transition lg:duration-700 hover:text-gray-900">
                      Italian
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href={"/categories/noodles"}>
                    <a className="text-gray-600 hover:lg:translate-x-2 transform lg:transition lg:duration-700 hover:text-gray-900">
                      Noodles
                    </a>
                  </Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                CUSTOMER SERVICES
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link href={"/contact"}>
                    <a className="text-gray-600 hover:text-gray-800">Contact us</a>
                  </Link>
                </li>
                <li>
                  <Link href={"/about"}>
                    <a className="text-gray-600 hover:text-gray-800">About us</a>
                  </Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                POLICIES
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Terms and Conditions
                  </a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="bg-gray-100">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-500 text-sm text-center sm:text-left">
              © 2020 MithanSweets —
              <a
                href="https://twitter.com/knyttneve"
                rel="noopener noreferrer"
                className="text-gray-600 ml-1"
                target="_blank"
              >
                All Rights Reserved
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
