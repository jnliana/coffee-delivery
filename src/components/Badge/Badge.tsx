import { useMemo } from 'react';
import { BadgeClass, BadgeProps } from '.';

const getClasses = (namingClass?: BadgeClass) => {
  switch (namingClass) {
    case BadgeClass.primary: {
      return 'bg-yellow-100 text-white-100';
    }
    case BadgeClass.secondary: {
      return 'text-purple-100 bg-purple-50';
    }
    case BadgeClass.light: {
      return 'text-black-100 bg-grey-100';
    }
    default: {
      return 'bg-yellow-50 text-yellow-100';
    }
  }
};

const BASE_BADGE = 'text-xs font-medium px-2 py-1 rounded-full';

export const Badge = ({ label, namingClass }: BadgeProps) => {
  const computedClasses = useMemo(() => {
    const modeClass = getClasses(namingClass);
    return [modeClass];
  }, [namingClass]);
  return <span className={`${BASE_BADGE} ${computedClasses}`}>{label}</span>;
};
