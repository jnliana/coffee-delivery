import { Product } from '@/domain/models/product';
import { useCallback, useReducer } from 'react';
import { CartAction } from './cart.types';
import { produce } from 'immer';
import { Cart } from '../cartContext.types';

const initialState: Cart = {
  products: [],
};

function cartReducer(state: Cart, action: CartAction) {
  const { type, payload } = action;

  if (!payload) return state;

  const productIndex = state.products.findIndex(
    (item) => item.product.id === payload.product.id,
  );
  const existProduct = productIndex !== -1;

  const increaseProductQuantity = () => {
    return produce(state, (draft) => {
      draft.products[productIndex].quantity += 1;
    });
  };

  const decrementProductQuantity = () => {
    if (existProduct && state.products[productIndex].quantity > 1) {
      return produce(state, (draft) => {
        draft.products[productIndex].quantity -= 1;
      });
    }

    return removeProduct();
  };

  const addNewProduct = () => {
    if (existProduct) {
      return increaseProductQuantity();
    }
    return produce(state, (draft) => {
      draft.products.push({
        product: payload.product,
        quantity: 1,
      });
    });
  };

  const removeProduct = () => {
    if (existProduct) {
      return produce(state, (draft) => {
        draft.products.splice(productIndex, 1);
      });
    }
    return state;
  };

  switch (type) {
    case 'increment':
      return addNewProduct();
    case 'decrement':
      return decrementProductQuantity();
    case 'remove':
      return removeProduct();
    case 'delete-all':
      return initialState;

    default:
      return state;
  }
}

export function useCartReducer() {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const incrementProductToCart = useCallback((product: Product) => {
    dispatch({
      type: 'increment',
      payload: { product },
    });
  }, []);

  const decrementProductToCart = useCallback((product: Product) => {
    dispatch({
      type: 'decrement',
      payload: { product },
    });
  }, []);

  const removeProductToCart = useCallback((product: Product) => {
    dispatch({
      type: 'remove',
      payload: { product },
    });
  }, []);

  const resetCart = useCallback(() => {
    dispatch({
      type: 'delete-all',
    });
  }, []);

  return {
    products: state.products,
    incrementProductToCart,
    decrementProductToCart,
    removeProductToCart,
    resetCart,
  };
}
