import { Product } from '@/domain/models/product';
import { Cart } from '../cartContext.types';

export type CartState = Cart;

export type Actions = 'increment' | 'decrement' | 'remove' | 'delete-all';

export type CartAction = {
  type: Actions;
  payload?: { product: Product };
};
