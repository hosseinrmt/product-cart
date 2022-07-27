import React, { useContext, useReducer } from "react";
import { productsData } from "../../db/products";

const ProductsContext = React.createContext();
const ProductsContextDispatcher = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "increment": {
      const index = state.findIndex((item) => item.id === action.id);
      const product = { ...state[index] };
      product.quantity++;
      const updatedProducts = [...state];
      updatedProducts[index] = product;
      return updatedProducts;
    }

    case "decrement": {
      const index = state.findIndex((item) => item.id === action.id);
      const product = { ...state[index] };
      product.quantity--;
      const updatedProducts = [...state];
      updatedProducts[index] = product;
      return updatedProducts;
    }

    case "remove": {
      const filteredProducts = state.filter((p) => p.id !== action.id);
      return filteredProducts;
    }

    case "filter":
      if (action.selectedOption.value === "") {
        return productsData;
      } else {
        const filteredProducts = productsData.filter((p) =>
          p.availableSizes.includes(action.selectedOption.value)
        );
        return filteredProducts;
      }
  }
};

const ProductsProvider = ({ children }) => {
  const [products, dispatch] = useReducer(reducer, productsData);

  return (
    <ProductsContext.Provider value={products}>
      <ProductsContextDispatcher.Provider value={dispatch}>
        {children}
      </ProductsContextDispatcher.Provider>
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;

export const useProducts = () => useContext(ProductsContext);
export const useProductsAction = () => useContext(ProductsContextDispatcher);
