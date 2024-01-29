import { Product } from '@/domain/models/product';
import { ReactNode } from 'react';

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

export interface cartContextProviderProps {
  children?: ReactNode;
}
