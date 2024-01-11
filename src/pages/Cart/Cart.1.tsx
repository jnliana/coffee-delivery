import { Navbar } from '@/components';
import { useCart } from '@/hooks/useCart/useCart';

export const Cart = () => {
  const cartData = useCart();
  console.log(cartData.cart);
  return (
    <>
      <Navbar></Navbar>

      <div>
        {cartData.cart.products.map((product) => {
          <>
            <img src={image.url} alt={image.description} />
          </>;
        })}
      </div>
    </>
  );
};
