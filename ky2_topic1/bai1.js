const cards = [
  { name: "Iphone 1", price: 1500000, quantity: 1 },
  { name: "Iphone 2", price: 3000000, quantity: 2 },
  {name: "Air Pod", price: 200000, quantity: 1}
];
const totalPrice = cards.reduce((total, card) => {
  return total + card.price * card.quantity;
}, 0);
// cards.map(card => {
//     console.log(`Sản phẩm: ${card.name} - Giá: ${card.price} VND - Số lượng: ${card.quantity}<br>`);
// });
cards.reduce((total, card) => {
  return total + card.price * card.quantity;
}, 0);
console.log(`Tổng giá trị giỏ hàng: ${totalPrice} VND`);