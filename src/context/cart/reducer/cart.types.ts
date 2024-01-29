import { Product } from '@/domain/models/product';

export type Actions = 'increment' | 'decrement' | 'remove' | 'delete-all';

export type CartAction = {
  type: Actions;
  payload?: { product: Product };
};
