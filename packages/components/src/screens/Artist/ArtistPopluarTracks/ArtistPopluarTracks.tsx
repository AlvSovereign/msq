import React from 'react';
import { Column, Row, TrackCard, Typography } from '../../../ui';
import theme from '../../../theme/theme';
import { _generateStyles } from './_generatedStyles';

const ArtistPopluarTracks = ({  }: ArtistPopluarTracksProps) => {
  const styles = _generateStyles(theme);

  return (
    <Row orientation='row'>
      <Column sm={4} md={8} lg={12}>
        <Typography color='white' variant='h5' gutterBottom='sm'>
          {'Most Popular Tracks'}
        </Typography>
        <TrackCard style={styles.trackCard} />
      </Column>
    </Row>
  );
};

export { ArtistPopluarTracks };

interface ArtistPopluarTracksProps {}
