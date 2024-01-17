import { Navbar } from '@/components';
import { CheckoutForm } from './components/CheckoutForm';
import { PurchaseReview } from './components/PurchaseReview';

export const Cart = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col lg:flex-row justify-center gap-6 mb-4 p-8">
        <CheckoutForm />
        <PurchaseReview />
      </div>
    </>
  );
};
