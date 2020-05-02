import { User } from '@react-native-community/google-signin';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-community/google-signin';
import Config from 'react-native-config';

const _handleGoogleAuth = async () => {
  await GoogleSignin.configure({
    offlineAccess: true,
    webClientId: `${Config.OAUTH_GOOGLE_WEBCLIENTID}`,
  });

  try {
    await GoogleSignin.hasPlayServices({
      showPlayServicesUpdateDialog: true,
    });

    const { user }: User = await GoogleSignin.signIn();
    const { email, name, photo } = user;

    return { email, name, photo };
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
