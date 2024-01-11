export enum BadgeClass {
  primary = 'primary',
  secondary = 'secondary',
  light = 'light',
}

export interface BadgeProps {
  label: string | number;
  namingClass?: BadgeClass;
}
