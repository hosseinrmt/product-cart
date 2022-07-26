import React from "react";
import Product from "../Product/Product";
import { useProducts, useProductsAction } from "../Providers/ProductsProvider";
import styles from "./ProductList.module.css";

const ProductList = () => {
  const products = useProducts();
  const { deleteHandler, incrementHandler, decrementHandler, changeHandler } =
    useProductsAction();

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
              onChange={(e) => changeHandler(e, product.id)}
              onIncrement={() => incrementHandler(product.id)}
              quantity={product.quantity}
              onDecrement={() => decrementHandler(product.id)}
              onDelete={() => deleteHandler(product.id)}
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
