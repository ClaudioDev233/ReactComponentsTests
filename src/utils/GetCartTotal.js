const getCartTotal = (wishlist) => {
  let totalPrice = 0;
  for (let i = 0; i < wishlist.length; i++) {
    const { price, addedToCart } = wishlist[i];
    if (addedToCart) {
      totalPrice += price;
    }
  }
  return totalPrice;
};

const wishlistData = [
  { id: "4027", addedToCart: true, price: 20.0 },
  { id: "5301", addedToCart: false, price: 20.0 },
  { id: "6711", addedToCart: true, price: 20.0 },
  { id: "1244", addedToCart: false, price: 20.0 },
  { id: "4765", addedToCart: true, price: 20.0 },
];

export default getCartTotal;
