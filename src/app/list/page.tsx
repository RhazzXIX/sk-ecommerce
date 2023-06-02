"use client";
import ProductSection from "@/components/ProductSection";
import { SyntheticEvent, useState, MouseEventHandler } from "react";
import Cart from "@/components/Cart";
import Image from "next/image";
import cartImg from "../../../public/cart.svg";

export default function VList() {
  const [cartItems, setCartItems] = useState<product[]>([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (product: product) => {
    const [alreadyInCart] = cartItems.filter((item) => item.id === product.id);

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
    if (showCart) setShowCart(false);
    setShowCart(true);
  };

  const closeCart = (e: SyntheticEvent) => {
    const cart = document.querySelector("section#cart-page");
    if (!cart) return;
    if (cart?.contains(e.target as HTMLElement)) return;
    setShowCart(false);
  };

  return (
    <main onClick={closeCart}>
      <header>
        <h2>Products:</h2>
        <button id="cart" aria-label="Cart" onClick={toggleCart}>
          <Image src={cartImg} alt="Cart" />
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
