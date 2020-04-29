import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import gql from 'graphql-tag';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { Page, Typography, Input, Button } from 'components/src/ui';
import { _handleFacebookAuth } from './_handleFacebookAuth';
import { _handleGoogleAuth } from './_handleGoogleAuth';
// import { IUser } from 'components/src/types';

const Image = require('components/src/assets/images/authBgImage.jpg');

const CREATE_ME = gql`
  mutation CreateMe($input: NewUserInput!) {
    me(input: $input) {
      id
      email
      name
      token
      verified
      accountType
      avatar
      role
    }
  }
`;

const Signin = ({  }: SigninProps) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [createUser] = useMutation(CREATE_ME);

  const handlePress = () => {
    createUser({ variables: { input: { email, password } } });
  };

  const handleFacebookLoginPress = () => {
    _handleFacebookAuth();
  };

  const handleGoogleLoginPress = async () => {
    const result:
      | INewUserFromSocialInput
      | undefined = await _handleGoogleAuth();

    await createUser({ variables: { input: result } });
  };

  return (
    <Page backgroundImage={Image} blur={true}>
      <View style={styles.container}>
        <Typography
          display='block'
          gutterBottom='md'
          textAlign='left'
          variant='h3'>
          {'Sign In'}
        </Typography>
        <Button
          leftIcon='facebook'
          label='Continue with Facebook'
          gutterBottom='sm'
          onPress={handleFacebookLoginPress}
          variant='facebook'
        />
        <Button
          leftIcon='google'
          label='Continue with Google'
          gutterBottom='lg'
          onPress={handleGoogleLoginPress}
          variant='google'
        />
        <Typography
          display='block'
          gutterBottom='lg'
          textAlign='center'
          variant='body1'>
          {'- OR -'}
        </Typography>
        <Typography
          display='block'
          gutterBottom='xxs'
          textAlign='left'
          variant='body1'>
          {
            'Sign in with your email and password. If you forget any of your details, you can reset them at any time by:'
          }
        </Typography>
        <Typography
          display='block'
          gutterBottom='lg'
          textAlign='left'
          variant='body1'>
          {'Clicking Here'}
        </Typography>
        <Input
          onChangeText={(value: string) => setEmail(value)}
          placeholder='Email'
          type='email'
          value={email}
        />
        <Input
          onChangeText={(value: string) => setPassword(value)}
          placeholder='Password'
          type='password'
          value={password}
        />
        <Button
          label='Login'
          gutterBottom='xxl'
          onPress={handlePress}
          variant='primary'
        />
        <Typography
          color='lightGrey'
          display='block'
          gutterBottom='xxs'
          textAlign='left'
          variant='small'>
          {
            'This is some random Lorem Ipsum text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt commodo varius. Aliquam id egestas turpis, sed rutrum lorem. Duis ac quam aliquam, ultrices.'
          }
        </Typography>
      </View>
    </Page>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
});

export { Signin };

interface SigninProps {}

interface INewUserInput {
  email: String;
  password: String;
}

interface INewUserFromSocialInput {
  email: String;
  name: String | null;
  picture?: String | null;
}
