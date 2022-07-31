import { useState } from "react";
import { useProductsAction } from "../../components/Providers/ProductsProvider";
import styles from "./Search.module.css";

const SearchBar = ({ filter }) => {
  const dispatch = useProductsAction();
  const [value, setValue] = useState("");

  const changeHandler = (e) => {
    setValue(e.target.value);
    dispatch({ type: "filter", selectedOption: filter });
    dispatch({ type: "search", value: e.target.value });
  };

  return (
    <div className={styles.searchContent}>
      <h3>Search for</h3>
      <input
        className={styles.searchInput}
        type="text"
        placeholder="search for..."
        onChange={(e) => changeHandler(e)}
        value={value}
      />
    </div>
  );
};

export default SearchBar;
