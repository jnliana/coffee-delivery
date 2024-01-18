import { useCallback, useReducer } from 'react';
import { CheckoutAction, CheckoutState } from './checkout.type';

const initialState: CheckoutState = {} as CheckoutState;

function checkoutReducer(state: CheckoutState, action: CheckoutAction) {
  const { type, payload } = action;
  if (!payload) return state;
  const saveCheckoutInfo = () => {
    return payload;
  };

  switch (type) {
    case 'save':
      return saveCheckoutInfo();
      break;
    case 'reset':
      return initialState;
      break;

    default:
      return state;
  }
}

export const useCheckoutReducer = () => {
  const [state, dispatch] = useReducer(checkoutReducer, initialState);
  const setUserInfo = useCallback((userInfo: CheckoutState) => {
    dispatch({
      type: 'save',
      payload: userInfo,
    });
  }, []);

  const resetUserInfo = useCallback(() => {
    dispatch({
      type: 'reset',
    });
  }, []);

  return {
    checkout: state,
    save: setUserInfo,
    reset: resetUserInfo,
  };
};
