import {  useEffect, useState } from "react";
import del from "../../public/trash-can-outline.svg";
import Image from "next/image";

const Cart = ({
  products,
  deleteProduct,
  showLogin,
}: {
  products: product[];
  deleteProduct: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  showLogin: () => void;
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
    <section id="cart-page">
      <header>
        <h4>Cart</h4>
        <h5>Items:</h5>
        <h5>Costs:</h5>
      </header>
      {products.length !== 0 ? (
        <ul>
          {products.map((product) => {
            if (!product.qty) return null;
            return (
              <li key={product.id}>
                <h4>{product.title}</h4>
                <Image
                  src={product.images[0]}
                  alt={product.title}
                  width={0}
                  height={0}
                />
                <p>
                  $ {product.price}.00 x {product.qty}
                </p>
                <p>$ {product.price * product.qty}.00</p>
                <button onClick={deleteProduct} data-id={product.id}>
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
        <p>No items on the cart</p>
      )}
      <footer>
        <h4>Total Cost: $ {totalCost}.00</h4>
        <button onClick={showLogin}>Login to Pay</button>
      </footer>
    </section>
  );
};

export default Cart;
