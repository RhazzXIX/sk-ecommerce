import getData from "../assists/getData";
const testProducts = {
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
  ],
};

const response = {
  json: () => testProducts,
};

global.fetch = jest.fn();
fetch.mockResolvedValue(response);

describe("getData assist function", () => {
  it("Fetches the data", async () => {
    expect(await getData()).toBe(testProducts.products);
    expect(fetch).toHaveBeenCalled();
  });
});
