import { StyleSheet } from 'react-native';
import { ITheme } from '../../theme/theme';
import { TBreakpoint } from '../../theme/hooks/useResponsive';

const _generateStyles = (theme: ITheme, windowSize: TBreakpoint) => {
  const { BLACK, BLUE_500, ERROR, LIGHTGREY_500, WHITE } = theme.color;
  const { BODY2, BUTTON, LABEL, HERO, H1, H2 } = theme.typography;

  return StyleSheet.create({
    body2: {
      ...BODY2,
    },
    hero: {
      ...HERO[windowSize === 'sm' ? 1 : 0],
    },
    h1: {
      ...H1[windowSize === 'sm' ? 1 : 0],
    },
    h2: {
      ...H2[windowSize === 'sm' ? 1 : 0],
    },
    button: {
      ...BUTTON,
    },
    label: { ...LABEL },
    black: { color: BLACK },
    blue: { color: BLUE_500 },
    error: { color: ERROR },
    lightGrey: { color: LIGHTGREY_500 },
    white: { color: WHITE },
  });
};

export { _generateStyles };
