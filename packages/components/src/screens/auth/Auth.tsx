import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { useApolloClient, useQuery, useMutation } from '@apollo/react-hooks';
import { Page, Typography, Input, Button } from 'components/src/ui';
import { useForm } from 'react-hook-form';
import { _handleFacebookAuth } from './_handleFacebookAuth';
import { _handleGoogleAuth } from './_handleGoogleAuth';
import { GET_ME } from '../../graphql/queries';
import { SIGNIN, SOCIAL_SIGNIN } from '../../graphql/mutations';
import { setToStorage } from '../../utils/_storageHelper';

const Image = require('components/src/assets/images/authBgImage.jpg');

const Auth = ({ setIsSignedIn }: SigninProps) => {
  const client = useApolloClient();
  const {
    data: getMeData,
    loading: getMeLoading,
    error: getMeError,
  } = useQuery(GET_ME);

  React.useEffect(() => {
    if (getMeData) {
      setIsSignedIn(true);
    }
  }, [getMeData]);

  if (getMeData) return null;

  const { getValues, register, setValue, handleSubmit, errors } = useForm();
  React.useEffect(() => {
    register({ name: 'email' }, { required: true });
    register({ name: 'password' }, { required: true });
  }, [register]);

  const [
    socialSignin,
    { data: socialData, loading: socialLoading, error: socialError },
  ] = useMutation(SOCIAL_SIGNIN);

  React.useEffect(() => {
    if (socialData) {
      client.writeData({
        data: { token: data.socialSignin.token },
      });
      if (data.socialSignin.token) {
        setToStorage('token', data.socialSignin.token);
      }
      setIsSignedIn(true);
    }
  }, [socialData]);

  const socialAuthCallback = async (result: any) => {
    await socialSignin({
      variables: { input: result },
    });
  };

  const handleFacebookLoginPress = () => {
    _handleFacebookAuth(socialAuthCallback);
  };

  const handleGoogleLoginPress = () => {
    _handleGoogleAuth(socialAuthCallback);
  };

  const [signin, { data, loading, error }] = useMutation(SIGNIN);

  const handlePress = (data) => {
    signin({ variables: { input: data } });
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
          onChangeText={(value: string) => setValue('email', value, true)}
          placeholder='Email'
          type='email'
        />
        <Input
          onChangeText={(value: string) => setValue('password', value, true)}
          placeholder='Password'
          type='password'
        />
        <Button
          label='Login'
          gutterBottom='xxl'
          onPress={handleSubmit(handlePress)}
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

export default Auth;

interface SigninProps {
  navigation: any;
  setIsSignedIn: (arg: boolean) => void;
}

interface INewUserInput {
  email: String;
  password: String;
}

interface INewUserFromSocialInput {
  email: String;
  name: string | null;
  photo: string | null;
}
