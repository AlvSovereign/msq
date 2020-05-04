import React from 'react';
import { Button, Text, View } from 'react-native';
import { useQuery, useMutation, useLazyQuery } from '@apollo/react-hooks';
import { useNavigation } from '@react-navigation/native';
import { Typography, Page } from '../../ui';
import { GET_ME } from '../../graphql/queries';

const Welcome = ({  }: WelcomeProps) => {
  const navigation = useNavigation();

  const { data, loading, error } = useQuery(GET_ME);
  if (loading) {
    return <Text>{'Loading'}</Text>;
  }

  // const { name } = data.me;

  return (
    <Page>
      <View style={{ flex: 1 }}>
        {data && (
          <Typography variant='h1'>{`Welcome to msq: ${
            data.me.name
          }`}</Typography>
        )}
      </View>
    </Page>
  );
};

export default Welcome;

interface WelcomeProps {}
