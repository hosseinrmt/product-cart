import styles from "./FilterProducts.module.css";
import Select from "react-select";
import { useState } from "react";
import { useProductsAction } from "../Providers/ProductsProvider";
import SearchBar from "../../common/Search/Search";

const sizeOptions = [
  { value: "", label: "All" },
  { value: "S", label: "S" },
  { value: "M", label: "M" },
  { value: "L", label: "L" },
  { value: "XL", label: "XL" },
];

const sortOptions = [
  { value: "highest", label: "Highest price" },
  { value: "lowest", label: "Lowest price" },
];

const Filter = () => {
  const [value, setValue] = useState("");
  const [sort, setSort] = useState("");

  const changeHandler = (selectedOption) => {
    dispatch({ type: "filter", selectedOption });
    dispatch({ type: "sort", selectedOption: sort });
    setValue(selectedOption);
  };

  const sortHandler = (selectedOption) => {
    dispatch({ type: "sort", selectedOption });
    setSort(selectedOption);
  };

  const dispatch = useProductsAction();

  return (
    <div className={styles.filterSearch}>
      <SearchBar filter={value} />
      <div className={styles.filter}>
        <h3>filter products based on :</h3>
        <div>
          <Select options={sortOptions} onChange={sortHandler} value={sort} />
        </div>

        <div>
          <Select
            options={sizeOptions}
            onChange={changeHandler}
            value={value}
          />
        </div>
      </div>
    </div>
  );
};

export default Filter;
