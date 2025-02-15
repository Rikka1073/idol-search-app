import { useState } from "react";

import "./App.css";
import Category from "./components/Category";
import Layout from "./components/Layout";
import PageRoute from "./router/PageRoute";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Layout>
        <Header />
        <Category />
        <PageRoute />
      </Layout>
    </>
  );
}

export default App;
