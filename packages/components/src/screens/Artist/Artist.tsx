import React, { useState } from 'react';
import {
  Image,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { useDimensions } from 'react-native-web-hooks';
import LinearGradient from 'react-native-linear-gradient';
import { useQuery } from '@apollo/react-hooks';
import { GET_ME } from '../../graphql/queries';
import { Typography, Button, Row, Column } from '../../ui';
import theme from '../../theme/theme';
import { _generateStyles } from './_generateStyles';
import CountryFlags from '../../ui/CountryFlags/CountryFlags';
import TrackCard from '../../ui/TrackCard/TrackCard';

const profileImage = require('../../assets/images/me_square.png');

const Artist = ({ id }: ArtistProps) => {
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
        {/* <SafeAreaView style={styles.safeAreaView}> */}
        <Image
          onLayout={getImageDimensions}
          resizeMode='contain'
          source={profileImage}
          style={[styles.profileImage, { height: width }]}
        />
        <LinearGradient
          colors={['transparent', `${DARKGREY_700}99`]}
          locations={[0, 0.5]}>
          <View style={styles.contentContainer}>
            <Row orientation='row' gutterBottom='xxs'>
              <Typography variant='h1' color='white'>
                {name}
              </Typography>
            </Row>
            <Row orientation='row' gutterBottom='sm'>
              {countries && <CountryFlags countries={countries} />}
            </Row>
            <Typography variant='body1' style={styles.tag} gutterBottom='lg'>
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
                <Typography variant='small' color='white'>
                  {'Followers'}
                </Typography>
                <Typography variant='h3' color='white'>
                  {'345k'}
                </Typography>
              </Column>
              <Column sm={1} md={2} lg={3}>
                <Typography variant='small' color='white'>
                  {'Listens'}
                </Typography>
                <Typography variant='h3' color='white'>
                  {'1.3m'}
                </Typography>
              </Column>
              <Column sm={1} md={2} lg={3}>
                <Typography variant='small' color='white'>
                  {'Tracks'}
                </Typography>
                <Typography variant='h3' color='white'>
                  {'98'}
                </Typography>
              </Column>
            </Row>
          </View>
          <Row orientation='row'>
            <Column sm={4} md={8} lg={12} style={[styles.tab, styles.tabView]}>
              <Typography color='white' variant='h5' gutterBottom='sm'>
                {'Most Popular Tracks'}
              </Typography>
              <TrackCard style={styles.trackCard} />
            </Column>
          </Row>
        </LinearGradient>
        {/* </SafeAreaView> */}
      </ScrollView>
    </>
  );
};

export default Artist;

interface ArtistProps {
  id: string;
}
