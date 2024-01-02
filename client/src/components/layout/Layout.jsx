import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import {Helmet} from 'react-helmet'
export default function Layout({children,title,description,keywords,author}) {
  return (
    <>
    <Helmet>
      <meta charSet="utf-8"/>
      <meta name="description" content={description}/>
      <meta name="keywords" content={keywords}/>
      <meta name="author" content={author}/>
      <title>{title}</title>
    </Helmet>
      <Header />
      <main className="min-h-[80vh]">{children}</main>
      <Footer/>
    </>
  );
}
