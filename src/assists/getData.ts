export default async function getData() {
  const fetchedData = await fetch("https://dummyjson.com/products?limit=0")
    .then((res) => res.json())
    .catch((e) => {
      console.error(e);
      throw new Error("Failed to load data");
    });
  return fetchedData.products;
}
