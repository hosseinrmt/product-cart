import React, { Component } from "react";
import Product from "../Product/Product";
import styles from "./ProductList.module.css";

class ProductList extends Component {
  state = {
    products: [
      { title: "react.js", price: "89 $", id: 1 },
      { title: "react.js", price: "89 $", id: 2 },
      { title: "react.js", price: "89 $", id: 3 },
    ],
  };

  render() {
    return (
      <div className={styles.productList}>
        {this.state.products.map((product) => {
          return (
            <Product
              title={product.title}
              price={product.price}
              key={product.id}
              click={this.clickHandler}
            />
          );
        })}
      </div>
    );
  }
}

export default ProductList;
