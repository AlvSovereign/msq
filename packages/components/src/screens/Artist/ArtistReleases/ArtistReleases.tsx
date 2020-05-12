import React from 'react';
import { Image, View, TouchableOpacity, Animated } from 'react-native';
import { Row, Column, Typography } from '../../../ui';
import theme from '../../../theme/theme';
import { _generateStyles } from './_generateStyles';
import { _generateAnimations } from '../../../ui/Button/_generateAnimations';

const Image1 = require('../../../assets/images/cover-bg.png');
const Image2 = require('../../../assets/images/cover-bg-1.png');
const Image3 = require('../../../assets/images/cover-bg-2.png');
const Image4 = require('../../../assets/images/cover-bg-3.png');

const ArtistReleases = ({  }: ArtistReleasesProps) => {
  const animation = _generateAnimations();

  return (
    <Row horizontalPadding='md' orientation='column' style={styles.container}>
      <Column sm={4} md={8} lg={12}>
        <Typography variant='h5' gutterBottom='xs'>
          {'Artist Releases'}
        </Typography>
      </Column>
      <Row orientation='row' wrap spacing='xs'>
        <Column
          sm={2}
          md={8}
          lg={12}
          gutterBottom='xs'
          style={styles.cardContainer}>
          <TouchableOpacity
            activeOpacity={0.6}
            onPressIn={animation.handlePressIn}
            onPressOut={animation.handlePressOut}
            onPress={() => {}}>
            <Animated.View
              style={{ transform: [{ scale: animation.scaleValue }] }}>
              <Image
                resizeMode='cover'
                source={Image1}
                style={styles.releaseCover}
              />
              <Typography
                color='black'
                gutterBottom='xxs'
                textAlign='center'
                variant='label'>
                {'Be You'}
              </Typography>
              <Typography
                color='lightGrey'
                gutterBottom='xxs'
                textAlign='center'
                variant='body2'>
                {'DJ Omni, DJ Ruivo'}
              </Typography>
              <Typography color='lightGrey' textAlign='center' variant='body2'>
                {'13 Tracks'}
              </Typography>
            </Animated.View>
          </TouchableOpacity>
        </Column>
        <Column
          sm={2}
          md={8}
          lg={12}
          gutterBottom='xs'
          style={styles.cardContainer}>
          <Image
            resizeMode='cover'
            source={Image2}
            style={styles.releaseCover}
          />
          <Typography
            color='black'
            gutterBottom='xxs'
            textAlign='center'
            variant='label'>
            {'Not This Time'}
          </Typography>
          <Typography
            color='lightGrey'
            gutterBottom='xxs'
            textAlign='center'
            variant='body2'>
            {'DJ Omni'}
          </Typography>
          <Typography color='lightGrey' textAlign='center' variant='body2'>
            {'4 Tracks'}
          </Typography>
        </Column>
        <Column
          sm={2}
          md={8}
          lg={12}
          gutterBottom='xs'
          style={styles.cardContainer}>
          <Image
            resizeMode='cover'
            source={Image3}
            style={styles.releaseCover}
          />
          <Typography
            color='black'
            gutterBottom='xxs'
            textAlign='center'
            variant='label'>
            {'Spark'}
          </Typography>
          <Typography
            color='lightGrey'
            gutterBottom='xxs'
            textAlign='center'
            variant='body2'>
            {'DJ Omni, DJ Visser'}
          </Typography>
          <Typography color='lightGrey' textAlign='center' variant='body2'>
            {'7 Tracks'}
          </Typography>
        </Column>
        <Column
          sm={2}
          md={8}
          lg={12}
          gutterBottom='xs'
          style={styles.cardContainer}>
          <Image
            resizeMode='cover'
            source={Image4}
            style={styles.releaseCover}
          />
          <Typography
            color='black'
            gutterBottom='xxs'
            textAlign='center'
            variant='label'>
            {'China Town'}
          </Typography>
          <Typography
            color='lightGrey'
            gutterBottom='xxs'
            textAlign='center'
            variant='body2'>
            {'DJ Omni'}
          </Typography>
          <Typography color='lightGrey' textAlign='center' variant='body2'>
            {'1 Track'}
          </Typography>
        </Column>
      </Row>
    </Row>
  );
};

const styles = _generateStyles(theme);

export default ArtistReleases;

interface ArtistReleasesProps {}
