import React from "react";
import { NavLink } from "react-router-dom";

export default function AdminMenu() {
  return (
    <>
      <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-black">
        Admin Panel
      </h2>
      <ol className="max-w-md space-y-1 text-gray-900 list-decimal list-inside dark:text-gray-900">
        <li>
          <NavLink
            to="/dashboard/admin/create-category"
            className="font-semibold text-gray-900 dark:text-black"
          >
            Create Category
          </NavLink>{" "}
        </li>
        <li>
          <NavLink
            to="/dashboard/admin/create-product"
            className="font-semibold text-gray-900 dark:text-black"
          >
            Create Product
          </NavLink>{" "}
        </li>
        <li>
          <NavLink
            to="/dashboard/admin/users"
            className="font-semibold text-gray-900 dark:text-black"
          >
            Users
          </NavLink>{" "}
        </li>
      </ol>
    </>
  );
}
