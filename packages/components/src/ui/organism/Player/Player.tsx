import React, { useContext, useRef } from 'react';
import { Image, View } from 'react-native';
import ReactAudioPlayer from 'react-audio-player';
import {
  MsqThemeContext,
  useResponsive,
} from 'components/src/theme/ThemeContext';
import { Button, Row, TouchableSvg, Typography } from '../..';
import { _generateStyles } from './_generateStyles';
import { _renderIcon } from '../../../assets/icons';

const coverImage = require('../../../assets/images/cover-bg-2.png');
const track = require('../../../assets/audio/Prubulema Tarraxa - DJ NiceLife.mp3');

const Player = ({  }: PlayerProps) => {
  const breakpoint = useResponsive();
  const theme = useContext(MsqThemeContext);
  const styles = _generateStyles(breakpoint, theme);
  const { BLUE_500, LIGHTGREY_300 } = theme.color;
  const playerRef = useRef(null);

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
        <View>
          <Row orientation='row' align='center' justify='space-between'>
            <TouchableSvg
              fill={LIGHTGREY_300}
              icon='skipNext'
              onPress={() => {}}
              interactionFill={BLUE_500}
            />
            <TouchableSvg
              fill={LIGHTGREY_300}
              icon='playerPlay'
              onPress={() => {}}
              interactionFill={BLUE_500}
            />
            <TouchableSvg
              fill={LIGHTGREY_300}
              icon='skipPrevious'
              onPress={() => {}}
              interactionFill={BLUE_500}
            />
          </Row>
          <Row orientation='row' align='center' justify='center'>
            <ReactAudioPlayer ref={playerRef} src={track} autoPlay controls />
          </Row>
        </View>
        <Row orientation='row'>
          <TouchableSvg
            fill={LIGHTGREY_300}
            icon='shuffle'
            interactionFill={BLUE_500}
            onPress={() => {}}
          />
          <TouchableSvg
            fill={LIGHTGREY_300}
            icon='repeat'
            interactionFill={BLUE_500}
            onPress={() => {}}
          />
          <TouchableSvg
            fill={LIGHTGREY_300}
            icon='volumeUp'
            interactionFill={BLUE_500}
            onPress={() => {}}
          />
          <TouchableSvg
            fill={LIGHTGREY_300}
            icon='playlistAdd'
            interactionFill={BLUE_500}
            onPress={() => {}}
          />
        </Row>
      </Row>
    </Row>
  );
};

export default Player;

interface PlayerProps {}
