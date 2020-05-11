import { StyleSheet } from 'react-native';
import { Orientation } from './Row';
import { gutterBottomStyles, TGutterBottom } from '../utils/commonStyles';

const generateStyles = (orientation: Orientation) =>
  StyleSheet.create({
    ...gutterBottomStyles,
    gridContainer: {
      alignItems: 'center',
      flexDirection: orientation,
    },
    view: {
      flex: 1,
    },
  });

export { generateStyles };
