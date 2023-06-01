"use client";
import getData from "@/assists/getData";
import { CSSProperties } from "react";
import { useEffect, useState } from "react";
import { FixedSizeList as List } from "react-window";

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

export default function VList() {
  const [data, setData] = useState([]);
  const Row = ({ index, style }: { index: number; style: CSSProperties }) => {
    const item: product = data[index];
    return <div style={style}>{item.title}</div>;
  };

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData: [] = await getData();
      setData(fetchedData);
    };
    fetchData();
  }, []);

  return (
    <main>
      <section>
        <section>
          <h1>Categories</h1>
        </section>
      </section>
      <section>
        <header></header>
        <List height={800} itemCount={data.length} itemSize={50} width={"100%"}>
          {Row}
        </List>
      </section>
    </main>
  );
}
