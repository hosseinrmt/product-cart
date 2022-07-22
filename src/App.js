import React, { Component } from "react";
import "./App.css";
import ProductList from "./components/ProductList/ProductList";
import Navbar from "./components/Navbar/Navbar";

class App extends Component {
  state = {
    products: [
      { title: "react.js", quantity: 1, price: "59 $", id: 1 },
      { title: "Vue.js", quantity: 1, price: "89 $", id: 2 },
      { title: "Node.js", quantity: 1, price: "29 $", id: 3 },
    ],
  };

  deleteHandler = (id) => {
    const filteredProducts = this.state.products.filter((p) => p.id !== id);
    this.setState({ products: filteredProducts });
  };

  incrementHandler = (id) => {
    const products = [...this.state.products];
    const incrementedProduct = products.find((p) => p.id === id);
    incrementedProduct.quantity++;
    this.setState({ products });
  };

  decrementHandler = (id) => {
    const products = [...this.state.products];
    const incrementedProduct = products.find((p) => p.id === id);
    incrementedProduct.quantity--;
    this.setState({ products });
  };

  changeHandler = (event, id) => {
    const products = [...this.state.products];
    const changeProduct = products.find((p) => p.id === id);
    changeProduct.title = event.target.value;
    this.setState({ products });
  };

  render() {
    return (
      <div className="container">
        <Navbar totalItems={this.state.products.length} />
        <ProductList
          products={this.state.products}
          onDelete={this.deleteHandler}
          onDecrement={this.decrementHandler}
          onIncrement={this.incrementHandler}
          onChange={this.changeHandler}
        />
      </div>
    );
  }
}

export default App;
