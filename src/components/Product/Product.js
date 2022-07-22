import styles from "./product.module.css";
import { BiTrash } from "react-icons/bi";
import { BiPlus } from "react-icons/bi";
import { BiMinus } from "react-icons/bi";

const Product = ({
  onChange,
  onDecrement,
  onDelete,
  onIncrement,
  title,
  price,
  quantity,
}) => {
  return (
    <div className={styles.product}>
      <p>{title} course</p>
      <p>{price}</p>
      <input type="text" value={title} onChange={onChange} />

      {quantity === 1 ? (
        <button className={styles.delete} onClick={onDelete}>
          <BiTrash />
        </button>
      ) : (
        <button className={styles.decrement} onClick={onDecrement}>
          <BiMinus />
        </button>
      )}

      <span className={styles.quantity}>{quantity}</span>

      <button className={styles.increment} onClick={onIncrement}>
        <BiPlus />
      </button>
    </div>
  );
};

export default Product;
