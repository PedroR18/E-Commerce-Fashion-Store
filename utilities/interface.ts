interface Product {
  id: string;
  brand: string;
  name: string;
  price: string;
  color: string[];
  photos: string[];
  details: string;
  tag: string;
  genre: string;
}

interface ContextType {
  cart: Product[];
  setCart: React.Dispatch<cartActions>;
}

interface cartActions {
  type: 'addToCart' | 'removeFromCart' | 'clearCart' | 'setCart';
  payload: any;
}

export type { Product, ContextType, cartActions };
