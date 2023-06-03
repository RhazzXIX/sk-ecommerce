import { useEffect, useState } from "react";
import del from "../../public/trash-can-outline.svg";
import Image from "next/image";
import styles from "../styles/Cart.module.css";

const Cart = ({
  products,
  deleteProduct,
  showLogin,
}: {
  products: product[];
  deleteProduct: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  showLogin?: () => void;
}) => {
  const [totalCost, setTotalCost] = useState(0);
  const getTotalCost = () => {
    let addedCost = 0;
    products.forEach((product) => {
      if (product.qty) {
        const productCost = product.price * product.qty;
        addedCost += productCost;
      }
    });
    setTotalCost(addedCost);
  };

  useEffect(() => {
    getTotalCost();
  }, [products]);

  return (
    <section className={styles.section} id="cart-page">
      <header className={styles.header}>
        <h4>Cart</h4>
        <h5 className={styles.h5}>Items:</h5>
        <h5 className={styles.h5}>Costs:</h5>
      </header>
      {products.length !== 0 ? (
        <ul>
          {products.map((product) => {
            if (!product.qty) return null;
            return (
              <li className={styles.li} key={product.id}>
                <h4>{product.title}</h4>
                <Image
                  className={styles.img}
                  src={product.images[0]}
                  alt={product.title}
                  width={100}
                  height={100}
                />
                <p className={styles.pList}>
                  $ {product.price}.00 x {product.qty}
                </p>
                <p className={styles.pList}>
                  $ {product.price * product.qty}.00
                </p>
                <button
                  className={styles.delButton}
                  onClick={deleteProduct}
                  data-id={product.id}
                >
                  <Image
                    src={del}
                    alt="delete"
                    data-id={product.id}
                    width={10}
                    height={10}
                  />
                </button>
              </li>
            );
          })}
        </ul>
      ) : (
        <p className={styles.p}>No items for shipment</p>
      )}
      <footer className={styles.footer}>
        <h4 className={styles.total}>Total Cost: $ {totalCost}.00</h4>
        <button className={styles.login} onClick={showLogin}>
          Login to send shipment
        </button>
      </footer>
    </section>
  );
};

export default Cart;
