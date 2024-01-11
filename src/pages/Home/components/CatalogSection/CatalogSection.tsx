import { ProductCard } from '@/components';
import { useCart } from '@/hooks/useCart/useCart';
import { productItems } from '@/mocks/product.mocks';

export const CatalogSection = () => {
  const { add, remove, cart } = useCart();
  const catalogProducts = productItems;

  const getQuantity = (id: string): number => {
    const product = cart.products.find((item) => item.product.id === id);
    return product?.quantity ?? 0;
  };

  return (
    <section className="flex flex-wrap items-center justify-center">
      {catalogProducts.map((product) => (
        <div key={product.id} className="w-72 p-5">
          <ProductCard
            product={product}
            quantity={getQuantity(product.id)}
            handleClickDecrementProduct={remove}
            handleClickIncreaseProduct={add}
          />
        </div>
      ))}
    </section>
  );
};
