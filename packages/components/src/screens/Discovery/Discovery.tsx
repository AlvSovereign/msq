import React from 'react';
import { Page } from '../../ui';
import Artist from '../Artist/Artist';

const Discovery = ({  }: DiscoveryProps) => {
  return (
    <Page>
      <Artist />
    </Page>
  );
};

export default Discovery;

interface DiscoveryProps {}
