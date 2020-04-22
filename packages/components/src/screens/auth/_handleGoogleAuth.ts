import React from 'react';
import { User } from '@react-native-community/google-signin';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-community/google-signin';
import Config from 'react-native-config';

const _handleGoogleAuth = async () => {
  console.log('Config: ', Config.OAUTH_GOOGLE_WEBCLIENTID);
  await GoogleSignin.configure({
    iosClientId: Config.OAUTH_GOOGLE_WEBCLIENTID,
    offlineAccess: true,
    webClientId: Config.OAUTH_GOOGLE_WEBCLIENTID,
  });

  try {
    await GoogleSignin.hasPlayServices({
      showPlayServicesUpdateDialog: true,
    });

    const result: User = await GoogleSignin.signIn();
    console.log('result: ', result);
    // const credential = firebase.auth.GoogleAuthProvider.credential(
    //   idToken,
    //   accessToken
    // );
    // await firebase.auth().signInWithCredential(credential);
  } catch (error) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      // user cancelled the login flow
    } else if (error.code === statusCodes.IN_PROGRESS) {
      // operation (e.g. sign in) is in progress already
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      // play services not available or outdated
    } else {
      // some other error happened
    }
  }
};

export { _handleGoogleAuth };
