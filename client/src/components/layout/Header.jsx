import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";
export default function Header() {
  const [auth, setAuth] = useAuth();
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("token");
    toast.success("LogOut Succefull");
  };
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
            to={"/cart"}
            className="text-black focus:ring-4 focus:outline-none  font-bold  rounded-lg text-lg px-4 py-2 text-center "
          >
            Cart (0)
          </Link>
          {!auth.user ? (
            <>
              <Link
                to={"/login"}
                className="text-black focus:ring-4 focus:outline-none  font-bold  rounded-lg text-lg px-4 py-2 text-center "
              >
                Login
              </Link>
              <Link
                to={"/register"}
                className="text-black focus:ring-4 focus:outline-none  font-bold  rounded-lg text-lg px-4 py-2 text-center "
              >
                Register
              </Link>
            </>
          ) : (
            <>
              <Link
                to={"/login"}
                onClick={handleLogout}
                className="text-black focus:ring-4 focus:outline-none  font-bold  rounded-lg text-lg px-4 py-2 text-center "
              >
                LogOut
              </Link>
              <Link
                to={`/dashboard/${auth?.user?.role === 1 ? "admin" : "user"}`}
                className="text-black focus:ring-4 focus:outline-none  font-bold  rounded-lg text-lg px-4 py-2 text-center "
              >
                Dashboard
              </Link>
              <Link
                to={"/profile"}
                className="text-black focus:ring-4 focus:outline-none  font-bold  rounded-lg text-lg px-4 py-2 text-center "
              >
                {auth?.user?.name}
              </Link>
            </>
          )}
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        ></div>
      </div>
    </nav>
  );
}
