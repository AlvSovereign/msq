import React, { useState } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { useDimensions } from 'react-native-web-hooks';
import LinearGradient from 'react-native-linear-gradient';
import { TabView, SceneMap } from 'react-native-tab-view';
import { useQuery } from '@apollo/react-hooks';
import { GET_ME } from '../../graphql/queries';
import { Typography, Button, Row, Column } from '../../ui';
import theme from '../../theme/theme';
import { _generateStyles } from './_generateStyles';
import CountryFlags from '../../ui/CountryFlags/CountryFlags';
import RenderTabBar from './RenderTabBar';

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
  const { BLACK, BLUE_500 } = theme.color;

  const [gradientStart, setGradientStart] = useState<number>(0);

  const [index, setTabIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Overview' },
    { key: 'second', title: 'About' },
  ]);

  const FirstRoute = () => <View style={[styles.tab, styles.tabView]} />;

  const SecondRoute = () => (
    <View style={[styles.tab, styles.tabView]}>
      <Typography variant='h5' gutterBottom='sm'>
        {'Biography'}
      </Typography>
      <Typography variant='body2'>{biography}</Typography>
    </View>
  );

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

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
        <SafeAreaView style={styles.safeAreaView}>
          <LinearGradient
            colors={['transparent', `${BLACK}99`]}
            locations={[0, 0.6]}>
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
          </LinearGradient>
          <Row orientation='row'>
            <TabView
              navigationState={{ index, routes }}
              renderTabBar={(props) => (
                <RenderTabBar
                  {...props}
                  index={index}
                  setTabIndex={setTabIndex}
                  styles={styles}
                />
              )}
              swipeEnabled={false}
              renderScene={renderScene}
              onIndexChange={setTabIndex}
              initialLayout={{ width }}
            />
          </Row>
        </SafeAreaView>
      </ScrollView>
    </>
  );
};

export default Artist;

interface ArtistProps {
  id: string;
}
