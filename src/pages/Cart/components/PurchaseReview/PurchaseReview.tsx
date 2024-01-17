import { Button, ButtonSize, QuantitySelector } from '@/components';
import { useCart } from '@/hooks';

export const PurchaseReview = () => {
  const { cart, totalAmount, add, remove, Eliminate } = useCart();
  const { products } = cart;

  return (
    <div>
      <h2 className="mb-4">Cafés seleccionados</h2>
      <div className="flex flex-col items-center p-8 bg-gray-50 rounded-r-2xl">
        {products.map((item) => (
          <div
            key={item.product.id}
            className="flex items-center py-4  gap-3 border-b-2 border-gray-100 w-full"
          >
            <img
              src={item.product.image.url}
              alt={item.product.image.description}
              className="w-14"
            />
            <div className="flex w-full justify-between">
              <div className="flex flex-col">
                <p className="font-serif">{item.product.name}</p>
                <div className="flex gap-2 h-9">
                  <QuantitySelector
                    quantity={item.quantity}
                    handleClickDecrement={() => remove(item.product)}
                    handleClickIncrement={() => add(item.product)}
                    disabledIncrement={false}
                    disabledDecrement={false}
                  />
                  <Button
                    size={ButtonSize.small}
                    label="REMOVER"
                    hasIcon
                    nameIcon="trash"
                    onClick={() => Eliminate(item.product)}
                  />
                </div>
              </div>
              <div className="flex justify-between">
                <p className="flex justify-between gap-2">
                  <span>R$</span>
                  <span>{item.product.price}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
        <div className="w-full mt-4">
          <p className="flex justify-between font-serif text-sm leading-8">
            Total de itens
            <span className="flex gap-2">
              <span>R$</span>
              {totalAmount}
            </span>
          </p>
          <p className="flex justify-between font-serif text-sm leading-8">
            Entrega
            <span className="flex gap-2">
              <span>R$</span>100
            </span>
          </p>
          <p className="flex justify-between text-xl">
            Total
            <span className="flex gap-2">
              <span>R$</span>
              {totalAmount + 100}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
