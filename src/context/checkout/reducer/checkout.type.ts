import { Checkout } from '../checkoutContext.type';

export type CheckoutState = Checkout;

export type Actions = 'save' | 'reset';

export type CheckoutAction = {
  type: Actions;
  payload?: CheckoutState;
};
