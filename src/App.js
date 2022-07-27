import React, { useState } from "react";
import "./App.css";
import Filter from "./components/Filter/FilterProducts";
import Wrapper from "./components/hoc/Wrapper";
import Navbar from "./components/Navbar/Navbar";
import ProductList from "./components/ProductList/ProductList";
import ProductsProvider from "./components/Providers/ProductsProvider";

const App = () => {
  return (
    <>
      <ProductsProvider>
        <Navbar />
        <Filter />
        <ProductList />
      </ProductsProvider>
    </>
  );
};

export default Wrapper(App, "container");
