import { color, TColor } from './styles/color';
import { typography, TTypography } from './styles/typography';
import { spacing, TSpacing } from './styles/spacing';

const theme: ITheme = {
  typography,
  color,
  spacing,
};

export default theme;

export interface ITheme {
  typography: TTypography;
  color: TColor;
  spacing: TSpacing;
}
