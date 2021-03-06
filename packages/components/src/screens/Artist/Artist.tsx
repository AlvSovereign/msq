import React, { useState } from 'react';
import { Image, Text, StatusBar, ScrollView } from 'react-native';
import { useDimensions } from 'react-native-web-hooks';
import LinearGradient from 'react-native-linear-gradient';
import { useQuery } from '@apollo/react-hooks';
import { GET_ME } from '../../graphql/queries';
import {
  ArtistReleases,
  Button,
  Column,
  CountryFlags,
  Row,
  Typography,
} from '../../ui';
import theme from '../../theme/theme';
import { _generateStyles } from './_generateStyles';
import { ArtistPopluarTracks } from './ArtistPopluarTracks/ArtistPopluarTracks';

const profileImage = require('../../assets/images/me_square.png');

const Artist = () => {
  const { data, loading, error } = useQuery(GET_ME);

  if (loading || !data) {
    return <Text>{'Loading'}</Text>;
  }

  const {
    biography,
    countries,
    createdAt,
    name,
    tag,
    socialLinks,
  } = data.me.artist;
  const { DARKGREY_700 } = theme.color;

  const [gradientStart, setGradientStart] = useState<number>(0);

  const getImageDimensions = ({ nativeEvent }: any) => {
    setGradientStart(nativeEvent.layout.width / 2);
  };

  const { width } = useDimensions().window;
  const styles = _generateStyles(theme, gradientStart);

  return (
    <>
      <StatusBar barStyle='light-content' />
      <ScrollView style={styles.page}>
        <Image
          onLayout={getImageDimensions}
          resizeMode='contain'
          source={profileImage}
          style={[styles.profileImage, { height: width }]}
        />
        <LinearGradient
          colors={['transparent', `${DARKGREY_700}99`]}
          locations={[0, 0.5]}>
          <Row style={styles.contentContainer}>
            <Column sm={4} md={8} lg={12} spacing='md'>
              <Typography variant='h1' color='white'>
                {name}
              </Typography>
              {countries && (
                <CountryFlags countries={countries} gutterBottom='xs' />
              )}
              <Typography variant='body1' style={styles.tag} gutterBottom='md'>
                {tag}
              </Typography>
              <Row orientation='row' gutterBottom='lg'>
                <Column sm={2} md={4} lg={6}>
                  <Button
                    label='Play'
                    onPress={() => {}}
                    rightIcon='play'
                    style={styles.playButton}
                    variant='primary'
                  />
                </Column>
                <Column sm={1} md={2} lg={3} style={{ flexDirection: 'row' }}>
                  <Button
                    onPress={() => {}}
                    rightIcon='bookmark'
                    variant='secondary'
                    style={styles.shareButton}
                  />
                  <Button
                    onPress={() => {}}
                    rightIcon='share'
                    variant='secondary'
                  />
                </Column>
              </Row>
              <Row orientation='row'>
                <Column sm={1} md={2} lg={3}>
                  <Typography variant='small' color='white' gutterBottom='xxs'>
                    {'Followers'}
                  </Typography>
                  <Typography variant='h3' color='white'>
                    {'345k'}
                  </Typography>
                </Column>
                <Column sm={1} md={2} lg={3}>
                  <Typography variant='small' color='white' gutterBottom='xxs'>
                    {'Listens'}
                  </Typography>
                  <Typography variant='h3' color='white'>
                    {'1.3m'}
                  </Typography>
                </Column>
                <Column sm={1} md={2} lg={3}>
                  <Typography variant='small' color='white' gutterBottom='xxs'>
                    {'Tracks'}
                  </Typography>
                  <Typography variant='h3' color='white'>
                    {'98'}
                  </Typography>
                </Column>
              </Row>
            </Column>
          </Row>
        </LinearGradient>
        <ArtistPopluarTracks />
        <ArtistReleases />
      </ScrollView>
    </>
  );
};

export default Artist;
