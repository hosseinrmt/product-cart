import React from "react";
import Product from "../Product/Product";
import { useProducts, useProductsAction } from "../Providers/ProductsProvider";
import styles from "./ProductList.module.css";

const ProductList = () => {
  const products = useProducts();
  const dispatch = useProductsAction();

  const renderProduct = () => {
    if (products.length === 0) return <div>there is no product in cart</div>;

    return (
      <div className={styles.productList}>
        {products.map((product) => {
          return (
            <Product
              key={product.id}
              title={product.title}
              price={product.price}
              quantity={product.quantity}
              onDelete={() => dispatch({ type: "remove", id: product.id })}
              onIncrement={() =>
                dispatch({ type: "increment", id: product.id })
              }
              onDecrement={() =>
                dispatch({ type: "decrement", id: product.id })
              }
            />
          );
        })}
      </div>
    );
  };

  return (
    <div>
      {!products.length && <div>go to shopping!</div>}
      {renderProduct()}
    </div>
  );
};

export default ProductList;
