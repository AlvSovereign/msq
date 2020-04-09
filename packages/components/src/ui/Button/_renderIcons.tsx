import React from 'react';
import { Icon, Variant } from './Button';
import { ChevronRight } from '../../assets/icons';

const renderIcon = (icon: Icon, styles: any, theme: any, variant: Variant) => {
  switch (icon) {
    case 'chevronRight':
      return (
        <ChevronRight
          fill={
            variant === 'primary' ? theme.colors.white : theme.colors.blue[500]
          }
          style={styles.icon}
        />
      );
    default:
      return null;
  }
};

export { renderIcon };
