import React, { Component } from "react";
import "./App.css";
import ProductList from "./components/ProductList/ProductList";
class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>shopping App</h1>
        <ProductList />
      </div>
    );
  }
}

export default App;
