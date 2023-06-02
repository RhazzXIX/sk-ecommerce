"use client";
import { CSSProperties } from "react";
import { useState } from "react";
import { FixedSizeList as List } from "react-window";
import InfiniteLoader from "react-window-infinite-loader";
import ProductCard from "@/components/ProductCard";

export default function ProductSection(props) {
  const [data, setData] = useState<product[]>([]);
  const [itemCount, setItemCount] = useState(100);
  let loading: Boolean;

  const Row = ({ index, style }: { index: number; style: CSSProperties }) => {
    const item: product = data[index];
    let content;
    if (!item) return null;
    return <ProductCard key={item.id} style={style} product={item} />;
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
    <section>
      <header></header>
      <InfiniteLoader
        isItemLoaded={isItemLoaded}
        itemCount={itemCount}
        loadMoreItems={loadMoreItems}
      >
        {({ onItemsRendered, ref }) => (
          <List
            itemCount={itemCount}
            onItemsRendered={onItemsRendered}
            ref={ref}
            height={800}
            itemSize={200}
            width={"100%"}
          >
            {Row}
          </List>
        )}
      </InfiniteLoader>
    </section>
  );
}
