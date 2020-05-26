import React from 'react';
import {
  Image,
  View,
  TouchableOpacity,
  Animated,
  SectionList,
} from 'react-native';
import { Row, Column, Typography } from '../../../ui';
import theme from '../../../theme/theme';
import { _generateStyles } from './_generateStyles';
import { _generateAnimations } from '../../../ui/atom/Button/_generateAnimations';

const Image1 = require('../../../assets/images/cover-bg.png');
const Image2 = require('../../../assets/images/cover-bg-1.png');
const Image3 = require('../../../assets/images/cover-bg-2.png');
const Image4 = require('../../../assets/images/cover-bg-3.png');

const ArtistReleases = ({  }: ArtistReleasesProps) => {
  const animation = _generateAnimations();

  const styles = _generateStyles(theme);

  const data: any = [
    {
      _id: 1,
      img: Image1,
      title: 'Be You',
      artists: 'DJ Omni, DJ Ruivo',
      noOfTracks: 13,
    },
    {
      _id: 2,
      img: Image2,
      title: 'Be There',
      artists: 'DJ Omni',
      noOfTracks: 6,
    },
  ];

  const ReleaseCard = (item: any) => {
    const { artists, img, noOfTracks, title } = item;

    return (
      <TouchableOpacity
        activeOpacity={0.6}
        onPressIn={animation.handlePressIn}
        onPressOut={animation.handlePressOut}
        onPress={() => {}}>
        <Animated.View style={{ transform: [{ scale: animation.scaleValue }] }}>
          <Image
            resizeMode='contain'
            source={img}
            style={styles.releaseCover}
          />
          <Typography
            color='black'
            gutterBottom='xxs'
            textAlign='center'
            variant='label'>
            {title}
          </Typography>
          <Typography
            color='lightGrey'
            gutterBottom='xxs'
            textAlign='center'
            variant='body2'>
            {artists}
          </Typography>
          <Typography color='lightGrey' textAlign='center' variant='body2'>
            {noOfTracks}
          </Typography>
        </Animated.View>
      </TouchableOpacity>
    );
  };

  return (
    <Row horizontalPadding='md' orientation='column' style={styles.container}>
      <Column sm={4} md={8} lg={12}>
        <Typography variant='h5' gutterBottom='sm'>
          {'Artist Releases'}
        </Typography>
      </Column>
      <Row orientation='row' spacing='xs'>
        {data.map((item: any) => (
          <Column
            key={item._id}
            sm={2}
            md={4}
            lg={3}
            gutterBottom='xs'
            style={styles.cardContainer}>
            <ReleaseCard {...item} />
          </Column>
        ))}
      </Row>
    </Row>
  );
};

export default ArtistReleases;

interface ArtistReleasesProps {}
