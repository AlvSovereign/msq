import React, { useContext } from 'react';
import { Image, View } from 'react-native';
import {
  MsqThemeContext,
  useResponsive,
} from 'components/src/theme/ThemeContext';
import { Row } from '../..';
import { _generateStyles } from './_generateStyles';
import Typography from '../../Typography/Typography';

const coverImage = require('../../../assets/images/cover-bg-2.png');

const Player = ({  }: PlayerProps) => {
  const breakpoint = useResponsive();
  const theme = useContext(MsqThemeContext);

  const styles = _generateStyles(breakpoint, theme);

  return (
    <Row orientation='row' style={styles.playerContainer}>
      <Image source={coverImage} style={styles.coverImage} />
      <Row orientation='row'>
        <View>
          <Typography variant='title' color='black'>
            {'Be Honest'}
          </Typography>
          <Typography variant='body2' color='lightGrey'>
            {'Swimming Against Waves'}
          </Typography>
        </View>
        <View />
        <View />
      </Row>
    </Row>
  );
};

export default Player;

interface PlayerProps {}
