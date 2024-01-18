import { checkoutContext } from '@/context/checkout/checkoutContext';
import { useContext } from 'react';
import { useCart } from '../useCart';
import { Checkout } from '@/context/checkout/checkoutContext.type';

export const useCheckout = () => {
  const { checkout, save, reset: resetCheckout } = useContext(checkoutContext);
  const { reset } = useCart();

  const saveData = (data: Checkout) => {
    console.log('da', data);
    save(data);
    reset();
  };

  return {
    save: saveData,
    reset: resetCheckout,
    checkout,
  };
};
