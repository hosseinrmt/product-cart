import React, { Component } from "react";
import Product from "../Product/Product";
import styles from "./ProductList.module.css";

class ProductList extends Component {
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

  renderProduct = () => {
    if (this.state.products.length === 0)
      return <div>there is no product in cart</div>;

    return (
      <div className={styles.productList}>
        {this.state.products.map((product) => {
          return (
            <Product
              key={product.id}
              title={product.title}
              price={product.price}
              onChange={(e) => this.changeHandler(e, product.id)}
              onIncrement={() => this.incrementHandler(product.id)}
              quantity={product.quantity}
              onDecrement={() => this.decrementHandler(product.id)}
              onDelete={() => this.deleteHandler(product.id)}
            />
          );
        })}
      </div>
    );
  };

  render() {
    return (
      <div>
        {!this.state.products.length && <div>go to shopping!</div>}
        {this.renderProduct()}
      </div>
    );
  }
}

export default ProductList;
