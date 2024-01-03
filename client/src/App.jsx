import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy";
import PageNotFound from "./pages/PageNotFound";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import PrivateRoute from "./components/Routes/PrivateRoute";
import ForgotPassword from "./pages/auth/ForgotPassword";
import AdminRoute from './components/Routes/AdminRoute'
import AdminDashBoard from "./pages/Admin/AdminDashBoard";
import CreateCategory from "./pages/Admin/CreateCategory";
import CreateProduct from "./pages/Admin/CreateProduct";
import AllUsers from "./pages/Admin/AllUsers";
import UserDashboard from "./pages/user/UserDashboard";
import Profile from "./pages/user/Profile";
import Orders from "./pages/user/Orders";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/dashboard/" element={<PrivateRoute />}>
        <Route path="user" element={<UserDashboard />} />
        <Route path="user/profile" element={<Profile />} />
        <Route path="user/orders" element={<Orders />} />
      </Route>
      <Route path="/dashboard/" element={< AdminRoute/>}>
        <Route path="admin" element={<AdminDashBoard />} />
        <Route path="admin/create-category" element={<CreateCategory />} />
        <Route path="admin/create-product" element={<CreateProduct />} />
        <Route path="admin/users" element={<AllUsers />} />
      </Route>
      <Route path="/about" element={<About />} />
      <Route path="/forgot-password" element={<ForgotPassword/>}/>
      <Route path="/contact" element={<Contact />} />
      <Route path="/policy" element={<Policy />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/*" element={<PageNotFound />} />
    </Routes>
  );
}
