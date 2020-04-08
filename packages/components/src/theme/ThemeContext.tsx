import React from 'react';
import theme from './theme';
import { useResponsive } from './hooks';

// Responsive

const MsqThemeContext = React.createContext(theme);

export { MsqThemeContext, theme, useResponsive };
