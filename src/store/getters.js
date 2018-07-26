// 购物车价格
export const shoppingCartPrice = state => {
  let price = 0;
  state.shoppingCart.forEach(item => {
    price += item.count * item.price;
  });
  return price / 100;
};
