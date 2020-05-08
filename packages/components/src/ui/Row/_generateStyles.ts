import { StyleSheet } from 'react-native';
import { Orientation } from './Row';
import { getGutterBottomWidth, TGutterBottom } from '../utils/commonStyles';

const generateStyles = (
  gutterBottom: TGutterBottom | undefined,
  orientation: Orientation
) =>
  StyleSheet.create({
    gridContainer: {
      flexDirection: orientation,
      marginBottom: gutterBottom ? getGutterBottomWidth(gutterBottom) : 0,
    },
    view: {
      flex: 1,
    },
  });

export { generateStyles };
