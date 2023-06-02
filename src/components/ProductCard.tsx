import Image from "next/image";
import { CSSProperties, useState } from "react";

const ProductCard = ({
  product,
  addItem,
  style,
}: {
  product: product;
  addItem: ({}:product) => void;
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
    <div className="card" style={style}>
      <Image src={product.images[0]} alt={""} height={0} width={0} />
      <h4>{product.title}</h4>
      <p>{product.description}</p>
      <p>$ {product.price}.00</p>
      <div className="qtyContainer">
        <label htmlFor="qty">
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
        <button className="increment" onClick={increment}>
          +
        </button>
        <button className="decrement" onClick={decrement}>
          -
        </button>
      </div>
      <p className="totalCost">$ {product.price * quantity}.00</p>
      <button className="addToCart" onClick={addItems}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
