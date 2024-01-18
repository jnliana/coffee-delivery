import { ReactNode } from 'react';

export interface Checkout {
  departament: string;
  address: string;
  number: number;
  complement: string;
  neighborhood: string;
  city: string;
  zipCode: string;
}

export interface CheckoutContextProps {
  checkout: Checkout;
  save: (checkoutInfo: Checkout) => void;
  reset: () => void;
}

export interface CheckoutContextProviderProps {
  children?: ReactNode;
}
