import React, { useContext } from 'react';
import { Image, View } from 'react-native';
import {
  MsqThemeContext,
  useResponsive,
} from 'components/src/theme/ThemeContext';
import { Row, TouchableSvg, Typography } from '../..';
import { _generateStyles } from './_generateStyles';
import { _renderIcon } from '../../../assets/icons';
import Player from './Player.web';
import {
  MsqPlayerContext,
  PlayerActionTypes,
  PlayerState,
} from '../../molecules/AppFrame/AppFrame';

const coverImage = require('../../../assets/images/cover-bg-2.png');
const track = require('../../../assets/audio/Prubulema Tarraxa - DJ NiceLife.mp3');

const MsqPlayer = ({  }: PlayerProps) => {
  const breakpoint = useResponsive();
  const { dispatch, internalState } = useContext(MsqPlayerContext);
  const { playerState } = internalState;
  const theme = useContext(MsqThemeContext);
  const styles = _generateStyles(breakpoint, theme);
  const { BLUE_500, LIGHTGREY_300 } = theme.color;
  const playerRef = React.createRef<HTMLAudioElement>();

  const play = () => {
    dispatch({ type: PlayerActionTypes.PLAY });
  };

  const pause = () => {
    dispatch({ type: PlayerActionTypes.PAUSE });
  };

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
              icon={
                playerState === PlayerState.IS_PAUSED ||
                playerState === PlayerState.IS_STOPPED
                  ? 'playerPlay'
                  : 'playerPause'
              }
              onPress={
                playerState === PlayerState.IS_PAUSED ||
                playerState === PlayerState.IS_STOPPED
                  ? play
                  : pause
              }
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
            <Player currentState={playerState} ref={playerRef} src={track} />
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

export default MsqPlayer;

interface PlayerProps {}
