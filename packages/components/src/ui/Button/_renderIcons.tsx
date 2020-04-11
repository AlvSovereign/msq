import React from 'react';
import { Icon, Variant } from './Button';
import { ChevronRight } from '../../assets/icons';

const _renderIcon = ({
  icon,
  styles,
  variant,
  isDisabled,
  colors: { BLUE_500, WHITE }
}: IRenderIcon) => {
  let fillColor;

  if (isDisabled) {
    fillColor = WHITE;
  } else {
    variant === 'primary' ? (fillColor = WHITE) : (fillColor = BLUE_500);
  }

  switch (icon) {
    case 'chevronRight':
      return <ChevronRight fill={fillColor} style={styles} />;
    default:
      return null;
  }
};

export { _renderIcon };

interface IRenderIcon {
  icon: Icon;
  styles: any;
  variant: Variant;
  isDisabled: boolean;
  colors: { [key: string]: any };
}
