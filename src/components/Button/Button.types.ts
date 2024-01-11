import { TIconName, BadgeClass } from '@/components';
import { ButtonHTMLAttributes } from 'react';

export enum ButtonSize {
  xsmall = 'xsmall',
  small = 'small',
  large = 'large',
  medium = 'medium',
}

export enum NamingClass {
  primary = 'primary',
  secondary = 'secondary',
  lightPrimary = 'light-primary',
  lightSecondary = 'light-secondary',
  lightDarkSecondary = 'light-dark-secondary',
  default = 'default',
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  classOption?: NamingClass;
  badgeClass?: BadgeClass;
  size?: ButtonSize;
  hasIcon?: boolean;
  hasBadge?: boolean;
  nameIcon?: TIconName;
  sizeIcon?: number;
  quantity?: number;
  colorIcon?: string;
  label?: string;
}
