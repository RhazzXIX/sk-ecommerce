"use client";
import ProductSection from "@/components/ProductSection";
import { useState } from "react";

export default function VList() {
  const [cartItems, setCartItems] = useState<product[]>([]);

  const addToCart = (product: product) => {
    const [alreadyInCart] = cartItems.filter((item) => item.id === product.id);

    setCartItems(cartItems.concat(product));
  };

  const removeFromCart = (e: React.ChangeEvent<HTMLButtonElement>) => {
    const productId = Number(e.target.dataset.id);
    setCartItems(
      cartItems.filter((item) => {
        return item.id !== productId;
      })
    );
  };

  return (
    <main>
      <section>
        <h1>Categories</h1>
      </section>
      <ProductSection addToCart={addToCart} />
    </main>
  );
}
