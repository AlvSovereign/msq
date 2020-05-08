import React, { useEffect, useLayoutEffect } from 'react';
import { useState } from 'react';
import { useDimensions } from '@react-native-community/hooks';

const useResponsive = () => {
  const { width } = useDimensions().window;
  const [size, setSize] = useState<TBreakpoint>('sm');

  const windowSize =
    width < 600 ? 'sm' : width > 600 && width < 840 ? 'md' : 'lg';

  useLayoutEffect(() => {
    setSize(windowSize);
  }, [windowSize]);

  return size;
};

export default useResponsive;

export type TBreakpoint = 'sm' | 'md' | 'lg';
