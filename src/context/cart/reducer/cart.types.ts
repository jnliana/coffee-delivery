import { Product } from '@/domain/models/product';
import { Cart } from '../cartContext.types';

export type CartState = Cart;

export type typeActions = 'increment' | 'decrement' | 'remove' | 'delete-all';

export type CartAction = {
  type: typeActions;
  payload?: { product: Product };
};
