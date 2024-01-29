import { Navbar } from '@/components';
import { useCart } from '@/hooks';
import { EmptyCart, PurchaseReview, CheckoutForm } from './components';

export const Cart = () => {
  const { totalAmount } = useCart();

  const content = () => {
    return totalAmount ? (
      <div className="flex flex-col lg:flex-row justify-center gap-6 mb-4 p-8">
        <CheckoutForm />
        <PurchaseReview />
      </div>
    ) : (
      <EmptyCart />
    );
  };

  return (
    <>
      <Navbar />
      {content()}
    </>
  );
};
