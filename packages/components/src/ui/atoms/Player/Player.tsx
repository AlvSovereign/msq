import React, { useContext } from 'react';
import { Image, View } from 'react-native';
import {
  MsqThemeContext,
  useResponsive,
} from 'components/src/theme/ThemeContext';
import { Row } from '../..';
import { _generateStyles } from './_generateStyles';
import Typography from '../../Typography/Typography';
import { _renderIcon } from '../../../assets/icons';
import Button from '../../Button/Button';

const coverImage = require('../../../assets/images/cover-bg-2.png');

const Player = ({  }: PlayerProps) => {
  const breakpoint = useResponsive();
  const theme = useContext(MsqThemeContext);
  const styles = _generateStyles(breakpoint, theme);
  const { LIGHTGREY_500 } = theme.color;

  return (
    <Row orientation='row' style={styles.playerContainer}>
      <Image source={coverImage} style={styles.coverImage} />
      <Row
        orientation='row'
        style={styles.contentContainer}
        align='center'
        horizontalPadding='sm'>
        <View style={styles.trackDetails}>
          <Typography variant='title' color='black' gutterBottom='xxs'>
            {'Be Honest'}
          </Typography>
          <Typography variant='body2' color='lightGrey'>
            {'Swimming Against Waves'}
          </Typography>
        </View>
        <View style={styles.trackDetails}>
          <Row orientation='row'>
            <Button
              leftIcon='skipNext'
              onPress={() => {}}
              style={styles.icon}
              variant='transparent'
            />
            <Button
              leftIcon='playerPlay'
              onPress={() => {}}
              style={styles.icon}
              variant='transparent'
            />
            <Button
              leftIcon='skipPrevious'
              onPress={() => {}}
              style={styles.icon}
              variant='transparent'
            />
          </Row>
          <Row orientation='row'>
            <Typography variant='body2' color='lightGrey'>
              {'Swimming Against Waves'}
            </Typography>
          </Row>
        </View>
        <Row orientation='row'>
          <Button
            leftIcon='shuffle'
            onPress={() => {}}
            style={styles.icon}
            variant='transparent'
          />
          <Button
            leftIcon='repeat'
            onPress={() => {}}
            style={styles.icon}
            variant='transparent'
          />
          <Button
            leftIcon='volumeUp'
            onPress={() => {}}
            style={styles.icon}
            variant='transparent'
          />
          <Button
            leftIcon='playlistAdd'
            onPress={() => {}}
            style={styles.icon}
            variant='transparent'
          />
        </Row>
      </Row>
    </Row>
  );
};

export default Player;

interface PlayerProps {}
