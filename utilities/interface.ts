interface Product {
  id: string;
  brand: string;
  name: string;
  price: number;
  colors: string[];
  photos: string[];
  details: string;
  tag: string;
  genre: string;
}

interface CartItem {
  product: Product;
  size: string;
  quantity: number;
}

interface ContextType {
  cart: CartItem[];
  setCart: React.Dispatch<cartActions>;
}

interface cartActions {
  type: 'addToCart' | 'removeFromCart' | 'clearCart' | 'setCart';
  payload: any;
}

export type { Product, ContextType, cartActions, CartItem };
