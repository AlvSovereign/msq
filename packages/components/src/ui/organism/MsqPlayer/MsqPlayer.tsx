import React, { useContext, useEffect, useLayoutEffect } from 'react';
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
const tracks = [
  {
    _id: '1',
    id: '',
    createdAt: '',
    filename: '',
    title: 'Prubulema Tarraxa',
    length: '',
    url: require('../../../assets/audio/Prubulema Tarraxa - DJ NiceLife.mp3'),
  },
  {
    _id: '2',
    id: '',
    createdAt: '',
    filename: '',
    title: 'Yalla Bina',
    length: '',
    url: require('../../../assets/audio/YALLA BINA.mp3'),
  },
];

const MsqPlayer = ({  }: PlayerProps) => {
  const breakpoint = useResponsive();
  const { dispatch, internalState } = useContext(MsqPlayerContext);
  const { nowPlaying, playlist, playerState } = internalState;
  const theme = useContext(MsqThemeContext);
  const styles = _generateStyles(breakpoint, theme);
  const { BLUE_500, LIGHTGREY_300 } = theme.color;

  useEffect(() => {
    dispatch({ type: PlayerActionTypes.SET_PLAYLIST, payload: tracks });
    dispatch({ type: PlayerActionTypes.SET_NOW_PLAYING, payload: tracks[0] });
  }, []);

  useLayoutEffect(() => {
    console.log('playerState: ', playerState);
  }, [playerState]);

  const nowPlayingIndex = playlist.findIndex(
    (item) => item._id === nowPlaying._id
  );

  const play = () => {
    dispatch({ type: PlayerActionTypes.PLAY });
  };

  const pause = () => {
    dispatch({ type: PlayerActionTypes.PAUSE });
  };

  const skipPrev = async () => {
    await dispatch({ type: PlayerActionTypes.PREV });

    await dispatch({
      type: PlayerActionTypes.SET_NOW_PLAYING,
      payload: tracks[nowPlayingIndex - 1],
    });

    await dispatch({ type: PlayerActionTypes.PLAY });
  };

  const skipNext = async () => {
    await dispatch({
      type: PlayerActionTypes.NEXT,
    });

    await dispatch({
      type: PlayerActionTypes.SET_NOW_PLAYING,
      payload: tracks[nowPlayingIndex + 1],
    });

    await dispatch({ type: PlayerActionTypes.PLAY });
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
            {nowPlaying.title}
          </Typography>
        </View>
        <View>
          <Row orientation='row' align='center' justify='space-between'>
            <TouchableSvg
              fill={LIGHTGREY_300}
              icon='skipPrevious'
              onPress={skipPrev}
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
              icon='skipNext'
              onPress={skipNext}
              interactionFill={BLUE_500}
            />
          </Row>
          <Row orientation='row' align='center' justify='center'>
            <Player
              currentState={playerState}
              src={internalState.nowPlaying.url}
            />
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
