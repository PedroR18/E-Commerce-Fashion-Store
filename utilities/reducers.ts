import { cartActions, Product } from './interface';

const cartReducer = (state: Product[], action: cartActions) => {
  const { type, payload } = action;
  switch (type) {
    case 'addToCart':
      if (state) {
        return [...state, payload];
      } else return [payload];
    case 'removeFromCart':
      return state.filter((el: Product) => el.id !== payload!.id);
    case 'clearCart':
      return [];
    case 'setCart':
      return payload;
    default:
      return state;
  }
};

export { cartReducer };
