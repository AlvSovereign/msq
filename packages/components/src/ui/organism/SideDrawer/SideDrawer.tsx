import React from 'react';
import { View } from 'react-native';
import { Row, Typography } from '../..';

const SideDrawer = ({ styles }: any) => {
  return (
    <View style={styles.sideDrawerContainer}>
      <Row align='flex-start'>
        <Typography gutterBottom='xxl' variant='h3'>
          {'msq'}
        </Typography>
        <Typography gutterBottom='md' variant='label'>
          {'Browse Music'}
        </Typography>
        <Typography gutterBottom='xl' variant='h6'>
          {'Home'}
        </Typography>
        <Typography gutterBottom='xl' variant='h6'>
          {'Recommendations'}
        </Typography>
        <Typography gutterBottom='xl' variant='h6'>
          {'New Releases'}
        </Typography>
        <Typography gutterBottom='xl' variant='h6'>
          {'Top Charts'}
        </Typography>
        <Typography gutterBottom='xxl' variant='h6'>
          {'Feed'}
        </Typography>
        <Typography gutterBottom='md' variant='label'>
          {'Your Music'}
        </Typography>
        <Typography gutterBottom='xl' variant='h6'>
          {'Favourites'}
        </Typography>
        {/* ExpandableView */}
        <Typography gutterBottom='xl' variant='h6'>
          {'Playlist'}
        </Typography>
        <Typography gutterBottom='md' variant='label'>
          {'Artist Panel'}
        </Typography>
        <Typography gutterBottom='xl' variant='h6'>
          {'Your Stats'}
        </Typography>
      </Row>
    </View>
  );
};

export default SideDrawer;
