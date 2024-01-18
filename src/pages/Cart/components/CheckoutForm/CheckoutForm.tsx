import { Button, ButtonSize, Icon } from '@/components';
import { useCheckout } from '@/hooks/useCheckout';
import { FormEvent } from 'react';

export const CheckoutForm = () => {
  const { save } = useCheckout();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submit');
    save({
      departament: 'Santander',
      address: 'Cll 456 # 45-2',
      number: 4,
      complement: 'Casa Azul',
      neighborhood: 'Cañeveral',
      city: 'Bucaramanga',
      zipCode: '123123',
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col lg:max-w-xl">
        <h2 className="text-left mb-4">Complete seu pedido</h2>
        <div className="grid grid-cols-1 sm:grid-cols-6 gap-x-3 gap-y-3 bg-gray-50 p-8 rounded-r-2xl">
          <div className="flex gap-3 col-span-full mb-4">
            <Icon name="location" color="#FDE68A" />
            <p className="font-serif text-sm">
              Lorem ipsum dolor sit amet
              <span>
                consectetur adipisicing elit. Itaque vel doloribus praesentium
                vitae.
              </span>
            </p>
          </div>
          <input
            type="text"
            placeholder="Departamento"
            className="rounded p-2 text-sm font-serif bg-gray-100 border sm:col-span-2"
          />
          <input
            type="text"
            placeholder="Dirección"
            className="block sm:col-span-full w-full rounded p-2 text-sm font-serif bg-gray-100 border"
          />
          <input
            type="text"
            placeholder="Número"
            className="block w-full rounded p-2 text-sm font-serif bg-gray-100 border sm:col-span-2"
          />
          <input
            type="text"
            placeholder="Complemento"
            className="block w-full rounded p-2 text-sm font-serif bg-gray-100 border sm:col-span-4"
          />
          <input
            type="text"
            placeholder="Barrio"
            className="block w-full rounded p-2 text-sm font-serif bg-gray-100 border sm:col-span-3"
          />
          <input
            type="text"
            placeholder="Ciudad"
            className="block w-full rounded p-2 text-sm font-serif bg-gray-100 border sm:col-span-2"
          />
          <input
            type="text"
            placeholder="zip Code"
            className="block w-full rounded p-2 text-sm font-serif bg-gray-100 border"
          />
        </div>
        <div className="flex flex-col bg-gray-50 rounded-r-2xl mt-3 p-8">
          <div className="flex gap-3 col-span-full mb-5">
            <Icon name="bill" color="#FDE68A" />
            <p className="font-serif text-sm">
              Lorem ipsum dolor sit amet
              <span>
                consectetur adipisicing elit. Itaque vel doloribus praesentium
                vitae.
              </span>
            </p>
          </div>
          <div className="flex gap-x-4">
            <Button
              size={ButtonSize.small}
              label="TARJETA DE CREDITO"
              hasIcon
              nameIcon="card"
              onClick={() => undefined}
            />
            <Button
              size={ButtonSize.small}
              label="TRANSFERENCIA"
              hasIcon
              nameIcon="bank"
              onClick={() => undefined}
            />
            <Button
              size={ButtonSize.small}
              label="PSE"
              hasIcon
              nameIcon="bill"
              onClick={() => undefined}
            />
          </div>
        </div>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
