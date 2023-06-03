import Image from "next/image";
import { CSSProperties, useState } from "react";
import styles from "../styles/ProductCard.module.css";

const ProductCard = ({
  product,
  addItem,
  style,
}: {
  product: product;
  addItem: ({}: product) => void;
  style: CSSProperties;
}) => {
  const [quantity, setQuantity] = useState(0);

  const decrement = () => {
    setQuantity((num) => {
      if (Number(num) === 0) return 0;
      return Number(num) - 1;
    });
  };
  const increment = () => {
    setQuantity((num) => Number(num) + 1);
  };

  const handleChangeQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target === null) return;
    if (e.target.value === "") return;
    setQuantity(Number(e.target.value));
  };

  const addItems = () => {
    if (quantity === 0) return;
    const productToCart = {
      ...product,
      qty: quantity,
    };

    addItem(productToCart);
  };
  return (
    <div className={styles.card} style={style}>
      <Image
        className={styles.imgProduct}
        src={product.images[0]}
        alt={""}
        height={200}
        width={200}
      />
      <h4 className={styles.h4}>{product.title}</h4>
      <p className={styles.p}>{product.description}</p>
      <p className={styles.p}>$ {product.price}.00</p>
      <div className={styles.qtyContainer}>
        <label className={styles.label} htmlFor="qty">
          Qty:
          <input
            id="qty"
            type="text"
            inputMode="numeric"
            placeholder="0"
            onChange={handleChangeQuantity}
            value={quantity !== 0 ? quantity : ""}
          />
        </label>
        <button className={styles.qtyButton} onClick={increment}>
          +
        </button>
        <button className={styles.qtyButton} onClick={decrement}>
          -
        </button>
      </div>
      <p className={styles.p}>$ {product.price * quantity}.00</p>
      <button className={styles.button} onClick={addItems}>
        Ship Item
      </button>
    </div>
  );
};

export default ProductCard;
