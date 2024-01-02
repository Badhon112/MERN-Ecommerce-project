import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [navbar, setNavbar] = useState("");
  window.addEventListener("mouseup", () => {});
  return (
    <nav className="bg-white w-full z-20 top-0 start-0 border-b border-gray-200  ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to={"/"}
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">
            Ecommerce
          </span>
        </Link>
        <div className="flex md:order-2 md:space-x-0 rtl:space-x-reverse ">
          <Link
            to={"/"}
            className="text-black focus:ring-4 focus:outline-none  font-bold  rounded-lg text-lg px-4 py-2 text-center "
          >
            Home
          </Link>
          <Link
            to={"/category"}
            className="text-black focus:ring-4 focus:outline-none  font-bold  rounded-lg text-lg px-4 py-2 text-center "
          >
            Category
          </Link>
          <Link
            to={"/register"}
            className="text-black focus:ring-4 focus:outline-none  font-bold  rounded-lg text-lg px-4 py-2 text-center "
          >
            Register
          </Link>
          <Link
            to={"/login"}
            className="text-black focus:ring-4 focus:outline-none  font-bold  rounded-lg text-lg px-4 py-2 text-center "
          >
            Login
          </Link>
          <Link
            to={"/cart"}
            className="text-black focus:ring-4 focus:outline-none  font-bold  rounded-lg text-lg px-4 py-2 text-center "
          >
            Cart (0)
          </Link>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        ></div>
      </div>
    </nav>
  );
}
