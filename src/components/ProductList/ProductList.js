import React, { Component } from "react";
import Product from "../Product/Product";
import styles from "./ProductList.module.css";

class ProductList extends Component {
  renderProduct = () => {
    const { onChange, onDecrement, onDelete, onIncrement, products } =
      this.props;
    if (products.length === 0) return <div>there is no product in cart</div>;

    return (
      <div className={styles.productList}>
        {products.map((product) => {
          return (
            <Product
              key={product.id}
              title={product.title}
              price={product.price}
              onChange={(e) => onChange(e, product.id)}
              onIncrement={() => onIncrement(product.id)}
              quantity={product.quantity}
              onDecrement={() => onDecrement(product.id)}
              onDelete={() => onDelete(product.id)}
            />
          );
        })}
      </div>
    );
  };

  render() {
    const { products } = this.props;
    return (
      <div>
        {!products.length && <div>go to shopping!</div>}
        {this.renderProduct()}
      </div>
    );
  }
}

export default ProductList;
