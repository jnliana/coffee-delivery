import { Button, Navbar, QuantitySelector } from '@/components';
import { useCart } from '@/hooks/useCart/useCart';

export const Cart = () => {
  const { cart, totalAmount, add, remove, Eliminate } = useCart();
  const { products } = cart;

  return (
    <>
      <Navbar />
      <div className="flex justify-center gap-3 mb-4">
        <div className="">
          <h2 className="text-left">Complete seu pedido</h2>
          <div className="bg-gray-50 p-6 space-y-4 ">
            <input
              type="text"
              placeholder="CEP"
              className="w-1/2 rounded p-2 text-sm font-serif bg-gray-100 border"
            />
            <input
              type="text"
              placeholder="CEP"
              className="w-full rounded p-2 text-sm font-serif bg-gray-100 border"
            />
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="CEP"
                className=" rounded p-2 text-sm font-serif bg-gray-100 border"
              />
              <input
                type="text"
                placeholder="CEP"
                className="rounded p-2 text-sm font-serif bg-gray-100 border"
              />
            </div>
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="CEP"
                className=" rounded p-2 text-sm font-serif bg-gray-100 border"
              />
              <input
                type="text"
                placeholder="CEP"
                className="rounded p-2 text-sm font-serif bg-gray-100 border"
              />
              <input
                type="text"
                placeholder="CEP"
                className="rounded p-2 text-sm font-serif bg-gray-100 border"
              />
            </div>
          </div>
        </div>
        <div className="">
          <h2>Cafés seleccionados</h2>
          <div className="flex flex-col items-center p-6 bg-gray-50 rounded-r-2xl">
            {products.map((item) => (
              <div
                key={item.product.id}
                className="flex items-center mb-2 pb-2 gap-3 border-b-2"
              >
                <img
                  src={item.product.image.url}
                  alt={item.product.image.description}
                  className="w-20"
                />
                <div className="flex flex-col">
                  <p className="flex justify-between">
                    {item.product.name}
                    <span>{item.product.price}</span>
                  </p>
                  <div className="flex gap-2">
                    <QuantitySelector
                      quantity={item.quantity}
                      handleClickDecrement={() => remove(item.product)}
                      handleClickIncrement={() => add(item.product)}
                      disabledIncrement={false}
                      disabledDecrement={false}
                    />
                    <Button
                      label="REMOVER"
                      hasIcon
                      nameIcon="trash"
                      onClick={() => Eliminate(item.product)}
                    />
                  </div>
                </div>
              </div>
            ))}
            <div className="w-full">
              <p className="flex justify-between font-serif">
                Total de itens <span>{totalAmount}</span>
              </p>
              <p className="flex justify-between font-serif">
                Entrega <span>100</span>
              </p>
              <p className="flex justify-between text-xl">
                Total <span>{totalAmount + 100}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
