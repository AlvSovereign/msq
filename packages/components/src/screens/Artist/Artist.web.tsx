import React from 'react';
import { Image, Text, StatusBar, ScrollView } from 'react-native';
import LinearGradient from 'react-native-web-linear-gradient';
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
import { _generateStyles } from './_generateStyles.web';
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
  const styles = _generateStyles(theme);

  return (
    <>
      <StatusBar barStyle='light-content' />
      <ScrollView style={styles.page}>
        <Row orientation='row' style={styles.heroContainer}>
          <Image
            resizeMode='contain'
            source={profileImage}
            style={styles.profileImage}
          />
          <LinearGradient
            start={{ x: 1, y: 0.5 }}
            end={{ x: 0, y: 0.5 }}
            colors={['transparent', `${DARKGREY_700}99`]}
            locations={[0, 0.5]}
            style={styles.contentContainer}>
            <Row>
              <Column sm={4} md={8} lg={8} spacing='md'>
                <Typography variant='h1' color='white'>
                  {name}
                </Typography>
                {countries && (
                  <CountryFlags countries={countries} gutterBottom='xs' />
                )}
                <Typography
                  variant='body1'
                  style={styles.tag}
                  gutterBottom='md'>
                  {tag}
                </Typography>
                <Row orientation='row' gutterBottom='lg'>
                  <Button
                    label='Play'
                    onPress={() => {}}
                    style={{ marginRight: 4 }}
                    rightIcon='play'
                    variant='primary'
                  />
                  <Button
                    onPress={() => {}}
                    rightIcon='bookmark'
                    style={{ marginRight: 4 }}
                    variant='secondary'
                  />
                  <Button
                    onPress={() => {}}
                    rightIcon='share'
                    variant='secondary'
                  />
                </Row>
                <Row orientation='row' gutterBottom='md'>
                  <Column sm={1} md={2} lg={3}>
                    <Typography
                      variant='small'
                      color='white'
                      gutterBottom='xxs'>
                      {'Followers'}
                    </Typography>
                    <Typography variant='h3' color='white'>
                      {'345k'}
                    </Typography>
                  </Column>
                  <Column sm={1} md={2} lg={3}>
                    <Typography
                      variant='small'
                      color='white'
                      gutterBottom='xxs'>
                      {'Listens'}
                    </Typography>
                    <Typography variant='h3' color='white'>
                      {'1.3m'}
                    </Typography>
                  </Column>
                  <Column sm={1} md={2} lg={3}>
                    <Typography
                      variant='small'
                      color='white'
                      gutterBottom='xxs'>
                      {'Tracks'}
                    </Typography>
                    <Typography variant='h3' color='white'>
                      {'98'}
                    </Typography>
                  </Column>
                </Row>
                <ArtistPopluarTracks />
              </Column>
            </Row>
          </LinearGradient>
        </Row>
        <ArtistReleases />
      </ScrollView>
    </>
  );
};

export default Artist;
