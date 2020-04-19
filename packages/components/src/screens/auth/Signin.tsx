import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Page, Typography, Input, Button } from 'components/src/ui';
const Image = require('components/src/assets/images/authBgImage.jpg');

const Signin = ({  }: SigninProps) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handlePress = () => {
    console.log('details: ', { email, password });
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
          gutterBottom='xxl'
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
          gutterBottom='sm'
          onPress={handlePress}
          variant='primary'
        />
        <Button
          label='Login with Facebook'
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
