import { Product } from '@/domain/models/product';

export type ItemCart = {
  product: Product;
  quantity: number;
};

export type Cart = {
  products: ItemCart[];
};

export interface CartContextProps {
  cart: Cart;
  incrementProductToCart: (product: Product) => void;
  decrementProductToCart: (product: Product) => void;
  removeProductToCart: (product: Product) => void;
  resetCart: () => void;
}
