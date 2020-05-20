import React, { useContext } from 'react';
import { View } from 'react-native';
import { Row, Typography } from '../../../ui';
import { MsqThemeContext } from '../../../theme/ThemeContext';
import { _generateStyles } from './_generateStyles';

const ArtistStats = ({  }: ArtistStatsProps) => {
  const theme = useContext(MsqThemeContext);
  const styles = _generateStyles(theme);

  return (
    <Row orientation='row' gutterBottom='md'>
      <View style={styles.statContainer}>
        <Typography
          variant='body1'
          color='white'
          gutterBottom='xxs'
          textAlign='center'>
          {'Followers'}
        </Typography>
        <Typography variant='stats' color='white' textAlign='center'>
          {'345k'}
        </Typography>
      </View>
      <View style={styles.statContainer}>
        <Typography
          variant='body1'
          color='white'
          gutterBottom='xxs'
          textAlign='center'>
          {'Listens'}
        </Typography>
        <Typography variant='stats' color='white' textAlign='center'>
          {'1.3m'}
        </Typography>
      </View>
      <View style={styles.statContainer}>
        <Typography
          variant='body1'
          color='white'
          gutterBottom='xxs'
          textAlign='center'>
          {'Tracks'}
        </Typography>
        <Typography variant='stats' color='white' textAlign='center'>
          {'98'}
        </Typography>
      </View>
    </Row>
  );
};

export default ArtistStats;

interface ArtistStatsProps {}
