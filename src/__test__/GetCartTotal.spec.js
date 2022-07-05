import getCartTotal from "../utils/GetCartTotal";

test("it should return the correctly total price of an item", () => {
  const wishlistData = [
    { id: "4027", addedToCart: true, price: 20.0 },
    { id: "5301", addedToCart: false, price: 20.0 },
    { id: "6711", addedToCart: true, price: 20.0 },
    { id: "1244", addedToCart: false, price: 20.0 },
    { id: "4765", addedToCart: true, price: 20.0 },
  ];

  const output = 60;

  expect(getCartTotal(wishlistData)).toEqual(output);
});

test("it should sum the sale price of a item if it exists", () => {
  const wishlistWithSalePrice = [
    { id: "4027", addedToCart: true, price: 20.0, salePrice: 10.0 },
    { id: "5301", addedToCart: false, price: 20.0, salePrice: 10.0 },
    { id: "6711", addedToCart: true, price: 20.0, salePrice: 10.0 },
    { id: "1244", addedToCart: false, price: 20.0, salePrice: null },
    { id: "4765", addedToCart: true, price: 20.0, salePrice: null },
  ];

  const output = 40;
  expect(getCartTotal(wishlistWithSalePrice)).toEqual(output);
});
