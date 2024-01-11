import coffeeImg from '@/assets/images/coffee-header.png';
import { Icon } from '@/components';

export const HeaderSection = () => {
  return (
    <section className="flex justify-center sm:flex-col lg:flex-row">
      <div className="lg:w-1/2 text-center px-10 py-16">
        <h3 className="font-sans text-3xl md:text-5xl mb-4 lg:text-start">
          Encontre o café perfeito para qualquer hora do dia
        </h3>
        <p className="w-full text-base md:text-xl leading-normal font-serif text-black-200 mb-8 lg:text-start">
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>
        <div className="flex flex-wrap">
          <div className="w-full md:flex-1">
            <span className="flex flex-row items-center font-serif gap-3 justify-center lg:justify-start">
              <span className="p-2 bg-yellow-200 text-white-50 rounded-full">
                <Icon name="cart" size={20} />
              </span>
              <span className="leading-tight"> Compra simples e segura</span>
            </span>
            <span className="flex flex-row items-center font-serif gap-3 justify-center lg:justify-start">
              <span className="p-2 bg-yellow-100 text-white-50 rounded-full">
                <Icon name="clock" size={20} />
              </span>
              <span className="leading-tight">Entrega rápida e rastreada</span>
            </span>
          </div>
          <div className="w-full md:flex-1">
            <span className="flex flex-row items-center font-serif gap-3 justify-center lg:justify-start">
              <span className="p-2 bg-purple-100 text-white-50 rounded-full">
                <Icon name="coffee" size={20} />
              </span>
              <span className="leading-tight">
                O café chega fresquinho até você
              </span>
            </span>
            <span className="flex flex-row items-center font-serif gap-3 justify-center lg:justify-start">
              <span className="p-2 bg-black-100 text-white-50 rounded-full">
                <Icon name="box" size={20} />
              </span>
              <span className="leading-tight">
                Embalagem mantém o café intacto
              </span>
            </span>
          </div>
        </div>
      </div>
      <div className="items-center hidden lg:flex">
        <img
          src={coffeeImg}
          alt="Coffee image"
          className="mx-auto hover:scale-105 duration-200 w-96"
        />
      </div>
    </section>
  );
};
