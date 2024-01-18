import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import { Home, Cart, Checkout } from '@/pages';
import { CartContextProvider } from '../context/cart/cartContext';
import { CheckoutContextProvider } from '@/context/checkout/checkoutContext';

const routeDefinition = createRoutesFromElements(
  <Route>
    <Route element={<CartContextProvider />}>
      <Route path="/" element={<Home />} />
      <Route element={<CheckoutContextProvider />}>
        <Route path="/cart" element={<Cart />} />
      </Route>
    </Route>
    <Route element={<CheckoutContextProvider />}>
      <Route path="/checkout" element={<Checkout />} />
    </Route>
  </Route>,
);

export const router = createBrowserRouter(routeDefinition);
