import styles from "./FilterProducts.module.css";
import Select from "react-select";
import { useState } from "react";
import { useProductsAction } from "../Providers/ProductsProvider";

const options = [
  { value: "", label: "All" },
  { value: "S", label: "S" },
  { value: "M", label: "M" },
  { value: "L", label: "L" },
  { value: "XL", label: "XL" },
];

const Filter = () => {
  const [value, setValue] = useState("");

  const changeHandler = (selectedOption) => {
    console.log(selectedOption);
    dispatch({ type: "filter", selectedOption });
    setValue(selectedOption);
  };

  const dispatch = useProductsAction();

  return (
    <div className={styles.filter}>
      <h2>filter products based on :</h2>
      <div>
        order by
        <Select options={options} onChange={changeHandler} value={value} />
      </div>
    </div>
  );
};

export default Filter;
