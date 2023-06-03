"use client";
import ProductSection from "@/components/ProductSection";
import { SyntheticEvent, useState, MouseEventHandler } from "react";
import Cart from "@/components/Cart";
import Image from "next/image";
import shipImg from "../../../public/truck-cargo-container.svg";
import styles from "./list.module.css";

export default function VList() {
  const [cartItems, setCartItems] = useState<product[]>([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (product: product) => {
    const [alreadyInCart] = cartItems.filter((item) => item.id === product.id);
    if (alreadyInCart) return;
    setCartItems(cartItems.concat(product));
  };

  const removeFromCart = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (e.target instanceof HTMLElement) {
      const productId = Number(e.target.dataset.id);
      setCartItems(
        cartItems.filter((item) => {
          return item.id !== productId;
        })
      );
    }
  };

  const toggleCart = () => {
    console.log(showCart);
    if (showCart) {
      setShowCart(false);
      return;
    }
    setShowCart(true);
  };

  const closeCart = (e: SyntheticEvent) => {
    const cart = document.querySelector("section#cart-page");
    if (!cart) return;
    if (cart.contains(e.target as HTMLElement)) return;
    setShowCart(false);
  };

  return (
    <main className={styles.main} onClick={closeCart}>
      <header className={styles.header}>
        <h2>Products:</h2>
        <button className={styles.shipBtn} onClick={toggleCart}>
          <Image src={shipImg} alt="To ship" />
          {cartItems.length !== 0 && <p>{cartItems.length}</p>}
        </button>
        {showCart && (
          <Cart products={cartItems} deleteProduct={removeFromCart} />
        )}
      </header>
      <ProductSection addToCart={addToCart} />
    </main>
  );
}
