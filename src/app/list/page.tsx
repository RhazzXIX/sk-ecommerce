"use client";
import { CSSProperties } from "react";
import { useState } from "react";
import { FixedSizeList as List } from "react-window";
import InfiniteLoader from "react-window-infinite-loader";

type product = {
  brand: string;
  category: string;
  description: string;
  id: number;
  images: [];
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
  title: string;
  discountPercentage: number;
};

type InfiniteLoaderProps = React.ComponentProps<typeof InfiniteLoader>;
export default function VList() {
  const [data, setData] = useState<product[]>([]);
  const [itemCount, setItemCount] = useState(100);
  let loading: Boolean;

  const Row = ({ index, style }: { index: number; style: CSSProperties }) => {
    const item: product = data[index];
    let content;
    if (!item) return null;
    if (!isItemLoaded(index)) {
      content = "Loading...";
    } else {
      content = item.title;
    }
    return <div style={style}>{content}</div>;
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
    <main>
      <section>
        <section>
          <h1>Categories</h1>
        </section>
      </section>
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
              itemSize={50}
              width={"100%"}
            >
              {Row}
            </List>
          )}
        </InfiniteLoader>
      </section>
    </main>
  );
}
