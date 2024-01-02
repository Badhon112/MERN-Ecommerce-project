import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout(props) {
  return (
    <>
      <Header />
      <main className="min-h-[80vh]">{props.children}</main>
      <Footer/>
    </>
  );
}
