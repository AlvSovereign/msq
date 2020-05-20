import React from 'react';
import { Image, Text, StatusBar, ScrollView, View } from 'react-native';
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
import ProfileImage from '../../ui/molecules/ProfileImage/ProfileImage';
import ArtistStats from './ArtistStats/ArtistStats';
import { useResponsive } from '../../theme/hooks';

const coverImage = require('../../assets/images/profile-cover.jpg');
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
  const breakpoint = useResponsive();

  return (
    <>
      <StatusBar barStyle='light-content' />
      <ScrollView style={styles.page}>
        <Row orientation='row' style={styles.heroContainer}>
          <Image
            resizeMode='cover'
            source={coverImage}
            style={styles.profileImage}
          />
          <LinearGradient
            colors={['transparent', `${DARKGREY_700}EE`]}
            locations={[0, 0.7]}
            style={styles.contentContainer}>
            <Row
              gutterBottom='xxs'
              horizontalPadding='lg'
              orientation='row'
              spacing={breakpoint === 'lg' ? 'lg' : 'md'}
              wrap>
              <Column
                sm={4}
                md={8}
                lg={6}
                style={{
                  alignItems: breakpoint === 'lg' ? 'flex-start' : 'center',
                }}>
                <Typography variant='hero' color='white' gutterBottom='xxs'>
                  {name}
                </Typography>
                {countries && (
                  <CountryFlags countries={countries} gutterBottom='sm' />
                )}
                <Typography
                  variant='body1'
                  style={styles.tag}
                  gutterBottom='md'>
                  {tag}
                </Typography>
                <ArtistStats />
                <Row orientation='row'>
                  <Button
                    label='Play All'
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
              </Column>
              <Column sm={4} md={8} lg={6}>
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
