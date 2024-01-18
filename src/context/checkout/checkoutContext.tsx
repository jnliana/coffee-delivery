import { createContext } from 'react';
import {
  CheckoutContextProps,
  CheckoutContextProviderProps,
} from './checkoutContext.type';
import { useCheckoutReducer } from './reducer/useCheckoutReducer';
import { Outlet } from 'react-router-dom';

export const checkoutContext = createContext({} as CheckoutContextProps);
export const CheckoutContextProvider = ({
  children,
}: CheckoutContextProviderProps) => {
  const { checkout, save, reset } = useCheckoutReducer();
  return (
    <checkoutContext.Provider value={{ checkout, save, reset }}>
      {children}
      <Outlet />
    </checkoutContext.Provider>
  );
};
