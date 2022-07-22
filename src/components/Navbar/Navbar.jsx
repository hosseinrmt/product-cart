import styles from "./Navbar.module.css";

const Navbar = ({ totalItems }) => {
  return (
    <nav className={styles.nav}>
      <h1>shopping cart</h1>
      <span>{totalItems}</span>
    </nav>
  );
};

export default Navbar;
