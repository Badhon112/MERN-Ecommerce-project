import React from "react";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <>
      <div className=" dark:bg-gray-800">
        <div className="max-w-2xl mx-auto text-white py-3">
          <div className="text-center">
            <h3 className="text-3xl mb-3"> Download our Ecommerce app </h3>
            <p> Stay fit. All day, every day. </p>
            <div className="flex justify-center my-4">
              <div className="flex items-center rounded-lg px-4 w-52 mx-2">
                <Link
                  to="/about"
                  className="  text-white  rounded md:bg-transparent  md:p-0 "
                  aria-current="page"
                >
                  About
                </Link>
              </div>
              <div className="flex items-center  rounded-lg px-4 w-44 mx-2">
                <Link
                  to="/contact"
                  className=" text-white  rounded md:bg-transparent  md:p-0 "
                  aria-current="page"
                >
                  Contact
                </Link>
              </div>
              <div className="flex items-center  rounded-lg px-4  w-44 mx-2">
                <Link
                  to="/policy"
                  className=" text-white  rounded md:bg-transparent  md:p-0 "
                  aria-current="page"
                >
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
            <p className="order-2 md:order-1 mt-8 md:mt-0">
              {" "}
              &copy; Beautiful Footer, 2021.{" "}
            </p>
            <div className="order-1 md:order-2">
              <span className="px-2">About us</span>
              <span className="px-2 border-l">Contact us</span>
              <span className="px-2 border-l">Privacy Policy</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
