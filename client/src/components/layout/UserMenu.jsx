import React from 'react'
import { NavLink } from 'react-router-dom'

export default function UserMenu() {
  return (
    <>
      <h2 className="mb-2 text-2xl font-semibold text-gray-900 dark:text-black">
        User Panel
      </h2>
      <ol className="max-w-md space-y-1 text-gray-900 list-decimal list-inside dark:text-gray-900">
        <li>
          <NavLink
            to="/dashboard/user/profile"
            className="font-semibold text-gray-900 dark:text-black"
          >
           Profile
          </NavLink>{" "}
        </li>
        <li>
          <NavLink
            to="/dashboard/user/orders"
            className="font-semibold text-gray-900 dark:text-black"
          >
            Orders
          </NavLink>{" "}
        </li>
      </ol>
    </>
  )
}
