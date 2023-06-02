import { render, screen, waitFor } from "@testing-library/react";
import ProductSection from "../components/ProductSection";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";

global.fetch = jest.fn();

const newItems = {
  products: [
    {
      brand: "Apple",
      category: "smartphones",
      description: "An apple mobile which is nothing like apple",
      discountPercentage: 12.96,
      id: 1,
      price: 549,
      rating: 4.69,
      stock: 94,
      title: "iPhone 9",
      images: [
        "https://i.dummyjson.com/data/products/11/1.jpg",
        "https://i.dummyjson.com/data/products/11/2.jpg",
        "https://i.dummyjson.com/data/products/11/3.jpg",
        "https://i.dummyjson.com/data/products/11/thumbnail.jpg",
      ],
    },
    {
      id: 100,
      title: "Crystal chandelier maria theresa for 12 light",
      description: "Crystal chandelier maria theresa for 12 light",
      price: 47,
      discountPercentage: 16,
      rating: 4.74,
      stock: 133,
      brand: "YIOSI",
      category: "lighting",
      images: [
        "https://i.dummyjson.com/data/products/11/1.jpg",
        "https://i.dummyjson.com/data/products/11/2.jpg",
        "https://i.dummyjson.com/data/products/11/3.jpg",
        "https://i.dummyjson.com/data/products/11/thumbnail.jpg",
      ],
    },
  ],
};

fetch.mockResolvedValue({
  json: () => newItems,
});

describe("ProductsSection component", () => {
  it("Renders on page", async () => {
    const { container } = render(<ProductSection />);
    await screen.findByText("iPhone 9");
    expect(container).toMatchSnapshot();
  });
});
