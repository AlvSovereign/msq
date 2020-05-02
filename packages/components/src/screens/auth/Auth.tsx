import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { useApolloClient, useQuery, useLazyQuery } from '@apollo/react-hooks';
import { Page, Typography, Input, Button } from 'components/src/ui';
import { _handleFacebookAuth } from './_handleFacebookAuth';
import { _handleGoogleAuth } from './_handleGoogleAuth';
import { GET_ME, SIGNIN, ADD_TOKEN_TO_CACHE } from '../../graphql/queries';
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

  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [signin, { data, loading, error }] = useLazyQuery(SIGNIN);

  React.useEffect(() => {
    if (data) {
      client.writeData({
        data: { token: data.socialSignin.token },
      });
      setToStorage('token', data.socialSignin.token);
      setIsSignedIn(true);
    }
  }, [data]);

  const handlePress = () => {
    // createUser({ variables: { input: { email, password } } });
  };

  const handleFacebookLoginPress = () => {
    _handleFacebookAuth();
  };

  const handleGoogleLoginPress = async () => {
    const result:
      | INewUserFromSocialInput
      | undefined = await _handleGoogleAuth();

    if (result) {
      const { photo, ...rest } = result;

      await signin({
        variables: { input: { avatar: photo, ...rest } },
      });
    }
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
