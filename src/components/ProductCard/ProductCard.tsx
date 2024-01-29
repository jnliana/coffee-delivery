import {
  Button,
  QuantitySelector,
  ButtonSize,
  NamingClass,
} from '@/components';
import { ProductProps } from './ProductCard.types';

export const ProductCard = ({
  product,
  quantity = 0,
  handleClickDecrementProduct,
  handleClickIncreaseProduct,
  handleClickCart,
}: ProductProps) => {
  const { image, description, name, price } = product;
  return (
    <div className="relative w-full flex flex-col justify-center bg-grey-50 border pt-9 px-5 pb-5 rounded-tl-lg rounded-br-lg rounded-tr-semifull rounded-bl-semifull">
      <div className="absolute left-1/2 -translate-x-1/2 -top-6">
        <img src={image.url} alt={image.description} />
      </div>
      <div className="flex flex-col items-center pt-14">
        <h2 className="font-semibold py-2">{name}</h2>
        <p className="font-serif"> {description} </p>
        <div className="flex flex-row flex-wrap items-center gap-4 pt-4">
          <span>$ {price}</span>
          <QuantitySelector
            quantity={quantity}
            handleClickDecrement={() => handleClickDecrementProduct(product)}
            handleClickIncrement={() => handleClickIncreaseProduct(product)}
            disabledIncrement={false}
            disabledDecrement={false}
          />
          <Button
            hasIcon
            nameIcon="cart"
            classOption={NamingClass.secondary}
            size={ButtonSize.xsmall}
            onClick={handleClickCart}
          />
        </div>
      </div>
    </div>
  );
};
