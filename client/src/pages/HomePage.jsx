import React from "react";
import Layout from "../components/layout/Layout";
import { useAuth } from "../context/auth";

export default function HomePage() {
  const [auth, setAuth] = useAuth();
  return (
    <Layout title={"Best Offer"}>
      Home Page
      <pre>{JSON.stringify(auth, null, 4)}</pre>
    </Layout>
  );
}
