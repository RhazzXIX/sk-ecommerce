import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import VList from "../app/list/page";
import getData from "../assists/getData";

jest.mock("../assists/getData");

getData.mockResolvedValue([
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
  },
]);

describe("List component", () => {
  it("Renders on screen", async() => {
    const { container } = render(<VList />);
    await screen.findByText('iPhone 9')
    expect(container).toMatchSnapshot();
  });
});
