import React from 'react';
import { IIconProps } from '.';
import { icons } from '@/assets/icons';

const BASE_ICON_WRAPPER = 'flex items-center justify-center';

export const Icon: React.FC<IIconProps> = ({
  name,
  'aria-label': ariaLabel = 'Ícone',
  'aria-hidden': ariaHidden = true,
  size = 24,
  color = '',
}) => {
  const ImportedIcon = icons[name];
  return (
    <div className={`${BASE_ICON_WRAPPER}`} data-testid={`icon-${name}`}>
      <ImportedIcon
        aria-label={ariaLabel}
        aria-hidden={ariaHidden}
        role="img"
        color={color}
        width={size}
        height={size}
        name={name}
      />
    </div>
  );
};
