import { CSSProperties } from "react";
import { useState } from "react";
import { FixedSizeList as List } from "react-window";
import InfiniteLoader from "react-window-infinite-loader";
import AutoSizer from "react-virtualized-auto-sizer";
import ProductCard from "@/components/ProductCard";
import styles from "../styles/ProductSection.module.css";

export default function ProductSection({
  addToCart,
}: {
  addToCart: ({}: product) => void;
}) {
  const [data, setData] = useState<product[]>([]);
  const itemCount = 100;
  let loading: Boolean;

  const Row = ({ index, style }: { index: number; style: CSSProperties }) => {
    const item: product = data[index];
    if (!item) return null;
    return (
      <ProductCard
        key={item.id}
        style={style}
        product={item}
        addItem={addToCart}
      />
    );
  };

  const isItemLoaded = (index: number) => {
    return index <= data.length - 1;
  };

  const loadMoreItems = async (
    startIndex: number,
    stopIndex: number
  ): Promise<void> => {
    return new Promise((resolve) => {
      if (loading) return;
      loading = true;
      fetch(`https://dummyjson.com/products?skip=${data.length}&limit=${15}`)
        .then((res) => res.json())
        .then((newItems) => {
          if (data.length === 100) return;
          setData((prevData) => [...prevData, ...newItems.products]);

          resolve();
          loading = false;
        })
        .catch((error) => {
          console.error(error);
        });
    });
  };
  return (
    <section className={styles.section}>
      <InfiniteLoader
        isItemLoaded={isItemLoaded}
        itemCount={itemCount}
        loadMoreItems={loadMoreItems}
      >
        {({ onItemsRendered, ref }) => (
          <AutoSizer>
            {({ height, width }: { height: number; width: number }) => (
              <List
                itemCount={itemCount}
                onItemsRendered={onItemsRendered}
                ref={ref}
                height={height}
                itemSize={280}
                width={width}
              >
                {Row}
              </List>
            )}
          </AutoSizer>
        )}
      </InfiniteLoader>
    </section>
  );
}
