import React from "react";
import Layout from "../../components/layout/Layout";
import AdminMenu from "../../components/layout/AdminMenu";
import { useAuth } from "../../context/auth";

export default function AdminDashBoard() {
  const [auth] = useAuth();
  return (
    <Layout>
     <span>
        <AdminMenu />
     </span>
      
      <div className="flex ">
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
          <div className="flex justify-end px-4 pt-4"></div>
          <div className="flex flex-col items-center pb-10">
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-black">
              Admin name : {auth?.user?.name}
            </h5>
            <div className="flex space-x-3">
              <span className="text-sm text-black">
                Admin Email :{auth?.user?.email}
              </span>
              <span className="text-sm text-black">
                Admin Contact :  {auth?.user?.phone}
              </span>
            </div>
            <div className="flex mt-4 md:mt-6">
              <a
                href="#"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add friend
              </a>
              <a
                href="#"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700 ms-3"
              >
                Message
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
