import React, { useContext, useEffect, useLayoutEffect, useState } from 'react';
import {
  Image,
  View,
  TouchableWithoutFeedback,
  Text,
  TouchableHighlight,
} from 'react-native';
import {
  MsqThemeContext,
  useResponsive,
} from 'components/src/theme/ThemeContext';
import { ProgressBar, Row, TouchableSvg, Typography } from '../..';
import { _generateStyles } from './_generateStyles';
import { _renderIcon } from '../../../assets/icons';
import {
  MsqPlayerContext,
  PlayerActionTypes,
  PlayerState,
} from '../../molecules/AppFrame/AppFrame';
import useMsqPlayer from '../../../hooks/useMsqPlayer/useMsqPlayer.web';
import { IconKey } from '../../../assets/icons/_renderIcon';
import { VolumeControl } from './VolumeControls/VolumeControl';

const coverImage = require('../../../assets/images/cover-bg-2.png');
const tracks = [
  {
    _id: '1',
    id: '',
    createdAt: '',
    performedBy: 'DJ Omni',
    filename: 'Prubulema Tarraxa - DJ NiceLife.mp3',
    title: 'Prubulema Tarraxa',
    duration: 183.7714375,
    url: require('../../../assets/audio/Prubulema Tarraxa - DJ NiceLife.mp3'),
  },
  {
    _id: '2',
    id: '',
    createdAt: '',
    performedBy: 'DJ Omni',
    filename: 'YALLA BINA.mp3',
    title: 'Yalla Bina',
    duration: 187.062875,
    url: require('../../../assets/audio/YALLA BINA.mp3'),
  },
];

const MsqPlayer = ({  }: PlayerProps) => {
  const breakpoint = useResponsive();
  const theme = useContext(MsqThemeContext);
  const styles = _generateStyles(breakpoint, theme);
  const { BLUE_500, LIGHTGREY_300 } = theme.color;
  const { dispatch, internalState } = useContext(MsqPlayerContext);

  useEffect(() => {
    dispatch({
      type: PlayerActionTypes.SET_PLAYLIST,
      payload: {
        playlist: tracks,
        playerState: PlayerState.IS_PAUSED,
      },
    });
  }, []);

  const { playlist, playerState } = internalState;
  const [
    { duration, performedBy, title },
    { isPlaying, play, pause, seekTime, seekTo, skip, volume, volumeTo },
  ] = useMsqPlayer(playlist);

  const playAudio = () => {
    dispatch({ type: PlayerActionTypes.PLAY });
    play();
  };

  const pauseAudio = () => {
    dispatch({ type: PlayerActionTypes.PAUSE });
    pause();
  };

  const skipPrev = async () => {
    await dispatch({ type: PlayerActionTypes.PREV });

    // await dispatch({
    //   type: PlayerActionTypes.SET_NOW_PLAYING,
    //   payload: tracks[nowPlayingIndex - 1],
    // });
    skip('prev');

    await dispatch({ type: PlayerActionTypes.PLAY });
  };

  const skipNext = async () => {
    await dispatch({
      type: PlayerActionTypes.NEXT,
    });

    skip('next');

    await dispatch({ type: PlayerActionTypes.PLAY });
  };

  const [showVolumeControls, setShowVolumeControls] = useState<boolean>(false);

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
            {title}
          </Typography>
          <Typography variant='body2' color='lightGrey'>
            {performedBy}
          </Typography>
        </View>
        {breakpoint !== 'sm' && (
          <View style={styles.controlsContainer}>
            <Row
              orientation='row'
              align='center'
              justify='center'
              gutterBottom='xs'>
              <TouchableSvg
                fill={LIGHTGREY_300}
                icon='skipPrevious'
                onPress={skipPrev}
                interactionFill={BLUE_500}
              />
              <TouchableSvg
                fill={isPlaying ? BLUE_500 : LIGHTGREY_300}
                icon={isPlaying ? 'playerPause' : 'playerPlay'}
                onPress={isPlaying ? pauseAudio : playAudio}
                interactionFill={BLUE_500}
                style={styles.playIcon}
              />
              <TouchableSvg
                fill={LIGHTGREY_300}
                icon='skipNext'
                onPress={skipNext}
                interactionFill={BLUE_500}
              />
            </Row>
            <ProgressBar
              duration={duration}
              seekTime={seekTime}
              seekTo={seekTo}
            />
          </View>
        )}
        <Row
          orientation='row'
          justify='flex-end'
          style={styles.secondaryControlsContainer}>
          {breakpoint !== 'sm' ? (
            <>
              <TouchableSvg
                fill={LIGHTGREY_300}
                icon={'shuffle'}
                interactionFill={BLUE_500}
                onPress={() => {}}
                style={styles.secondaryControlIcon}
              />
              <TouchableSvg
                fill={LIGHTGREY_300}
                icon={'repeat'}
                interactionFill={BLUE_500}
                onPress={() => {}}
                style={styles.secondaryControlIcon}
              />
              <TouchableHighlight onPress={() => setShowVolumeControls(true)}>
                <>
                  {showVolumeControls && (
                    <VolumeControl volume={volume} volumeTo={volumeTo} />
                  )}
                  {/* <TouchableSvg
                    fill={LIGHTGREY_300}
                    icon={'volumeUp'}
                    interactionFill={BLUE_500}
                    style={styles.secondaryControlIcon}
                  /> */}
                  <Text>Loading</Text>
                </>
              </TouchableHighlight>
              <TouchableSvg
                fill={LIGHTGREY_300}
                icon={'playlistAdd'}
                interactionFill={BLUE_500}
                onPress={() => {}}
              />
            </>
          ) : (
            <TouchableSvg
              fill={isPlaying ? BLUE_500 : LIGHTGREY_300}
              icon={isPlaying ? 'playerPause' : 'playerPlay'}
              onPress={isPlaying ? pauseAudio : playAudio}
              interactionFill={BLUE_500}
              style={styles.playIcon}
            />
          )}
        </Row>
      </Row>
    </Row>
  );
};

export default MsqPlayer;

interface PlayerProps {}
