import React from 'react';
import theme from './theme';
import { useWindowSize } from './hooks';

// Responsive

const MsqThemeContext = React.createContext(theme);

export { MsqThemeContext, theme, useWindowSize };
