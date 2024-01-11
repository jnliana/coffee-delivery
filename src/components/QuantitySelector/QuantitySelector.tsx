import { useMemo } from 'react';
import { Icon } from '..';

export enum Esize {
  small = 'small',
  medium = 'medium',
  large = 'large',
}

interface QuantitySelectorProps {
  quantity: number;
  disabledDecrement: boolean;
  disabledIncrement: boolean;
  handleClickDecrement: () => void;
  handleClickIncrement: () => void;
  decrementText?: string;
  incrementText?: string;
  size?: Esize;
}

const getSize = (size: Esize) => {
  switch (size) {
    case Esize.small:
      return 14;
    case Esize.large:
      return 32;
    default:
      return 24;
  }
};

const getTextsize = (size: Esize) => {
  switch (size) {
    case Esize.small:
      return 'text-[14px]';
    case Esize.large:
      return 'text-[32px]';
    default:
      return 'text-[24px]';
  }
};

const BASE_BUTTON =
  'cursor-pointer p-2 grow disabled:text-black-100 hover:text-purple-200';
const BASE_QUANTITY =
  'p-2 flex grow justify-center items-center text-black-300';

export const QuantitySelector = ({
  quantity,
  handleClickIncrement,
  handleClickDecrement,
  disabledIncrement,
  disabledDecrement,
  decrementText,
  incrementText,
  size = Esize.small,
}: QuantitySelectorProps) => {
  const computedSize = useMemo(() => {
    return getSize(size);
  }, [size]);
  const computedTextSize = useMemo(() => {
    return getTextsize(size);
  }, [size]);
  return (
    <div className="flex flex-row flex-wrap bg-grey-200 rounded-sm text-purple-100">
      <button
        aria-label={decrementText}
        className={BASE_BUTTON}
        onClick={handleClickDecrement}
        disabled={disabledDecrement}
      >
        <Icon name="minus" size={computedSize} color="text-purple-100" />
      </button>
      <p className={`${BASE_QUANTITY} ${computedTextSize}`}>{quantity}</p>

      <button
        aria-label={incrementText}
        className={BASE_BUTTON}
        onClick={handleClickIncrement}
        disabled={disabledIncrement}
      >
        <Icon name="plus" size={computedSize} />
      </button>
    </div>
  );
};
