import React, { useContext, useState } from "react";

const ProductsContext = React.createContext();
const ProductsContextDispatcher = React.createContext();

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([
    { title: "react.js", quantity: 1, price: "59 $", id: 1 },
    { title: "Vue.js", quantity: 1, price: "89 $", id: 2 },
    { title: "Node.js", quantity: 1, price: "29 $", id: 3 },
  ]);

  return (
    <ProductsContext.Provider value={products}>
      <ProductsContextDispatcher.Provider value={setProducts}>
        {children}
      </ProductsContextDispatcher.Provider>
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;

export const useProducts = () => useContext(ProductsContext);
export const useProductsAction = () => {
  const setProducts = useContext(ProductsContextDispatcher);
  const products = useContext(ProductsContext);

  const deleteHandler = (id) => {
    const filteredProducts = products.filter((p) => p.id !== id);
    setProducts(filteredProducts);
  };

  const incrementHandler = (id) => {
    const index = products.findIndex((item) => item.id === id);
    const product = { ...products[index] };
    product.quantity++;
    const updatedProducts = [...products];
    updatedProducts[index] = product;
    setProducts(updatedProducts);
  };

  const decrementHandler = (id) => {
    const index = products.findIndex((item) => item.id === id);
    const product = { ...products[index] };
    product.quantity--;
    const updatedProducts = [...products];
    updatedProducts[index] = product;
    setProducts(updatedProducts);
  };

  const changeHandler = (event, id) => {
    const index = products.findIndex((item) => item.id === id);
    const product = { ...products[index] };
    product.title = event.target.value;
    const updatedProducts = [...products];
    updatedProducts[index] = product;
    setProducts(updatedProducts);
  };

  return { deleteHandler, incrementHandler, decrementHandler, changeHandler };
};
