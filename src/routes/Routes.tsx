import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import { Home, Cart, Checkout } from '@/pages';
import { CartContextProvider } from '../context/cart/cartContext';

const routeDefinition = createRoutesFromElements(
  <Route>
    <Route element={<CartContextProvider />}>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
    </Route>
    <Route path="/checkout" element={<Checkout />} />
  </Route>,
);

export const router = createBrowserRouter(routeDefinition);
