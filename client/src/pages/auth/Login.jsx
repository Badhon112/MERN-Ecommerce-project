import React, { useState } from "react";
import Layout from "../../components/layout/Layout";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from 'axios'
import { useAuth } from "../../context/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth,setAuth]=useAuth()
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`http://localhost:8080/api/v1/auth/login`, {
        email,
        password,
      });
      if (res.data.success) {
        toast(res.data.message);
        setAuth({
          ...auth,
          user:res.data.user,
          token:res.data.token
        })
        localStorage.setItem('auth',JSON.stringify(res.data))
        navigate("/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <Layout title="Login">
      <section className="bg-gray-50 dark:bg-white ">
        <div className="flex flex-col items-center justify-center px-6 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-black rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-white dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-gray-900">
                Create an account
              </h1>
              <form
                className="space-y-4 md:space-y-6"
                action="#"
                onSubmit={handleSubmit}
              >
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter email"
                    required={true}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required={true}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full text-white bg-blue-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Login
                </button>
                <p className="text-sm font-light text-gray-900 dark:text-gray-900">
                  Dont,t have an account?{" "}
                  <Link
                    to="/"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Register account
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
