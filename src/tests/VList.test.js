import { render, screen } from "@testing-library/react";
import VList from "../app/list/page";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

global.fetch = jest.fn();
const user = userEvent.setup();

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

describe("List component", () => {
  it("Renders on screen", async () => {
    const { container } = render(<VList />);
    await screen.findByText("iPhone 9");
    expect(container).toMatchSnapshot();
  });
  it(`Let's users see what in the cart`, async () => {
    render(<VList />);
    const cartBtn = screen.getByRole("button", { name: "To ship" });

    expect(
      screen.queryByRole("heading", { name: "Cart" })
    ).not.toBeInTheDocument();

    await user.click(cartBtn);

    expect(screen.getByRole("heading", { name: "Cart" })).toBeInTheDocument();
  });

  it(`Let's the user close the cart by clicking anywhere on the Shop page`, async () => {
    render(<VList />);
    const cartBtn = screen.getByRole("button", { name: "To ship" });
    const shopPage = screen.getByRole("main");
    await user.click(cartBtn);
    expect(screen.getByRole("heading", { name: "Cart" })).toBeInTheDocument();
    await user.click(shopPage);
    expect(
      screen.queryByRole("heading", { name: "Cart" })
    ).not.toBeInTheDocument();
  });
});
