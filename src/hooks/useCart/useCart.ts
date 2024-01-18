import { useContext } from 'react';
import { cartContext } from '../../context/cart/cartContext';

export const useCart = () => {
  const {
    incrementProductToCart,
    cart,
    decrementProductToCart,
    removeProductToCart,
    resetCart,
  } = useContext(cartContext);

  const cartTotalItems = cart.products.reduce(
    (totalQuantity, product) => totalQuantity + product.quantity,
    0,
  );

  const totalAmount = cart.products.reduce((totalAmount, product) => {
    return totalAmount + product.quantity * product.product.price;
  }, 0);

  return {
    cart,
    cartTotalItems,
    totalAmount,
    add: incrementProductToCart,
    remove: decrementProductToCart,
    Eliminate: removeProductToCart,
    reset: resetCart,
  };
};
