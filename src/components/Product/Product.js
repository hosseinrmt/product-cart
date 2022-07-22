import styles from "./product.module.css";
import { BiTrash } from "react-icons/bi";
import { BiPlus } from "react-icons/bi";
import { BiMinus } from "react-icons/bi";

const Product = (props) => {
  return (
    <div className={styles.product}>
      <p>{props.title} course</p>
      <p>{props.price}</p>
      <input type="text" value={props.title} onChange={props.onChange} />

      {props.quantity === 1 ? (
        <button className={styles.delete} onClick={props.onDelete}>
          <BiTrash />
        </button>
      ) : (
        <button className={styles.decrement} onClick={props.onDecrement}>
          <BiMinus />
        </button>
      )}

      <span className={styles.quantity}>{props.quantity}</span>

      <button className={styles.increment} onClick={props.onIncrement}>
        <BiPlus />
      </button>
    </div>
  );
};

export default Product;
