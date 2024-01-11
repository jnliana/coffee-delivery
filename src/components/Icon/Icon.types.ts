enum EIcons {
  'bank',
  'bill',
  'box',
  'cart',
  'card',
  'clock',
  'coffee',
  'locationOutline',
  'location',
  'minus',
  'money',
  'plus',
  'trash',
}

export type TIconName = keyof typeof EIcons;
export type IIcons = Record<TIconName, React.FC<React.SVGProps<SVGSVGElement>>>;

export interface IIconProps extends React.SVGProps<SVGSVGElement> {
  name: TIconName;
  ['aria-label']?: string;
  ['aria-hidden']?: boolean;
  size?: number;
  color?: string;
  className?: string;
}
