import { useProducts } from "../Providers/ProductsProvider";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const products = useProducts();
  const totalItems = products.length;
  return (
    <nav className={styles.nav}>
      <h1>shopping cart</h1>
      <span className={styles.productsNumber}>{totalItems}</span>
    </nav>
  );
};

export default Navbar;
