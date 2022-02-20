import { cartActions, CartItem } from './interface';

const cartReducer = (state: CartItem[], action: cartActions) => {
  const { type, payload } = action;
  switch (type) {
    case 'addToCart':
      if (state) {
        const arr: CartItem[] = [];
        let incremented = false;
        state.forEach((item: CartItem) => {
          if (
            item.product.id === payload.product.id &&
            item.size === payload.size
          ) {
            arr.push({
              product: item.product,
              size: item.size,
              quantity: item.quantity + 1,
            });
            incremented = true;
          } else {
            arr.push({
              product: item.product,
              size: item.size,
              quantity: item.quantity,
            });
          }
        });
        if (incremented) {
          return arr;
        } else return [...arr, payload];
      } else return [payload];
    case 'updateCartItem':
      const arr: CartItem[] = [];
      state.forEach((item: CartItem) => {
        if (
          item.product.id === payload.product.id &&
          item.size === payload.size
        ) {
          arr.push(payload);
        } else {
          arr.push({
            product: item.product,
            size: item.size,
            quantity: item.quantity,
          });
        }
      });
      return arr;
    case 'removeFromCart':
      const arr2: CartItem[] = [];
      state.forEach((item: CartItem) => {
        if (item.quantity !== 0) {
          arr2.push(item);
        }
      });

      return arr2;
    case 'clearCart':
      return [];
    case 'setCart':
      return payload;
    default:
      return state;
  }
};

export { cartReducer };
