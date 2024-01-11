import { useMemo } from 'react';
import { ButtonProps, NamingClass, ButtonSize } from './Button.types';
import { Icon, Badge, BadgeClass } from '@/components';

const getSizeClasses = (size: ButtonSize) => {
  switch (size) {
    case ButtonSize.xsmall: {
      return 'px-2 py-1.5';
    }
    case ButtonSize.small: {
      return 'px-4 py-2.5';
    }
    case ButtonSize.large: {
      return 'px-12 py-3';
    }
    default: {
      return 'px-8 py-3';
    }
  }
};

const getClasses = (namingClass?: NamingClass) => {
  switch (namingClass) {
    case 'primary': {
      return 'text-white-100 bg-yellow-100 border-yellow-100 hover:bg-yellow-200';
    }
    case 'light-primary': {
      return 'text-yellow-100 bg-yellow-50 border-yellow-50';
    }
    case 'secondary': {
      return 'text-white-100 bg-purple-200 border-purple-200] hover:bg-purple-100';
    }
    case 'light-secondary': {
      return 'text-black-100 bg-purple-50 border-purple-50';
    }
    case 'light-dark-secondary': {
      return 'text-purple-100 bg-purple-50 border-purple-50';
    }
    default: {
      return 'text-black-100 bg-grey-200 border-grey-200 hover:bg-grey-300 hover:bg-purple-50 border hover:border-purple-100';
    }
  }
};

const BASE_BUTTON_CLASSES =
  'relative flex items-center gap-3 cursor-pointer border-1 font-normal leading-none inline-block uppercase rounded-sm text-sm disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none';

export const Button = ({
  classOption = NamingClass.default,
  badgeClass = BadgeClass.light,
  size = ButtonSize.medium,
  label = '',
  hasIcon = false,
  hasBadge = false,
  quantity = 0,
  nameIcon,
  sizeIcon = 24,
  colorIcon,
  onClick = () => undefined,
  ...props
}: ButtonProps) => {
  const computedClasses = useMemo(() => {
    const modeClass = getClasses(classOption);
    const sizeClass = getSizeClasses(size);

    return [modeClass, sizeClass].join(' ');
  }, [classOption, size]);

  const ICON_VALIDATION = hasIcon && nameIcon;
  const QUANTITY_VALIDATION = hasBadge && quantity > 0;

  return (
    <button
      type="button"
      className={`${BASE_BUTTON_CLASSES} ${computedClasses}`}
      onClick={onClick}
      {...props}
    >
      {QUANTITY_VALIDATION && (
        <div className="absolute -top-2 -right-1.5">
          <Badge label={quantity} namingClass={badgeClass} />
        </div>
      )}
      {ICON_VALIDATION && (
        <Icon name={nameIcon} size={sizeIcon} color={colorIcon} />
      )}
      {label}
    </button>
  );
};
