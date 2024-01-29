import { createContext } from 'react';
import { Outlet } from 'react-router-dom';
import {
  Cart,
  CartContextProps,
  cartContextProviderProps,
} from './cartContext.types';
import { useCartReducer } from './reducer/useCartReducer';

export const cartContext = createContext({} as CartContextProps);

export const CartContextProvider = ({ children }: cartContextProviderProps) => {
  const {
    products,
    incrementProductToCart,
    decrementProductToCart,
    removeProductToCart,
    resetCart,
  } = useCartReducer();

  const cart: Cart = {
    products,
  };

  return (
    <cartContext.Provider
      value={{
        cart,
        incrementProductToCart,
        decrementProductToCart,
        removeProductToCart,
        resetCart,
      }}
    >
      {children}
      <Outlet />
    </cartContext.Provider>
  );
};
